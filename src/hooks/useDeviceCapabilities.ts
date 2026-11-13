"use client";

import * as React from "react";
import { useReducedMotion } from "./useReducedMotion";

export interface DeviceCapabilities {
  isTouch: boolean;
  isPointerFine: boolean;
  canRender3D: boolean;
  saveData: boolean;
  isLowEnd: boolean;
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const prefersReducedMotion = useReducedMotion();
  const [capabilities, setCapabilities] = React.useState<DeviceCapabilities>({
    isTouch: false,
    isPointerFine: true,
    canRender3D: false,
    saveData: false,
    isLowEnd: false,
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Pointer fine (desktop mouse) vs coarse (mobile touch)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;

    // Save-Data header indicator
    interface NetworkInformationWithSaveData {
      saveData?: boolean;
    }
    const nav = navigator as Navigator & {
      connection?: NetworkInformationWithSaveData;
      deviceMemory?: number;
    };
    const saveData = Boolean(nav.connection?.saveData);

    // Hardware specifications
    const memory = nav.deviceMemory ?? 8;
    const cores = navigator.hardwareConcurrency ?? 8;
    const isLowEnd = memory < 4 || cores < 4;

    // WebGL capability test
    let hasWebGL = false;
    try {
      const canvas = document.createElement("canvas");
      hasWebGL = Boolean(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch {
      hasWebGL = false;
    }

    const canRender3D = hasWebGL && !saveData && !isLowEnd && !prefersReducedMotion;

    setCapabilities({
      isTouch,
      isPointerFine,
      canRender3D,
      saveData,
      isLowEnd,
    });
  }, [prefersReducedMotion]);

  return capabilities;
}
