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
  // London Underground lines
  bakerloo: {
    displayName: "Bakerloo Line",
    colour: "#a45a2a",
    toc: "tfl",
  },
  central: {
    displayName: "Central Line",
    colour: "#da291c",
    toc: "tfl",
  },
  circle: {
    displayName: "Circle Line",
    colour: "#ffcd00",
    toc: "tfl",
  },
  district: {
    displayName: "District Line",
    colour: "#007a33",
    toc: "tfl",
  },
  hammersmithAndCity: {
    displayName: "Hammersmith & City Line",
    colour: "#e89cae",
    toc: "tfl",
  },
  jubilee: {
    displayName: "Jubilee Line",
    colour: "#7c878e",
    toc: "tfl",
  },
  metropolitan: {
    displayName: "Metropolitan Line",
    colour: "#840b55",
    toc: "tfl",
  },
  northern: {
    displayName: "Northern Line",
    colour: "#000000",
    toc: "tfl",
  },
  piccadilly: {
    displayName: "Piccadilly Line",
    colour: "#10069f",
    toc: "tfl",
  },
  victoria: {
    displayName: "Victoria Line",
    colour: "#00a3e0",
    toc: "tfl",
  },
  waterlooAndCity: {
    displayName: "Waterloo & City Line",
    colour: "#6eceb2",
    toc: "tfl",
  },

  // Other TfL services

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
    displayName: "London Trams",
    colour: "#5fb526",
    toc: "tfl",
  },
  cableCar: {
    displayName: "IFS Cloud Cable Car",
    colour: "#734fa0",
    toc: "tfl",
  },

  // London Overground lines

  liberty: {
    displayName: "Liberty Line",
    colour: "#5d6061",
    toc: "londonOverground",
  },
  lioness: {
    displayName: "Lioness Line",
    colour: "#faa61a",
    toc: "londonOverground",
  },
  mildmay: {
    displayName: "Mildmay Line",
    colour: "#0077ad",
    toc: "londonOverground",
  },
  suffragette: {
    displayName: "Suffragette Line",
    colour: "#5bb972",
    toc: "londonOverground",
  },
  weaver: {
    displayName: "Weaver Line",
    colour: "#823a62",
    toc: "londonOverground",
  },
  windrush: {
    displayName: "Windrush Line",
    colour: "#ed1b00",
    toc: "londonOverground",
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
    displayName: "Chiltern Railways",
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
    displayName: "Gatwick Express",
    colour: "#eb1e2d",
    toc: "goviaThameslinkRailway",
  },
  grandCentral: {
    displayName: TOCs.grandCentral.displayName,
    colour: TOCs.grandCentral.colour,
    toc: "grandCentral",
  },
  greatNorthern: {
    displayName: "Great Northern",
    colour: "#00ABE6",
    toc: "goviaThameslinkRailway",
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
  islandLineTrains: {
    displayName: "Island Line",
    colour: "#1e90ff",
    toc: "southWesternRailway",
  },  
  londonNorthEasternRailway: {
    displayName: TOCs.londonNorthEasternRailway.displayName,
    colour: TOCs.londonNorthEasternRailway.colour,
    toc: "londonNorthEasternRailway",
  },
  londonNorthwesternRailway: {
    displayName: "London Northwestern Railway",
    colour: "#00bf6f",
    toc: "westMidlandsTrains",
  },
  lumo: {
    displayName: TOCs.lumo.displayName,
    colour: TOCs.lumo.colour,
    toc: "lumo",
  },
  northernTrains: {
    displayName: TOCs.northernTrains.displayName,
    colour: TOCs.northernTrains.colour,
    toc: "northernTrains",
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
    displayName: "Southeastern High Speed",
    colour: "#1e1e50",
    toc: "southeastern",
  },
  southern: {
    displayName: "Southern",
    colour: "#8cc63e",
    toc: "goviaThameslinkRailway",
  },
  stanstedExpress: {
    displayName: "Stansted Express",
    colour: "#6b717a",
    toc: "greaterAnglia"
  },
  thameslink: {
    displayName: "Thameslink",
    colour: "#ff5aa4",
    toc: "goviaThameslinkRailway",
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
    displayName: "westMidlandsRailway",
    colour: "#ff8300",
    toc: "westMidlandsTrains",
  },
} as const satisfies Record<string, Line>;

export type LineId = keyof typeof Lines;
export const lineIds = Object.keys(Lines) as LineId[];
