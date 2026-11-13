"use client";

import * as React from "react";
import {
  Dumbbell,
  Building,
  Info,
  Wind,
  Lock,
  Bath,
  Car,
  Video,
  Shield,
  Sparkles,
} from "lucide-react";
import { gearInventory, type GearCategory } from "@/content/facilities";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AnswerBlock } from "@/components/seo/AnswerBlock";

const gearImages: Record<string, string> = {
  dumbbells:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2-pMuTeS_eVjgcQa09e5o-YADsleJi4_8BZ5UmirIKI1Ui1ptIRA3CpeuUipUe-7kcOXdnMojyiPu36uU7aYy4Ev4X8h6k8yuCKp9rLoCpEU6HEanUgcB849AIDyvemR-4BTkssPmWcHsenabqLFG_w8LoRYS8P7HGylNF-3gWf0FNZi0r3XujvsnxtUSp_Gr99MPAe63jfYiKlVw61lJVGuILtoMOwvN0BeLO7w",
  "olympic-barbells":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBqzmPcNm34CiKigEZ6pLbornVjohpzYrgOMcD7PdGmyqQCreQmU5d3hr6XuLXHe1AbX_3rhl_tQt12qGSVesXjzHd-HhQIqoO9tLLQrNGtF4ooomwln2-k9986AnfR5V5jg6eo0sXzvghs9007xK1EYXXhy5v7TC5lOjdi5j-nrlJGa4O4yV3QrYIkqZ2BnxSodFHOiMXl8p4v-SUEE_YJ92TNmB8A6fyTvODqNAE",
  "chest-press":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXeYIPhbtk9FyvAcr8wl4aAzcKNNw3bobmx8cZDcZAGsNVYdWA-2LN4ewaqbRf7l1yb1Y4sn9X6xX02TdS9-Spbz9lIGeBkKqni081KEYUNn1wk16z4-V3XaVtwhZajZa-e9mJ1MavRHHfZadcnmRnHjPCphNBHe88qGd69w1bjvGDchwHf_iBHjHkq2H314esWEwWMlKBDU7dzX2FpHMKZCLgUFPC5EYigiXf-cI",
  "cable-towers":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAR4lIWAtOa2k60tapJzK-J06Awtw1ossAy2z23E_uxckYo_YN_SiZlHjvHhf_bMzwWjSCXWY2vnzs3GGI_Ebll8ejW91a9QQHoWm7ze_997Fet4RzL_a3Wd8YxMGctNnY3n2bbJ8nGuTP4G_soIyflOCvQ8mFPyOHOsFnzs2glBcgrccIPRl0e3VBLVLF5fyMpuZk5r30qGY1fnpO-TH0AtjpaL_IbTfyo6erqiV8",
  "assisted-pullup":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfsdNxIqSo-3x55bVMSc92r5B_IrtQCggeevXqr89GV69SFS2v5EB7xDHjKt3PUvYzyuma4RXZOemtFwVviiBs3kk38ldGpqJQ-kiVAdpIOhcuD-nT5zjiR1WkdM7JC93Ha4ZHI7Hf3FijYy1_eVvPusGCQ-ZW9w3E0W6mi0nLNUjSN6LA4EVqg-HeQGM_424hZ8pURgi8KqNyTyTF1dCq9xQ7XcGqsNz7RODwwE",
  "abdominal-hub":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2-pMuTeS_eVjgcQa09e5o-YADsleJi4_8BZ5UmirIKI1Ui1ptIRA3CpeuUipUe-7kcOXdnMojyiPu36uU7aYy4Ev4X8h6k8yuCKp9rLoCpEU6HEanUgcB849AIDyvemR-4BTkssPmWcHsenabqLFG_w8LoRYS8P7HGylNF-3gWf0FNZi0r3XujvsnxtUSp_Gr99MPAe63jfYiKlVw61lJVGuILtoMOwvN0BeLO7w",
  "battle-ropes-sled":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDH9YoyhZqEsRi4wXOnqVsZzg8cM9ELQovhCQeYJG-mANwDdnK050D0hsCRHVrjGOFcPgtYvXPqpBeXN2kvs_9jbcGn4nQJJ1GoWVV_bxpN_yJSG2VopHJZCgZW9HkX-cOjlWW69U9F636d7bWUoSNLjPXVpHa1D3QfvCp4ZTr2zuzA_GLoB7uaJbycaiuzfL5LlF93CQwLs_ImLbiBxHP6aWnNCRpwoW5I9J0iak0",
  "calisthenics-rig":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBq4YahOxqXp3iJsP7x_HnVyQw3y3gnD1c2kRZlyb50p7CZh216RZN-NbG-jlTIOnpgA7Md_lNwLbh3eIUIjLdECPehDiTe8BJZygADAxPnOKTwc5dxnLzbC7lhTlrcse0B3bCLsavTF-hIp9CIUoJ1w2_oetaoFJSeibwfqGNXl2I3Rhokpse_Eltvh0hHkweYgU_OABlXuJXMkI65OFYb9EkcURFGTKVxsKELE1w",
  "tactical-cardio":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHS3IG33_ARO2Q-XbrLMWLyRCnXTAmV3rL77LmLssuxyx_cF3PgJrG4gtpxhRfmMkqtniykf4_sTz9GIcZKK9a8hYw7PYZi07ZLLh2F0jy3ZibBnMa7Ro753FlqB398mCDIrvaQtO1FeiZSIKN8KeBTtqo9z5i4nEMDpcEy0eMtfN-h1y29MdMK1jIN0T7eckDqNVilHNsvSARDFXTxJsOQbeAvdP2R2di6JHBQEs",
};

const filterTabs: { id: GearCategory; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "freeweights", label: "FREE WEIGHTS" },
  { id: "machines", label: "MACHINES" },
  { id: "cardio", label: "CARDIO" },
  { id: "functional", label: "FUNCTIONAL" },
];

export function FacilitiesClient() {
  const [selectedBranch, setSelectedBranch] = React.useState<"nerul" | "airoli">("nerul");
  const [selectedCategory, setSelectedCategory] = React.useState<GearCategory>("all");

  const filteredGear = React.useMemo(() => {
    if (selectedCategory === "all") return gearInventory;
    return gearInventory.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-20 sm:px-6">
      {/* 1. CINEMATIC HERO HEADER */}
      <section className="bg-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 p-6 shadow-2xl sm:p-8">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity contrast-125 filter"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGXHGbG1jrUHoabYDWItm5tgyG3N_ArpJwfc_cuqnjPe7J_V0FsXLPR8fdc2_151vMaucImUjJOEfAaEoOcqGyjOZHZQtsbNtjwmXbz69TeaIBJ2YjXt1JtoJ7-uhPdS_6JskdtEFYPAbEnXRLtRzSkYeRfCKAJSE1zjbWH6tW7Fz8lIICBkX6wyulMPET_G8h-fZmLqDILE6wA2nTmTUX8C8UlnpvS01MHpzpxls')`,
          }}
        />
        <div className="from-card via-card/80 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="bg-bg-2/90 text-accent inline-flex items-center gap-2 self-start rounded-full border border-white/5 px-3 py-1 text-xs">
            <Sparkles className="text-accent h-3.5 w-3.5" />
            <span className="font-display font-semibold tracking-widest uppercase">
              WORLD-CLASS GEAR • PRECISION ENGINEERING
            </span>
          </div>

          <h1 className="font-display text-4xl leading-none font-bold tracking-tight text-white uppercase sm:text-6xl">
            TRAIN WITH <span className="text-accent">PURPOSE.</span>
          </h1>

          <p className="text-text-muted max-w-lg text-sm leading-relaxed sm:text-base">
            Calibrated weight stacks, competition steel, and biomechanically engineered zones
            designed for uncompromising athletic progression.
          </p>
        </div>

        <AnswerBlock
          question="What equipment and facilities does OCTACORE Fitness provide?"
          answer="OCTACORE Fitness provides professional athletic strength and conditioning facilities across Nerul and Airoli, including heavy urethane dumbbells up to 50kg, Olympic lifting platforms, converging selectorized pin machines, dual-cable cross towers, curved assault runners, indoor sprint turf with heavy sleds, air-conditioned zones, and executive showers."
        />
      </section>

      {/* 2. INTERACTIVE BRANCH SELECTOR PILL & MANDATORY NOTICE */}
      <section className="flex flex-col gap-2.5">
        <div className="bg-card flex items-center justify-between rounded-xl border border-white/10 p-1.5 shadow-lg">
          <button
            type="button"
            onClick={() => setSelectedBranch("nerul")}
            className={`font-display flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-center text-xs font-semibold tracking-wider uppercase transition-all ${
              selectedBranch === "nerul"
                ? "bg-accent text-bg shadow-md"
                : "text-text-muted hover:bg-white/5 hover:text-white"
            }`}
          >
            <Dumbbell className="h-4 w-4" />
            <span>NERUL BRANCH</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedBranch("airoli")}
            className={`font-display flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-center text-xs font-semibold tracking-wider uppercase transition-all ${
              selectedBranch === "airoli"
                ? "bg-accent text-bg shadow-md"
                : "text-text-muted hover:bg-white/5 hover:text-white"
            }`}
          >
            <Building className="h-4 w-4" />
            <span>AIROLI BRANCH</span>
          </button>
        </div>

        {/* Mandatory Stitch Notice */}
        <div className="text-text-muted flex items-center gap-2 px-2 py-1 text-xs">
          <Info className="text-accent h-4 w-4 shrink-0" />
          <p className="font-normal italic">
            Note: Specific equipment setups and floor plans may vary by branch.
          </p>
        </div>
      </section>

      {/* 3. EQUIPMENT SECTION WITH CATEGORY FILTER CHIPS */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display text-accent text-xs font-semibold tracking-widest uppercase">
              PERFORMANCE ARSENAL
            </span>
            <h2 className="font-display text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
              FACILITY HARDWARE
            </h2>
          </div>

          <div className="bg-card flex h-8 items-center gap-2 rounded-full border border-white/10 px-3 text-xs">
            <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
            <span className="font-display text-text font-semibold uppercase">
              {filteredGear.length} GEAR UNITS
            </span>
          </div>
        </div>

        {/* Filter Chips Horizontal Bar */}
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`font-display rounded-xl px-4 py-2 text-xs font-semibold tracking-wider whitespace-nowrap uppercase transition-all ${
                selectedCategory === tab.id
                  ? "bg-accent text-bg shadow-md"
                  : "bg-card hover:bg-card-hover text-text-muted border border-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
          {filteredGear.map((item) => (
            <div
              key={item.id}
              className="bg-card group hover:border-accent/40 relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 p-5 shadow-lg transition-all"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity contrast-125 filter transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${gearImages[item.id] || gearImages.dumbbells}')`,
                }}
              />
              <div className="from-card via-card/75 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-bg-2 font-display text-accent rounded-lg border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                  {item.badge}
                </span>
                <span className="font-display text-text-muted bg-bg/80 rounded-md border border-white/5 px-2 py-0.5 text-[11px] uppercase">
                  {item.spec}
                </span>
              </div>

              <div className="relative z-10 mt-6 flex flex-col">
                <h3 className="font-display text-xl font-bold tracking-wide text-white uppercase sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-text-muted mt-1 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FACILITY AMENITIES CHECKLIST */}
      <section className="bg-card flex flex-col gap-6 rounded-2xl border border-white/5 p-6 shadow-xl sm:p-8">
        <div className="flex flex-col gap-1">
          <span className="font-display text-accent text-xs font-semibold tracking-wider uppercase">
            Standard Across Hubs
          </span>
          <h2 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
            Member Comfort &amp; Hygiene Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Wind className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-semibold text-white uppercase">
                Full Climate Control (AC)
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                High-CFM regulation maintaining 20°C ambient floor temperature for sustained peak
                performance.
              </p>
            </div>
          </div>

          <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Lock className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-semibold text-white uppercase">
                Secure Personal Lockers
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                Heavy-duty personal lockers designed to store athletic bags, footwear, and
                valuables.
              </p>
            </div>
          </div>

          <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Bath className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-semibold text-white uppercase">
                Private Showers &amp; Changing Rooms
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                Immaculately maintained separate male and female washrooms with continuous
                sanitation cycles.
              </p>
            </div>
          </div>

          <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Car className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-semibold text-white uppercase">
                Dedicated Parking Access
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                Convenient two-wheeler bays and curbside parking in Nerul, plus Tech Park parking in
                Airoli.
              </p>
            </div>
          </div>

          <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Video className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-semibold text-white uppercase">
                24/7 CCTV Facility Surveillance
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                Continuous monitored coverage ensuring high personal security and member peace of
                mind.
              </p>
            </div>
          </div>

          <div className="bg-bg-2/70 flex items-start gap-3 rounded-xl border border-white/5 p-4">
            <Shield className="text-accent mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-semibold text-white uppercase">
                Certified Coaching Supervision
              </h4>
              <p className="text-text-muted mt-0.5 text-xs">
                Qualified floor trainers on deck during all operational hours to correct
                biomechanical form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENQUIRY FORM */}
      <section id="facility-enquiry" className="pt-4">
        <EnquiryForm defaultBranch={selectedBranch} showDirectWhatsApp={true} />
      </section>
    </div>
  );
}
