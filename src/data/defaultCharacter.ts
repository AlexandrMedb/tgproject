import {characterInterface} from 'interfaces/charactrInterface';

export const defaltCharacter: characterInterface = {
  ownerId: 'gm',
  ownerName: '',
  characterId: '13ads',
  name: 'vas',
  class: 'Paladin',
  race: 'Elf',
  background: 'Spy',
  alignment: 'True neutral',
  experiencePoints: 0,
  lv: 1,
  hitPoints: 0,
  speed: 30,

  get profinciency() {
    return Math.floor(this.lv / 5) + 2;
  },

  stats: {
    strength: 0,
    dexteruty: 0,
    constitusion: 0,
    itellegence: 0,
    wisdom: 0,
    charisma: 0,
  },
  skils: {
    acrobatics: {
      isSet: false,
      depence: 'dexteruty',
    },
    animalHandling: {
      isSet: false,
      depence: 'wisdom',
    },
    arcana: {
      isSet: false,
      depence: 'itellegence',
    },
    athletics: {
      isSet: false,
      depence: 'strength',
    },
    deception: {
      isSet: false,
      depence: 'charisma',
    },
    history: {
      isSet: false,
      depence: 'itellegence',
    },
    insight: {
      isSet: false,
      depence: 'wisdom',
    },
    intimidation: {
      isSet: false,
      depence: 'charisma',
    },
    investigation: {
      isSet: false,
      depence: 'itellegence',
    },
    medicine: {
      isSet: false,
      depence: 'wisdom',
    },
    nature: {
      isSet: false,
      depence: 'itellegence',
    },
    perception: {
      isSet: false,
      depence: 'wisdom',
    },
    performance: {
      isSet: false,
      depence: 'charisma',
    },
    persuasion: {
      isSet: false,
      depence: 'charisma',
    },
    religion: {
      isSet: false,
      depence: 'itellegence',
    },
    sleightOfHand: {
      isSet: false,
      depence: 'dexteruty',
    },
    Stealth: {
      isSet: false,
      depence: 'dexteruty',
    },
    survival: {
      isSet: false,
      depence: 'wisdom',
    },
  },
  savingThrowModifiers: {
    strength: false,
    dexteruty: false,
    constitusion: false,
    itellegence: false,
    wisdom: false,
    charisma: false,
  },
};
