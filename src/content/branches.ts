export interface OperatingHours {
  days: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface Branch {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortLocation: string;
  fullAddress: string;
  addressParts: {
    street: string;
    landmark?: string;
    sector?: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappPrefillText: string;
  googleMapsUrl: string;
  googleBusinessUrl?: string;
  geo: {
    latitude: number;
    longitude: number;
    isConfirmed: boolean;
  };
  operatingHours: {
    schedule: OperatingHours[];
    isConfirmed: boolean;
    notice: string;
  };
  features: string[];
  amenities: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const branches: Record<string, Branch> = {
  nerul: {
    id: "nerul",
    slug: "nerul",
    name: "OCTACORE Fitness, Nerul",
    tagline: "Flagship Athletic Facility",
    shortLocation: "Sector 1, Shiravane, Nerul",
    fullAddress:
      "Plot No. 781, Near Jain Mandir, Sector 1, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706, India",
    addressParts: {
      street: "Plot No. 781",
      landmark: "Near Jain Mandir",
      sector: "Sector 1",
      area: "Shiravane, Nerul",
      city: "Navi Mumbai",
      state: "Maharashtra",
      postalCode: "400706",
      country: "IN",
    },
    phone: "+919069819090",
    displayPhone: "+91 90698 19090",
    whatsappNumber: "919069819090",
    whatsappPrefillText:
      "Hi OCTACORE Nerul, I would like to inquire about membership options and facility tours.",
    googleMapsUrl:
      "https://www.google.com/maps/place/OCTACORE+Fitness,+Nerul/@19.0456267,73.019493,17z/",
    googleBusinessUrl: "https://www.google.com/search?kgmid=%2Fg%2F11fn236tr7",
    geo: {
      latitude: 19.0456267,
      longitude: 73.019493,
      isConfirmed: true,
    },
    operatingHours: {
      isConfirmed: false,
      notice:
        "Hours published from public business listings; subject to reconfirmation by management.",
      schedule: [
        { days: "Monday – Saturday", open: "6:00 AM", close: "11:00 PM" },
        { days: "Sunday", open: "7:00 AM", close: "11:00 AM" },
      ],
    },
    features: [
      "5,000 Sq.Ft Training Deck",
      "Urethane Dumbbells Up to 50kg",
      "Olympic Power Cages & Platforms",
      "Kinetic Sled & Sprint Turf Track",
      "Biomechanical Isolation Stations",
    ],
    amenities: [
      {
        title: "Full Air Conditioning",
        description: "High-CFM continuous climate regulation at 20°C",
        icon: "ac_unit",
      },
      {
        title: "Changing Rooms",
        description: "Private, spacious, continuously sanitized suites",
        icon: "checkroom",
      },
      {
        title: "Secure Lockers",
        description: "Heavy personal storage lockers for all athletic gear",
        icon: "lock",
      },
      {
        title: "Dedicated Parking",
        description: "Curbside vehicle spaces and dedicated 2-wheeler bays",
        icon: "local_parking",
      },
      {
        title: "24/7 CCTV Surveillance",
        description: "Full-facility safety monitoring for peace of mind",
        icon: "videocam",
      },
      {
        title: "Separate Washrooms",
        description: "Immaculately maintained separate male and female washrooms",
        icon: "wc",
      },
    ],
  },
  airoli: {
    id: "airoli",
    slug: "airoli",
    name: "OCTACORE Fitness, Airoli",
    tagline: "Corporate & High-Performance Campus",
    shortLocation: "Reliable Tech Park, MIDC Airoli",
    fullAddress:
      "Unit D-1, South Block, Empire, Reliable Tech Park, Thane–Belapur Road, Gavate Wadi, MIDC, Airoli, Navi Mumbai, Maharashtra 400708, India",
    addressParts: {
      street: "Unit D-1, South Block, Empire, Reliable Tech Park, Thane–Belapur Road",
      landmark: "Gavate Wadi, MIDC",
      sector: "Reliable Tech Park",
      area: "Airoli",
      city: "Navi Mumbai",
      state: "Maharashtra",
      postalCode: "400708",
      country: "IN",
    },
    phone: "+918928149090",
    displayPhone: "+91 89281 49090",
    whatsappNumber: "918928149090",
    whatsappPrefillText:
      "Hi OCTACORE Airoli, I would like to inquire about corporate membership rates and trial sessions.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=OCTACORE+Fitness+Airoli+Reliable+Tech+Park",
    geo: {
      latitude: 19.1558,
      longitude: 73.0034,
      isConfirmed: false,
    },
    operatingHours: {
      isConfirmed: false,
      notice:
        "Hours published from public business listings; subject to reconfirmation by management.",
      schedule: [
        { days: "Monday – Saturday", open: "6:00 AM", close: "11:00 PM" },
        { days: "Sunday", open: "", close: "", isClosed: true },
      ],
    },
    features: [
      "Desk-to-Decompression Ergonomics",
      "Pin-Selected Biomechanical Fleet",
      "Precision Watt-Calibrated Cardio",
      "Executive Rain Shower Suites",
      "Tech Park Parking Access",
    ],
    amenities: [
      {
        title: "High-CFM Climate System",
        description: "Positive air pressure climate control at 20°C",
        icon: "ac_unit",
      },
      {
        title: "Executive Lockers",
        description: "Spacious RFID suites suitable for business attire",
        icon: "lock",
      },
      {
        title: "High-Pressure Showers",
        description: "Clean hot-water shower rooms for pre-shift transitions",
        icon: "shower",
      },
      {
        title: "Tech Park Parking",
        description: "Dedicated parking access inside Reliable Tech Park South Block",
        icon: "local_parking",
      },
      {
        title: "Biomechanical Machine Row",
        description: "Advanced joint-friendly selectorized strength fleet",
        icon: "fitness_center",
      },
      {
        title: "Tactical Cardio Bay",
        description: "Assault runners, rowers, and air-resistance ellipticals",
        icon: "speed",
      },
    ],
  },
};

export const branchList = Object.values(branches);
