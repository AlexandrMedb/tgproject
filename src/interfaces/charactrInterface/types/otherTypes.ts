export type statNameType =
  | "strength"
  | "dexteruty"
  | "constitusion"
  | "itellegence"
  | "wisdom"
  | "charisma";
// export type statBonusType = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;
export type skilType = {
  isSet: boolean;
  depence: statNameType;
};

export type alignmentType =
  | "Lawful good"
  | "Neutral good"
  | "Chaotic good"
  | "Lawful neutral"
  | "True neutral"
  | "Chaotic neutral"
  | "Lawful evil"
  | "Neutral evil"
  | "Chaotic evil";

// export type lvType =
//   | 0
//   | 1
//   | 2
//   | 3
//   | 4
//   | 5
//   | 6
//   | 7
//   | 8
//   | 9
//   | 10
//   | 11
//   | 12
//   | 13
//   | 14
//   | 15
//   | 16
//   | 17
//   | 18
//   | 19
//   | 20;
