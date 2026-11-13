import * as React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Navigation, MapPin, Clock } from "lucide-react";
import { branches } from "@/content/branches";
import { Reveal } from "@/components/motion/Reveal";

export function BranchCardsSection() {
  const branchList = Object.values(branches);

  const branchPhotos: Record<string, { facility: string; mapBg: string }> = {
    nerul: {
      facility:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVAJO41AkNRbqmefv3aesLAn0Tr1jA7b2oxbyKJ_d6e4MHqwMF2Jl5J8tosyRS2-TNbANrqNaUv4u2HTQ05VaPfhZa59jl3hAgFp7mynWD-HD6JkVBTdZQSqcppJdLhXZpUkDCuu1Y1lmF7JVNwUur071t7QcHQwKWdOfpe8C5CATzuvQ1Wu3q0GrsIdoETcSQ5LjCsw8oX1j0CzM63NRJz8G-lQOcexGreXJWF9w",
      mapBg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCw_kMcLZOIAijIrApRdsl6AKFaJg_H64yjSveT-7ulo29B0F2vmlq_KEwz2LNt6XASp0hQZBFA1Px4P3V4yf9PXPgWyz3mMXhc8gIqeDoxtxZ-Z7IN_JpU0zqkKsmg0PP8BUQmUAzwyech1_x_wVlXFtdfaNlbBWmjlnAe0M_owMh-cW5iFllSB_XPkFnQvtkceijLVY8H3eGejohGm3d8a9dns-O7yHf0VevbPDU",
    },
    airoli: {
      facility:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCiWppif0MHJIPjIREUxJegQ8JqDZNahhbj9Dgk9CYetUO-PK6pBuw1OdprzCeJVjCK1rB8gs2u4pE-2ZfbV7TlQnYAbhoXPuRXAnOqgdy2mraL8URx03zRK-lLArEbCeLarWsp6VLrfDeSLP4dYAyjSa_pH_LhvLqOppJaOOOXubLCmWTn1MqR8ldNjEtxGy5MuNGOaz4CVyfgEEFIs6_9kioFyFgX9gXMomxDRec",
      mapBg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDr9zTsHRb3ROtcL6Wucj8UXbx3TzZ9Sr_CeGHhKb8q2bJbU-yJv7M4E5w9RRKL5-IzgAuRGZ_79P0LQk44K6vSs0UJ7UDVc44gINYF9NOLN98Jw2Wzwou1iQZzreuR8NKasb0rDRl8-J6HQ9lhPsE6Rl6xBoQn5GWBq4A9oNr-igmwubvWfBeZCJB-lKOkT8Gd15pHPgGfBNqe5s60KJRgIdZVKOdQkdkuRYAeVxw",
    },
  };

  return (
    <section
      id="branches"
      className="bg-bg flex flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="bg-accent-2 h-2 w-2 rounded-full" />
              <span className="font-display text-accent-2 text-xs font-semibold tracking-[0.25em] uppercase">
                Navi Mumbai Centers
              </span>
            </div>
            <h2
              id="locations-heading"
              className="font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
            >
              TWO LOCATIONS. ONE FITNESS SPIRIT.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {branchList.map((branch, index) => {
            const photos = branchPhotos[branch.slug] || {
              facility: "",
              mapBg: "",
            };
            const encodedPrefill = encodeURIComponent(branch.whatsappPrefillText);

            return (
              <Reveal key={branch.id} delay={index * 0.15}>
                <div className="bg-card flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/5 p-4 shadow-xl transition-all duration-300 hover:border-white/10 sm:p-6">
                  {/* Media Header: Facility photo + Map preview */}
                  <div className="grid h-36 grid-cols-2 gap-2 overflow-hidden rounded-xl">
                    <div className="bg-bg-2 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photos.facility}
                        alt={`${branch.name} Facility interior`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="font-display absolute top-2 left-2 rounded bg-black/75 px-2 py-0.5 text-[10px] font-medium text-white uppercase">
                        Facility
                      </span>
                    </div>

                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bg-2 group relative bg-cover bg-center"
                      style={{ backgroundImage: `url(${photos.mapBg})` }}
                      aria-label={`Map: Directions to ${branch.name} on Google Maps`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/20">
                        <MapPin className="text-accent h-7 w-7 drop-shadow-md transition-transform group-hover:scale-110" />
                      </div>
                      <span className="font-display absolute right-2 bottom-2 rounded bg-black/75 px-2 py-0.5 text-[10px] font-medium text-white uppercase">
                        Map
                      </span>
                    </a>
                  </div>

                  {/* Info Details */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/locations/${branch.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        <h3 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
                          {branch.name.replace("OCTACORE Fitness, ", "")} Branch
                        </h3>
                      </Link>
                      <span className="bg-accent/20 text-accent rounded-full px-2.5 py-0.5 text-xs font-semibold">
                        Active
                      </span>
                    </div>

                    <p className="text-text-muted mt-0.5 flex items-start gap-1.5 text-xs leading-relaxed sm:text-sm">
                      <MapPin className="text-accent mt-0.5 h-4 w-4 shrink-0" />
                      <span>{branch.fullAddress}</span>
                    </p>

                    {/* Timings Badge */}
                    <div className="bg-bg-2 text-text-muted mt-1 flex items-center gap-2 rounded-xl p-2.5 text-xs">
                      <Clock className="text-accent-2 h-4 w-4 shrink-0" />
                      <span>Mon–Sat: 6:00 AM – 11:00 PM | Sun: 7:00 AM – 1:00 PM</span>
                    </div>
                  </div>

                  {/* 3-Wide Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="bg-bg-2 hover:bg-card-hover flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-white/5 text-xs font-semibold text-white transition-all active:scale-95"
                    >
                      <Phone className="text-accent h-4 w-4" />
                      <span>Call</span>
                    </a>

                    <a
                      href={`https://wa.me/${branch.whatsappNumber}?text=${encodedPrefill}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bg-2 hover:bg-card-hover flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-white/5 text-xs font-semibold text-white transition-all active:scale-95"
                    >
                      <MessageCircle className="text-accent-2 h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-bg hover:bg-accent-2 flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg text-xs font-bold shadow-sm transition-all active:scale-95"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Route</span>
                    </a>
                  </div>

                  {/* Branch landing page link */}
                  <div className="pt-1 text-center">
                    <Link
                      href={`/locations/${branch.slug}`}
                      className="text-text-muted hover:text-accent font-display inline-flex items-center gap-1 text-xs tracking-wider uppercase transition-colors"
                    >
                      <span>Branch Details &amp; Equipment Roster &rarr;</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BranchCardsSection;
