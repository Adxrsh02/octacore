export type GearCategory = "all" | "freeweights" | "machines" | "cardio" | "functional";

export interface GearItem {
  id: string;
  title: string;
  spec: string;
  badge: string;
  category: Exclude<GearCategory, "all">;
  description: string;
  imageAlt: string;
}

export const gearInventory: GearItem[] = [
  {
    id: "dumbbells",
    title: "Urethane Dumbbell Matrix",
    spec: "Up to 50 KG",
    badge: "Free Weights",
    category: "freeweights",
    description:
      "Calibrated solid steel urethane dumbbell sets ranging from 2.5kg up to 50kg, featuring laser-etched knurled steel grips.",
    imageAlt:
      "Heavy matte black urethane commercial dumbbells arranged on an angled rack with warm lighting",
  },
  {
    id: "olympic-barbells",
    title: "Barbells & Olympic Plates",
    spec: "IPF Standard",
    badge: "Barbell Spec",
    category: "freeweights",
    description:
      "Standard 20kg competition-grade bars, hardened chrome sleeves, and IPF-standard calibrated plate arrays.",
    imageAlt:
      "Olympic precision barbell bar resting on heavy duty dark steel power rack with bumper plates",
  },
  {
    id: "chest-press",
    title: "Chest Press Station",
    spec: "Converging Arc",
    badge: "Machines",
    category: "machines",
    description:
      "Converging arc technology designed for optimal pectoral muscle activation and zero joint impingement.",
    imageAlt: "High-end biomechanically isolated converging chest press machine in matte black",
  },
  {
    id: "cable-towers",
    title: "Cable Row & 8-Stack Towers",
    spec: "Aircraft Cables",
    badge: "Machines",
    category: "machines",
    description:
      "Multi-pulley aircraft cables with micro-increment resistance stacks for continuous vector loading.",
    imageAlt: "Multi-station cable crossover tower and seated cable row pulley system",
  },
  {
    id: "assisted-pullup",
    title: "Assisted Pull-Up & Dip Station",
    spec: "Counterbalance",
    badge: "Machines",
    category: "machines",
    description:
      "Dual-assist counterbalance platform engineered for scalable bodyweight progression and volume work.",
    imageAlt: "Commercial assisted chin-up and dip station with counterbalanced mechanism",
  },
  {
    id: "abdominal-hub",
    title: "Abdominal & Core Hub",
    spec: "Rotary & Decliners",
    badge: "Machines",
    category: "machines",
    description:
      "Rotary torso isolation units, steep adjustable decline benches, and lumbar-protective core stations.",
    imageAlt: "Modern rotary torso machine and decline ab benches grouped on dark rubber flooring",
  },
  {
    id: "battle-ropes-sled",
    title: "Battle Ropes & Sled Track",
    spec: "High-Tensile Poly",
    badge: "Functional Turf",
    category: "functional",
    description:
      "High-density push/pull sled sprint tracks paired with 50ft heavy battle ropes for explosive metabolic power.",
    imageAlt:
      "High-density synthetic turf sprint track with heavy push sled and coiled battle ropes",
  },
  {
    id: "calisthenics-rig",
    title: "Dips & Calisthenics Rig",
    spec: "Steel Matrix",
    badge: "Functional",
    category: "functional",
    description:
      "Commercial-grade powder-coated pull-up matrix, parallel dip bars, and suspension trainer mounts.",
    imageAlt: "Heavy modular custom steel calisthenics cage with monkey bars and dip attachments",
  },
  {
    id: "tactical-cardio",
    title: "Elliptical & Tactical Cardio",
    spec: "Telemetry Tracked",
    badge: "Cardio",
    category: "cardio",
    description:
      "Low-impact precision ellipticals, curved sprint treadmills, and fan bikes with real-time biometric readouts.",
    imageAlt:
      "Row of commercial curved treadmills and air resistance ellipticals with glowing status displays",
  },
];
