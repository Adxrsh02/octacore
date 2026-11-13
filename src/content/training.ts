export interface TrainingProgram {
  id: string;
  slug: string;
  title: string;
  protocolNumber: string;
  category: string;
  tagline: string;
  description: string;
  bestFor: string[];
  keyOutcomes: string[];
  imagePlaceholder: {
    alt: string;
    label: string;
  };
}

export interface HistoricalService {
  name: string;
  icon: string;
  availabilityNote: string;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "strength-training",
    slug: "strength-training",
    title: "Strength Training",
    protocolNumber: "Protocol 01",
    category: "Hypertrophy & Power",
    tagline: "Heavy Output & Progressive Loading",
    description:
      "Build functional power and lean muscle with progressive overload science, precision free-weight mechanics, and compound barbell lifting.",
    bestFor: ["Beginners", "Intermediate", "Advanced Lifters"],
    keyOutcomes: [
      "Muscular Hypertrophy",
      "Structural Joint Stability",
      "Kinetic Power Generation",
      "Metabolic Rate Elevation",
    ],
    imagePlaceholder: {
      alt: "Focused athlete performing heavy deadlift in high-contrast dark gym illuminated by atmospheric amber rim lighting",
      label: "Strength Arena Floor",
    },
  },
  {
    id: "cardio-training",
    slug: "cardio-training",
    title: "Cardio Training",
    protocolNumber: "Protocol 02",
    category: "Metabolic & Conditioning",
    tagline: "Vessel & Lung Capacity",
    description:
      "Elevate aerobic capacity, endurance, and cardiovascular stamina using tactical interval training, curved runners, and ergometers.",
    bestFor: ["Fat Loss", "Stamina Development", "All Fitness Levels"],
    keyOutcomes: [
      "VO2 Max Expansion",
      "Accelerated Caloric Expenditure",
      "Cardiorespiratory Endurance",
      "Rapid Lactate Clearance",
    ],
    imagePlaceholder: {
      alt: "Athlete sprinting on curved manual treadmill in dim athletic performance facility with amber backlights",
      label: "Tactical Cardio Suite",
    },
  },
  {
    id: "personal-training",
    slug: "personal-training",
    title: "Personal Training",
    protocolNumber: "Protocol 03",
    category: "1-on-1 Elite Mentorship",
    tagline: "Biomechanical Customization",
    description:
      "One-on-one bespoke coaching customized to your unique biomechanics, movement screens, body composition targets, and schedule.",
    bestFor: ["Targeted Transformations", "Rehabilitation", "Executive Schedules"],
    keyOutcomes: [
      "Individualized Program Design",
      "Real-time Biomechanical Form Corrections",
      "Progressive Milestone Accountability",
      "Nutritional Habit Guidance",
    ],
    imagePlaceholder: {
      alt: "Dedicated fitness coach instructing an athlete with barbell posture under directional amber downlights",
      label: "Private Coaching Bay",
    },
  },
  {
    id: "yoga-group-training",
    slug: "yoga-group-training",
    title: "Yoga & Group Training",
    protocolNumber: "Protocol 04",
    category: "Mobility & Cohort Dynamic",
    tagline: "Movement & Core Resilience",
    description:
      "Explore athletic mobility, active flexibility, and high-energy community conditioning in guided training experiences.",
    bestFor: ["Flexibility", "Stress Recovery", "Functional Core Stability"],
    keyOutcomes: [
      "Fascial & Joint Mobility",
      "Postural Alignment Correction",
      "Mental Focus & Breathwork",
      "Community Accountability",
    ],
    imagePlaceholder: {
      alt: "Athletes engaged in dynamic athletic yoga flow with dark studio reflections and amber perimeter lighting",
      label: "Mobility & Group Studio",
    },
  },
];

export const historicalServices: HistoricalService[] = [
  {
    name: "Functional Training",
    icon: "sprint",
    availabilityNote: "Availability to be confirmed • Enquire at front desk",
  },
  {
    name: "Kettlebell Training",
    icon: "fitness_center",
    availabilityNote: "Availability to be confirmed • Enquire at front desk",
  },
  {
    name: "Boxing",
    icon: "sports_mma",
    availabilityNote: "Availability to be confirmed • Enquire at front desk",
  },
  {
    name: "Kickboxing",
    icon: "sports_kabaddi",
    availabilityNote: "Availability to be confirmed • Enquire at front desk",
  },
  {
    name: "MMA",
    icon: "sports_martial_arts",
    availabilityNote: "Availability to be confirmed • Enquire at front desk",
  },
  {
    name: "Karate",
    icon: "sports_gymnastics",
    availabilityNote: "Availability to be confirmed • Enquire at front desk",
  },
];

export const onboardingSteps = [
  {
    step: "01",
    title: "Visit The Club",
    description: "Drop by our Nerul or Airoli facility to inspect the training floor and hardware.",
  },
  {
    step: "02",
    title: "Consult With Coaches",
    description: "Discuss your physical conditioning history, injury profile, and athletic goals.",
  },
  {
    step: "03",
    title: "Begin Your Protocol",
    description: "Lock in your membership tier and launch your structured training journey.",
  },
];
