"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enquirySchema,
  type EnquiryInput,
  FITNESS_GOALS,
  MEMBERSHIP_INTERESTS,
  CONTACT_WINDOWS,
  isValidIndianMobile,
} from "@/lib/validation/enquiry";
import { branches } from "@/content/branches";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";
import { CheckCircle2, AlertCircle, Loader2, MessageCircle, Send, RotateCcw } from "lucide-react";
import Link from "next/link";

export interface EnquiryFormProps {
  defaultBranch?: "nerul" | "airoli";
  defaultGoal?: "strength" | "fatloss" | "performance" | "coaching" | "general";
  defaultMembership?: "annual" | "quarterly" | "monthly" | "corporate" | "exploring";
  className?: string;
  showDirectWhatsApp?: boolean;
}

export function EnquiryForm({
  defaultBranch = "nerul",
  defaultGoal = "strength",
  defaultMembership = "annual",
  className = "",
  showDirectWhatsApp = true,
}: EnquiryFormProps) {
  const [submissionState, setSubmissionState] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [submittedLead, setSubmittedLead] = React.useState<{
    leadId?: string;
    fullName: string;
    mobileNumber: string;
    preferredBranch: "nerul" | "airoli";
    fitnessGoal: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      preferredBranch: defaultBranch,
      fitnessGoal: defaultGoal,
      membershipInterest: defaultMembership,
      preferredContactTime: "evening",
      consent: true,
      honeypot: "",
    },
  });

  const selectedBranch = watch("preferredBranch");
  const mobileValue = watch("mobileNumber") || "";
  const isMobileValid = isValidIndianMobile(mobileValue);
  const branchData = branches[selectedBranch] || branches.nerul;

  const onSubmit = async (data: EnquiryInput) => {
    setSubmissionState("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Submission failed. Please check your details and try again."
        );
      }

      setSubmissionState("success");
      setSubmittedLead({
        leadId: result.leadId,
        fullName: data.fullName,
        mobileNumber: data.mobileNumber,
        preferredBranch: data.preferredBranch,
        fitnessGoal: data.fitnessGoal,
      });

      // Track analytics conversion
      trackFormSubmit(data.preferredBranch, data.fitnessGoal);
    } catch (err: unknown) {
      setSubmissionState("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  const handleReset = () => {
    reset({
      fullName: "",
      mobileNumber: "",
      preferredBranch: defaultBranch,
      fitnessGoal: defaultGoal,
      membershipInterest: defaultMembership,
      preferredContactTime: "evening",
      consent: true,
      honeypot: "",
    });
    setSubmissionState("idle");
    setErrorMessage(null);
    setSubmittedLead(null);
  };

  // SUCCESS STATE
  if (submissionState === "success" && submittedLead) {
    const waPrefill = encodeURIComponent(
      `Hi OCTACORE ${submittedLead.preferredBranch.toUpperCase()} Branch, my name is ${submittedLead.fullName}. I submitted an online enquiry (Ref: ${submittedLead.leadId || "Web"}) regarding ${submittedLead.fitnessGoal} and would like to connect directly.`
    );
    const waUrl = `https://wa.me/${branchData.whatsappNumber}?text=${waPrefill}`;

    return (
      <div
        className={`bg-card animate-fade-in flex flex-col items-center gap-6 rounded-2xl border border-white/10 p-6 text-center shadow-2xl sm:p-8 ${className}`}
        role="alert"
        aria-live="polite"
      >
        <div className="bg-accent/20 border-accent text-accent flex h-16 w-16 items-center justify-center rounded-full border shadow-[0_0_24px_rgba(255,133,0,0.4)]">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <div className="flex max-w-md flex-col gap-2">
          <span className="font-display text-accent text-xs font-semibold tracking-[0.25em] uppercase">
            Enquiry Received
          </span>
          <h3 className="font-display text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
            WELCOME TO THE BROTHERHOOD
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Thank you, <strong className="text-white">{submittedLead.fullName}</strong>. Your
            application profile has been dispatched directly to the{" "}
            <span className="text-accent font-bold uppercase">
              {submittedLead.preferredBranch} Branch Desk
            </span>
            . Our performance directors will contact you during your preferred consultation window.
          </p>
          {submittedLead.leadId && (
            <div className="bg-bg-2 text-text-muted mt-2 rounded-lg border border-white/5 p-2 font-mono text-xs">
              Reference ID: {submittedLead.leadId}
            </div>
          )}
        </div>

        {/* Immediate WhatsApp Follow-up */}
        <div className="flex w-full max-w-sm flex-col gap-3 pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick(submittedLead.preferredBranch, branchData.whatsappNumber)
            }
            className="font-display flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:bg-[#20ba59] active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            <span>Chat On WhatsApp Now</span>
          </a>

          <button
            onClick={handleReset}
            type="button"
            className="bg-bg-2 hover:bg-card-hover text-text-muted font-display inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/5 px-4 py-2.5 text-xs tracking-wider uppercase transition-colors hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-card flex flex-col gap-6 rounded-2xl border border-white/5 p-5 shadow-xl sm:p-8 ${className}`}
    >
      {/* Header ribbon */}
      <div className="flex flex-col items-start justify-between gap-2 border-b border-white/5 pb-4 sm:flex-row sm:items-center">
        <div>
          <span className="font-display text-accent block text-xs font-semibold tracking-[0.25em] uppercase">
            Direct Application
          </span>
          <h3 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
            Membership &amp; Training Enquiry
          </h3>
        </div>
        <div className="bg-bg-2 text-text-muted flex items-center gap-2 rounded-full border border-white/5 px-3 py-1 text-xs">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
          <span className="font-display text-[11px] tracking-wider uppercase">
            Fast Desk Response
          </span>
        </div>
      </div>

      {/* Global Error Banner */}
      {submissionState === "error" && errorMessage && (
        <div
          className="bg-error/15 border-error/40 text-error animate-fade-in flex items-start gap-3 rounded-xl border p-4 text-sm"
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <div className="flex-1">
            <p className="font-semibold">{errorMessage}</p>
            <p className="text-error/80 mt-1 text-xs">
              If the problem persists, please call our desk directly at{" "}
              <a href={`tel:${branchData.phone}`} className="font-bold underline">
                {branchData.displayPhone}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        {/* Honeypot field (hidden from view and assistive tech) */}
        <input
          type="text"
          {...register("honeypot")}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* 01: Full Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="fullName"
            className="font-display flex items-center justify-between text-xs font-semibold tracking-wider text-white uppercase"
          >
            <span>01 // Full Name</span>
            <span className="text-accent font-mono text-[10px] font-normal">REQUIRED</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Rahul Sharma"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
            className={`bg-bg-2 placeholder:text-text-muted/50 min-h-[48px] w-full rounded-xl border px-4 text-sm text-white transition-all focus:outline-none ${
              errors.fullName
                ? "border-error focus:ring-error focus:ring-1"
                : "focus:border-accent border-white/10"
            }`}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              role="alert"
              aria-live="polite"
              className="text-error mt-0.5 text-xs"
            >
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* 02: Mobile Contact (+91) */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="mobileNumber"
            className="font-display flex items-center justify-between text-xs font-semibold tracking-wider text-white uppercase"
          >
            <span>02 // Mobile Contact Number</span>
            <span className="text-accent font-mono text-[10px] font-normal">
              DIRECT WHATSAPP &amp; CALL
            </span>
          </label>
          <div className="flex items-center gap-2">
            <div className="bg-bg-2 font-display text-accent flex h-12 items-center justify-center rounded-xl border border-white/10 px-3.5 text-sm font-bold select-none">
              +91
            </div>
            <div className="relative flex-1">
              <input
                id="mobileNumber"
                type="tel"
                maxLength={10}
                placeholder="10-digit number (e.g. 9876543210)"
                aria-invalid={Boolean(errors.mobileNumber)}
                aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                {...register("mobileNumber")}
                className={`bg-bg-2 placeholder:text-text-muted/50 min-h-[48px] w-full rounded-xl border px-4 text-sm text-white transition-all focus:outline-none ${
                  errors.mobileNumber
                    ? "border-error focus:ring-error focus:ring-1"
                    : "focus:border-accent border-white/10"
                }`}
              />
              {isMobileValid && (
                <CheckCircle2 className="text-accent pointer-events-none absolute top-1/2 right-3.5 h-5 w-5 -translate-y-1/2" />
              )}
            </div>
          </div>
          {errors.mobileNumber && (
            <p
              id="mobileNumber-error"
              role="alert"
              aria-live="polite"
              className="text-error mt-0.5 text-xs"
            >
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        {/* 03: Preferred Club Facility */}
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-xs font-semibold tracking-wider text-white uppercase">
            03 // Preferred Club Facility
          </span>
          <div className="bg-bg-2 grid grid-cols-2 gap-2 rounded-xl border border-white/5 p-1">
            <button
              type="button"
              onClick={() => setValue("preferredBranch", "nerul")}
              className={`flex min-h-[48px] flex-col items-center justify-center rounded-lg transition-all ${
                selectedBranch === "nerul"
                  ? "bg-accent text-bg font-bold shadow-md"
                  : "text-text-muted bg-transparent hover:text-white"
              }`}
            >
              <span className="font-display text-xs tracking-wider uppercase sm:text-sm">
                Nerul Branch
              </span>
              <span className="text-[10px] font-normal opacity-80">Shiravane Sec 1</span>
            </button>

            <button
              type="button"
              onClick={() => setValue("preferredBranch", "airoli")}
              className={`flex min-h-[48px] flex-col items-center justify-center rounded-lg transition-all ${
                selectedBranch === "airoli"
                  ? "bg-accent text-bg font-bold shadow-md"
                  : "text-text-muted bg-transparent hover:text-white"
              }`}
            >
              <span className="font-display text-xs tracking-wider uppercase sm:text-sm">
                Airoli Branch
              </span>
              <span className="text-[10px] font-normal opacity-80">Reliable Tech Park</span>
            </button>
          </div>
        </div>

        {/* 04 & 05: Goals & Membership Interest Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Fitness Goal */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fitnessGoal"
              className="font-display text-xs font-semibold tracking-wider text-white uppercase"
            >
              04 // Core Fitness Goal
            </label>
            <select
              id="fitnessGoal"
              {...register("fitnessGoal")}
              className="bg-bg-2 focus:border-accent min-h-[48px] w-full rounded-xl border border-white/10 px-3.5 text-sm text-white focus:outline-none"
            >
              {FITNESS_GOALS.map((goal) => (
                <option key={goal.value} value={goal.value}>
                  {goal.label}
                </option>
              ))}
            </select>
          </div>

          {/* Membership Interest */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="membershipInterest"
              className="font-display text-xs font-semibold tracking-wider text-white uppercase"
            >
              05 // Protocol / Tier
            </label>
            <select
              id="membershipInterest"
              {...register("membershipInterest")}
              className="bg-bg-2 focus:border-accent min-h-[48px] w-full rounded-xl border border-white/10 px-3.5 text-sm text-white focus:outline-none"
            >
              {MEMBERSHIP_INTERESTS.map((interest) => (
                <option key={interest.value} value={interest.value}>
                  {interest.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 06: Preferred Consultation Window */}
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-xs font-semibold tracking-wider text-white uppercase">
            06 // Preferred Consultation Window
          </span>
          <Controller
            control={control}
            name="preferredContactTime"
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {CONTACT_WINDOWS.map((windowOption) => (
                  <label
                    key={windowOption.value}
                    className={`flex min-h-[48px] cursor-pointer flex-col items-center justify-center rounded-xl border p-2.5 text-center transition-all active:scale-95 ${
                      field.value === windowOption.value
                        ? "bg-accent/15 border-accent text-accent shadow-sm"
                        : "bg-bg-2 text-text-muted border-white/5 hover:border-white/15 hover:text-white"
                    }`}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      value={windowOption.value}
                      checked={field.value === windowOption.value}
                      onChange={() => field.onChange(windowOption.value)}
                    />
                    <span className="font-display text-xs font-bold tracking-wider uppercase">
                      {windowOption.label}
                    </span>
                    <span className="text-text-muted mt-0.5 text-[10px]">{windowOption.hours}</span>
                  </label>
                ))}
              </div>
            )}
          />
        </div>

        {/* 07: Consent Checkbox */}
        <div className="flex flex-col gap-1 pt-1">
          <label className="text-text-muted flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed">
            <input
              type="checkbox"
              {...register("consent")}
              className="bg-bg-2 text-accent focus:ring-accent mt-0.5 h-4 w-4 rounded border-white/20"
            />
            <span>
              I consent to OCTACORE Fitness contacting me via phone and WhatsApp regarding
              membership options and facility tours. Read our{" "}
              <Link
                href="/privacy-policy"
                className="text-accent underline transition-colors hover:text-white"
                target="_blank"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consent && (
            <p role="alert" className="text-error pl-6 text-xs">
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submissionState === "submitting"}
          className="bg-accent hover:bg-accent-2 text-bg font-display mt-2 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl text-base font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(255,133,0,0.35)] transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        >
          {submissionState === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>DISPATCHING PROFILE...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>SUBMIT ENQUIRY</span>
            </>
          )}
        </button>
      </form>

      {/* Direct WhatsApp Quick Chat Alternative */}
      {showDirectWhatsApp && (
        <div className="text-text-muted flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs sm:flex-row">
          <span>Prefer instant direct conversation?</span>
          <a
            href={`https://wa.me/${branchData.whatsappNumber}?text=${encodeURIComponent(
              branchData.whatsappPrefillText
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(selectedBranch, branchData.whatsappNumber)}
            className="bg-bg-2 hover:bg-card-hover font-display inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>Chat With {branchData.name.replace("OCTACORE Fitness, ", "")}</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default EnquiryForm;
