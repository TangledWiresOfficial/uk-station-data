export type TOC = {
  displayName: string;
  colour: string;
};

export const TOCs = {
  avantiWestCoast: {
    displayName: "Avanti West Coast",
    colour: "#004354",
  },
  c2c: {
    displayName: "C2C",
    colour: "#b7007c",
  },
  caledonianSleeper: {
    displayName: "Caledonian Sleeper",
    colour: "#1d2e35",
  },
  chiltern: {
    displayName: "Chiltern Railways",
    colour: "#00bfff",
  },
  crossCountry: {
    displayName: "Cross Country",
    colour: "#660f21",
  },
  eastMidlandsRailway: {
    displayName: "East Midlands Railway",
    colour: "#713563",
  },
  gatwickExpress: {
    displayName: "Gatwick Express",
    colour: "#eb1e2d",
  },
  grandCentral: {
    displayName: "Grand Central",
    colour: "#1d1d1b",
  },
  greatNorthern: {
    displayName: "Great Northern",
    colour: "#00ABE6",
  },
  greatWesternRailway: {
    displayName: "Great Western Railway",
    colour: "#0a493e",
  },
  greaterAnglia: {
    displayName: "Greater Anglia",
    colour: "#d70428",
  },
  heathrowExpress: {
    displayName: "Heathrow Express",
    colour: "#532e63",
  },
  hullTrains: {
    displayName: "Hull Trains",
    colour: "#de005c",
  },
  londonNorthEasternRailway: {
    displayName: "London North Eastern Railway",
    colour: "#ce0e2d",
  },
  londonNorthwesternRailway: {
    displayName: "London Northwestern Railway",
    colour: "#00bf6f",
  },
  lumo: {
    displayName: "Lumo",
    colour: "#2b6ef5",
  },
  northernRail: {
    displayName: "Northern",
    colour: "#0f0d78",
  },
  scotRail: {
    displayName: "ScotRail",
    colour: "#1e467d",
  },
  southWesternRailway: {
    displayName: "South Western Railway",
    colour: "#24398c",
  },
  southeastern: {
    displayName: "Southeastern",
    colour: "#389cff",
  },
  southeasternHighSpeed: {
    displayName: "Southeastern High Speed",
    colour: "#1e1e50",
  },
  southern: {
    displayName: "Southern",
    colour: "#8cc63e",
  },
  stanstedExpress: {
    displayName: "Stansted Express",
    colour: "#6b717a",
  },
  // Not really a TOC, but it's easier to understand this way
  tfl: {
    displayName: "TfL",
    colour: "#0019a8",
  },
  thameslink: {
    displayName: "Thameslink",
    colour: "#ff5aa4",
  },
  transPennineExpress: {
    displayName: "TransPennine Express",
    colour: "#09a4ec",
  },
  transportForWales: {
    displayName: "Transport for Wales",
    colour: "#ff0000",
  },
  westMidlandsRailway: {
    displayName: "West Midlands Railway",
    colour: "#ff8300",
  },
} as const satisfies Record<string, TOC>;

export type TOCId = keyof typeof TOCs;
export const tocIds = Object.keys(TOCs) as TOCId[];
