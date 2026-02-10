export type Meeting = {
  program: "AA" | "NA" | "Al-Anon" | "Other";
  name: string;
  day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
  time: string; // "6:30 PM"
  location: string;
  address: string;
  city: string;
  state: string;
  lat: number;
  lon: number;
  notes?: string;
  url?: string;
};

export const CROW_WING_MEETINGS: Meeting[] = [
  // Up Front Alano Club (Brainerd)
  {
    program: "AA",
    name: "Up Front Monday Group",
    day: "Monday",
    time: "6:30 PM",
    location: "Up Front Alano Club",
    address: "302 4th Ave NE",
    city: "Brainerd",
    state: "MN",
    lat: 46.3609,
    lon: -94.2007,
    url: "https://aaminnesota.org/",
  },
  {
    program: "AA",
    name: "Up Front Big Book Group",
    day: "Tuesday",
    time: "6:30 PM",
    location: "Up Front Alano Club",
    address: "302 4th Ave NE",
    city: "Brainerd",
    state: "MN",
    lat: 46.3609,
    lon: -94.2007,
    notes: "Big Book",
    url: "https://aaminnesota.org/",
  },

  // Lakes Area Alano (Baxter)
  {
    program: "AA",
    name: "Breakfast Club Group",
    day: "Monday",
    time: "8:30 AM",
    location: "Lakes Area Alano",
    address: "7829 MN-210",
    city: "Baxter",
    state: "MN",
    lat: 46.3437,
    lon: -94.2855,
    url: "https://aaminnesota.org/",
  },
  {
    program: "AA",
    name: "Tune Up Group",
    day: "Monday",
    time: "10:30 AM",
    location: "Lakes Area Alano",
    address: "7829 MN-210",
    city: "Baxter",
    state: "MN",
    lat: 46.3437,
    lon: -94.2855,
    notes: "Online & In-person (confirm on listing)",
    url: "https://aaminnesota.org/",
  },

  // Pine River Alano Club
  {
    program: "AA",
    name: "Safe Harbor AA Group",
    day: "Tuesday",
    time: "8:00 PM",
    location: "Pine River Alano Club",
    address: "307 Barclay Ave",
    city: "Pine River",
    state: "MN",
    lat: 46.7209,
    lon: -94.4058,
    url: "https://aaminnesota.org/",
  },
  {
    program: "AA",
    name: "Safe Harbor AA Group",
    day: "Saturday",
    time: "8:00 PM",
    location: "Pine River Alano Club",
    address: "307 Barclay Ave",
    city: "Pine River",
    state: "MN",
    lat: 46.7209,
    lon: -94.4058,
    url: "https://aaminnesota.org/",
  },

  // Al-Anon example (same venue, different program)
  {
    program: "Al-Anon",
    name: "Serenity AFG",
    day: "Monday",
    time: "6:30 PM",
    location: "Up Front Alano Club",
    address: "302 4th Ave NE",
    city: "Brainerd",
    state: "MN",
    lat: 46.3609,
    lon: -94.2007,
    notes: "Families & friends of alcoholics",
    url: "https://al-anon.org/",
  },
];
