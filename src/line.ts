import {TOCId, TOCs} from "./toc";

/**
 * A train line
 */
export type Line = {
  displayName: string;
  colour: string;
  toc: TOCId;
};

/**
 * A list of all {@link Line}s
 */
export const Lines = {
  bakerloo: {
    displayName: "Bakerloo",
    colour: "#a45a2a",
    toc: "tfl",
  },
  central: {
    displayName: "Central",
    colour: "#da291c",
    toc: "tfl",
  },
  circle: {
    displayName: "Circle",
    colour: "#ffcd00",
    toc: "tfl",
  },
  district: {
    displayName: "District",
    colour: "#007a33",
    toc: "tfl",
  },
  hammersmithAndCity: {
    displayName: "Hammersmith & City",
    colour: "#e89cae",
    toc: "tfl",
  },
  jubilee: {
    displayName: "Jubilee",
    colour: "#7c878e",
    toc: "tfl",
  },
  metropolitan: {
    displayName: "Metropolitan",
    colour: "#840b55",
    toc: "tfl",
  },
  northern: {
    displayName: "Northern",
    colour: "#000000",
    toc: "tfl",
  },
  piccadilly: {
    displayName: "Piccadilly",
    colour: "#10069f",
    toc: "tfl",
  },
  victoria: {
    displayName: "Victoria",
    colour: "#00a3e0",
    toc: "tfl",
  },
  waterlooAndCity: {
    displayName: "Waterloo & City",
    colour: "#6eceb2",
    toc: "tfl",
  },

  // TfL services

  elizabeth: {
    displayName: "Elizabeth Line",
    colour: "#6950a1",
    toc: "tfl",
  },
  dlr: {
    displayName: "DLR",
    colour: "#00afad",
    toc: "tfl",
  },
  trams: {
    displayName: "Trams",
    colour: "#5fb526",
    toc: "tfl",
  },
  cableCar: {
    displayName: "IFS Cloud Cable Car",
    colour: "#734fa0",
    toc: "tfl",
  },

  // Overground lines

  liberty: {
    displayName: "Liberty Line",
    colour: "#5d6061",
    toc: "tfl",
  },
  lioness: {
    displayName: "Lioness Line",
    colour: "#faa61a",
    toc: "tfl",
  },
  mildmay: {
    displayName: "Mildmay Line",
    colour: "#0077ad",
    toc: "tfl",
  },
  suffragette: {
    displayName: "Suffragette Line",
    colour: "#5bb972",
    toc: "tfl",
  },
  weaver: {
    displayName: "Weaver Line",
    colour: "#823a62",
    toc: "tfl",
  },
  windrush: {
    displayName: "Windrush Line",
    colour: "#ed1b00",
    toc: "tfl",
  },

  // Other TOCs
  avantiWestCoast: {
    displayName: TOCs.avantiWestCoast.displayName,
    colour: TOCs.avantiWestCoast.colour,
    toc: "avantiWestCoast",
  },
  c2c: {
    displayName: TOCs.c2c.displayName,
    colour: TOCs.c2c.colour,
    toc: "c2c",
  },
  caledonianSleeper: {
    displayName: TOCs.caledonianSleeper.displayName,
    colour: TOCs.caledonianSleeper.colour,
    toc: "caledonianSleeper",
  },
  chiltern: {
    displayName: TOCs.chiltern.displayName,
    colour: TOCs.chiltern.colour,
    toc: "chiltern",
  },
  crossCountry: {
    displayName: TOCs.crossCountry.displayName,
    colour: TOCs.crossCountry.colour,
    toc: "crossCountry",
  },
  eastMidlandsRailway: {
    displayName: TOCs.eastMidlandsRailway.displayName,
    colour: TOCs.eastMidlandsRailway.colour,
    toc: "eastMidlandsRailway",
  },
  gatwickExpress: {
    displayName: TOCs.gatwickExpress.displayName,
    colour: TOCs.gatwickExpress.colour,
    toc: "gatwickExpress",
  },
  grandCentral: {
    displayName: TOCs.grandCentral.displayName,
    colour: TOCs.grandCentral.colour,
    toc: "grandCentral",
  },
  greatNorthern: {
    displayName: TOCs.greatNorthern.displayName,
    colour: TOCs.greatNorthern.colour,
    toc: "greatNorthern",
  },
  greatWesternRailway: {
    displayName: TOCs.greatWesternRailway.displayName,
    colour: TOCs.greatWesternRailway.colour,
    toc: "greatWesternRailway",
  },
  greaterAnglia: {
    displayName: TOCs.greaterAnglia.displayName,
    colour: TOCs.greaterAnglia.colour,
    toc: "greaterAnglia",
  },
  heathrowExpress: {
    displayName: TOCs.heathrowExpress.displayName,
    colour: TOCs.heathrowExpress.colour,
    toc: "heathrowExpress",
  },
  hullTrains: {
    displayName: TOCs.hullTrains.displayName,
    colour: TOCs.hullTrains.colour,
    toc: "hullTrains",
  },
  londonNorthEasternRailway: {
    displayName: TOCs.londonNorthEasternRailway.displayName,
    colour: TOCs.londonNorthEasternRailway.colour,
    toc: "londonNorthEasternRailway",
  },
  londonNorthwesternRailway: {
    displayName: TOCs.londonNorthwesternRailway.displayName,
    colour: TOCs.londonNorthwesternRailway.colour,
    toc: "londonNorthwesternRailway",
  },
  lumo: {
    displayName: TOCs.lumo.displayName,
    colour: TOCs.lumo.colour,
    toc: "lumo",
  },
  northernRail: {
    displayName: TOCs.northernRail.displayName,
    colour: TOCs.northernRail.colour,
    toc: "northernRail",
  },
  scotRail: {
    displayName: TOCs.scotRail.displayName,
    colour: TOCs.scotRail.colour,
    toc: "scotRail",
  },
  southWesternRailway: {
    displayName: TOCs.southWesternRailway.displayName,
    colour: TOCs.southWesternRailway.colour,
    toc: "southWesternRailway",
  },
  southeastern: {
    displayName: TOCs.southeastern.displayName,
    colour: TOCs.southeastern.colour,
    toc: "southeastern",
  },
  southeasternHighSpeed: {
    displayName: TOCs.southeasternHighSpeed.displayName,
    colour: TOCs.southeasternHighSpeed.colour,
    toc: "southeasternHighSpeed",
  },
  southern: {
    displayName: TOCs.southern.displayName,
    colour: TOCs.southern.colour,
    toc: "southern",
  },
  stanstedExpress: {
    displayName: TOCs.stanstedExpress.displayName,
    colour: TOCs.stanstedExpress.colour,
    toc: "stanstedExpress",
  },
  thameslink: {
    displayName: TOCs.thameslink.displayName,
    colour: TOCs.thameslink.colour,
    toc: "thameslink",
  },
  transPennineExpress: {
    displayName: TOCs.transPennineExpress.displayName,
    colour: TOCs.transPennineExpress.colour,
    toc: "transPennineExpress",
  },
  transportForWales: {
    displayName: TOCs.transportForWales.displayName,
    colour: TOCs.transportForWales.colour,
    toc: "transportForWales",
  },
  westMidlandsRailway: {
    displayName: TOCs.westMidlandsRailway.displayName,
    colour: TOCs.westMidlandsRailway.colour,
    toc: "westMidlandsRailway",
  },
} as const satisfies Record<string, Line>;

export type LineId = keyof typeof Lines;
export const lineIds = Object.keys(Lines) as LineId[];
