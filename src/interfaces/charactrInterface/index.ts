import { characterBackgroundType } from "./types/characterBackgroundType";
import {
  statBonusType,
  alignmentType,
  lvType,
  skilType,
} from "./types/otherTypes";

import {
  characterClassType,
  characterRaceType,
} from "./types/characterClassAndRaceType";

export interface characterInterface {
  owner: "gm" | string; //playerID
  characterId?: string;
  name: string;
  class: characterClassType;
  race: characterRaceType;
  background: characterBackgroundType;
  alignment: alignmentType;
  experiencePoints: number;
  lv: lvType;
  profinciency: number;
  hitPoints: number;
  speed: number;
  stats: {
    strength: statBonusType;
    dexteruty: statBonusType;
    constitusion: statBonusType;
    itellegence: statBonusType;
    wisdom: statBonusType;
    charisma: statBonusType;
  };
  skils: {
    acrobatics: skilType;
    animalHandling: skilType;
    arcana: skilType;
    athletics: skilType;
    deception: skilType;
    history: skilType;
    insight: skilType;
    intimidation: skilType;
    investigation: skilType;
    medicine: skilType;
    nature: skilType;
    perception: skilType;
    performance: skilType;
    persuasion: skilType;
    religion: skilType;
    sleightOfHand: skilType;
    Stealth: skilType;
    survival: skilType;
  };
  savingThrowModifiers: {
    strength: boolean;
    dexteruty: boolean;
    constitusion: boolean;
    itellegence: boolean;
    wisdom: boolean;
    charisma: boolean;
  };
  loot?: {
    money?: number;
    weapon?: [string];
  };
}
