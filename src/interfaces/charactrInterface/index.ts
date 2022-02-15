import { characterBackgroundType } from "./types/characterBackgroundType";
import { alignmentType, skilType } from "./types/otherTypes";

import {
  characterClassType,
  characterRaceType,
} from "./types/characterClassAndRaceType";

export interface characterInterface {
  ownerId: "gm" | string; //playerID
  ownerName: string;
  characterId: string;
  name: string;
  class: characterClassType;
  race: characterRaceType;
  background: characterBackgroundType;
  alignment: alignmentType;
  experiencePoints: number;
  lv: number;
  profinciency: number;
  hitPoints: number;
  speed: number;
  stats: {
    strength: number;
    dexteruty: number;
    constitusion: number;
    itellegence: number;
    wisdom: number;
    charisma: number;
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
