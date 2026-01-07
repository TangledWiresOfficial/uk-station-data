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

  thameslink: {
    displayName: TOCs.thameslink.displayName,
    colour: TOCs.thameslink.colour,
    toc: "thameslink"
  },
} as const satisfies Record<string, Line>;

export type LineId = keyof typeof Lines;
export const lineIds = Object.keys(Lines) as LineId[];
