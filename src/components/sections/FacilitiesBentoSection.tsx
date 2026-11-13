import * as React from "react";
import Link from "next/link";
import { Snowflake, DoorOpen, Lock, Car, Video, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const AMENITIES = [
  { icon: Snowflake, label: "Full Air Conditioning" },
  { icon: DoorOpen, label: "Changing Rooms" },
  { icon: Lock, label: "Secure Lockers" },
  { icon: Car, label: "Dedicated Parking" },
  { icon: Video, label: "24/7 CCTV Security" },
  { icon: Sparkles, label: "M/F Washrooms" },
];

export function FacilitiesBentoSection() {
  return (
    <section className="bg-bg px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="facilities-heading">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-accent-2 h-2 w-2 rounded-full" />
              <span className="font-display text-accent-2 text-xs font-semibold tracking-[0.25em] uppercase">
                Atmosphere &amp; Gear
              </span>
            </div>
            <h2
              id="facilities-heading"
              className="font-display text-3xl leading-tight font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
            >
              TRAIN WITH PURPOSE.
              <br />
              <span className="text-text-muted">TRAIN WITH THE RIGHT EQUIPMENT.</span>
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Tile 1: Large Free Weights (spans 2 columns on lg) */}
          <div className="bg-card group relative h-56 overflow-hidden rounded-2xl border border-white/5 shadow-xl sm:h-64 md:col-span-2 lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKF9-xm8qpKRQocBHm-SnJqO5MH0jTCBZXkKUy23b5mBYNX3jmIAg8g4Pgi53EBfOUA61z29gfZWkDBeXV0f0EAk0GlfSp0xjSXaaWx9GYHSQ5zh_Kd2CdZblgUzj4xySMeA7Nkl5N37bDDq3h7Si3ZlfbdImBxDYdRESD8UOeaGqFMDFdPmsMIYKaccyOphNFtNE2jy0jQ5Fc3G4Qz5vj1EffwKioOtBPXKuNzJg"
              alt="Heavy dumbbell rack and calibrated Olympic plates under amber spotlighting"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="from-bg via-bg/40 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="absolute right-4 bottom-4 left-4">
              <span className="font-display text-accent text-[11px] font-semibold tracking-wider uppercase">
                Core Arena
              </span>
              <h3 className="font-display mt-0.5 text-xl font-bold tracking-wide text-white uppercase sm:text-2xl">
                Free Weights &amp; Olympic Racks
              </h3>
              <p className="text-text-muted mt-1 max-w-lg text-xs sm:text-sm">
                Heavy dumbbell racks up to 50kg, calibrated steel plates, and power cages.
              </p>
            </div>
          </div>

          {/* Tile 2: Biomechanical Machines */}
          <div className="bg-card group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl border border-white/5 p-4 shadow-lg sm:h-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJODfi-Sy3QUFPvh3oHPMzBmxAe44822Ckp3ViJbn18Q2Z64-zwKw5-lzUF5U1Nh6tuPY73dBFZfguCJ-DAYvkcG-oA7TB_RpizP7OGMGa8YtGhOSnO2JT9zwnVe8zC5PxlQEFY8GJJmZVP0Y078ofUOMTb-o0Vcz-pNb7MHPh10eRS6hhulWdBKVXsTpBdyI-IDfZRAp-gPD-lZlr0ridBIMNusHEi_t-oIS0poQ"
              alt="Biomechanical selectorized machine lines in sleek matte black"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="from-bg via-bg/50 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="relative z-10">
              <span className="font-display text-accent-2 text-[10px] font-semibold tracking-wider uppercase">
                Ergonomics
              </span>
              <h4 className="font-display mt-0.5 text-lg leading-tight font-bold text-white uppercase sm:text-xl">
                Biomechanical Machines
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                Isolate target muscle chains with precision resistance curves.
              </p>
            </div>
          </div>

          {/* Tile 3: Conditioning Zone */}
          <div className="bg-card group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl border border-white/5 p-4 shadow-lg sm:h-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc16_gy6qhFZXk8Pdg4r77uDRcWczsUHKT_QLdycmqiq1I6En0fBimf9n9V0y5MIvrbgD2cSWIcY1PvNklFYVCRRcUmuipgEkEHLtPNt4AJN9VNF__a70h_acULkOw1Smov9bLBgbNYZ1Qj2pS4cpJpNIsX-PebQEnZJ3Iyd70DapvDdCZZt821qASdCdffAo61cztJCrpuauhBLZhfVZJbcRhd1eiEAKvmgpRhf0"
              alt="High-end rowers and curved runners in conditioning zone"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="from-bg via-bg/50 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="relative z-10">
              <span className="font-display text-accent text-[10px] font-semibold tracking-wider uppercase">
                Cardio
              </span>
              <h4 className="font-display mt-0.5 text-lg leading-tight font-bold text-white uppercase sm:text-xl">
                Conditioning Zone
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                High-output cardiovascular gear for maximum metabolic burn.
              </p>
            </div>
          </div>

          {/* Tile 4: Battle Ropes & Functional Turf (spans 2 cols on lg) */}
          <div className="bg-card group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl border border-white/5 p-5 shadow-lg sm:h-64 md:col-span-2 lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbXkFlRpIawwIlo8ysnItYM9LZSUApB8F2iRTyM5H7ERKS0t68W3WxdtMmL3Mk8AzZ5KIFf36SfklfZAnDQvSeXXv9noOQzrmF8NPYLEuK6fvNMYuQy5XCwqPElwGbXfL3gtBJBEe08lMjBv0Dc_dRY59IIQE4zIhSQuTYcyWlTeWckfARxkJC80eOQmzDzM9xOaM7BkQx8AlVsSRiWzLIF_5mHiEh7CvIAblYQf4"
              alt="Heavy battle ropes and functional indoor turf track"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="from-bg via-bg/40 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="relative z-10">
              <span className="font-display text-accent text-[11px] font-semibold tracking-wider uppercase">
                High Output
              </span>
              <h4 className="font-display text-xl font-bold text-white uppercase sm:text-2xl">
                Battle Ropes &amp; Functional Turf
              </h4>
              <p className="text-text-muted mt-0.5 text-xs sm:text-sm">
                Sled push lanes, kettlebell bays, and high-tensile poly ropes.
              </p>
            </div>
          </div>
        </div>

        {/* Facility Amenities 3x2 Grid */}
        <div className="mt-8 flex flex-col gap-3">
          <span className="font-display text-text-muted text-xs font-semibold tracking-[0.2em] uppercase">
            Facility Amenities
          </span>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {AMENITIES.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.label}
                  className="bg-card flex items-center gap-3 rounded-xl border border-white/5 p-3.5 transition-colors hover:border-white/10"
                >
                  <Icon className="text-accent h-5 w-5 shrink-0" />
                  <span className="text-xs font-medium text-white sm:text-sm">{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Link Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/facilities"
            className="bg-bg-2 hover:border-accent font-display inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-all"
          >
            <span>VIEW ALL FACILITY SPECIFICATIONS</span>
            <ArrowRight className="text-accent h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesBentoSection;
