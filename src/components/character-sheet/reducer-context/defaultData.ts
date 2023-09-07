export const defaultData = {
  characterName: "",
  notes: ["This is my note", "This is my another note"],
  specie: "",
  profession: "",
  diet: "",
  characterLevel: "",
  description: "",
  appearance: "",
  characteristic: "",
  milestones: [
    {
      exampleMilestone: false,
    },
    {
      exampleMilestone: false,
    },
    {
      exampleMilestone: false,
    },
    {
      exampleMilestone: false,
    },
    {
      exampleMilestone: false,
    },
  ],
  characterKnownLanguages: "",
  defense: {
    min: 0,
    max: 0,
    value: 0,
    maxBonus: 0,
    bonus: 0,
  },
  stance: {
    min: 0,
    max: 0,
    value: 0,
    tempStance: 0,
  },
  energy: {
    min: 0,
    max: 0,
    value: 0,
    tempEnergy: 0,
  },
  speed: {
    climbingSpeed: {
      value: 0,
    },
    walkingSpeed: {
      value: 0,
    },
    swimmingSpeed: {
      value: 0,
    },
    flyingSpeed: {
      value: 0,
    },
    diggingSpeed: {
      value: 0,
    },
  },
  attributes: {
    personality: {
      value: 0,
    },
    combat: {
      value: 0,
    },
    intellect: {
      value: 0,
    },
    fortitude: {
      value: 0,
    },
    agility: {
      value: 0,
    },
    senses: {
      value: 0,
    },
    mind: {
      value: 0,
    },
  },
  damageStacks: {
    bleeding: {
      value: 0,
      max: 0,
    },
    toxic: {
      value: 0,
      max: 0,
    },
    psychic: {
      value: 0,
      max: 0,
    },
  },
  senses: {
    hearing: {
      value: 0,
      max: 0,
    },
    seeing: {
      value: 0,
      max: 0,
    },
    nightVision: {
      value: 0,
      max: 0,
    },
    pulse: {
      value: 0,
      max: 0,
    },
    energy: {
      value: 0,
      max: 0,
    },
  },
  characteristics: [
    {
      characteristicName: "",
      characteristicBonus: "",
    },
  ],
  actions: [
    {
      name: "",
      formula: "",
      damageType: "",
      energyCost: "",
    },
  ],
  characteristicsText: "",
  languages: ["es", "en"],
  details: {
    height: "",
    weight: "",
    backstory: "",
  },
  talents: [
    {
      name: "",
      effect: "",
    },
  ],
  equipment: {
    hat: "",
    weapons: [],
    armor: {
      name: "",
      effect: "",
    },
    mask: {
      name: "",
      effect: "",
    },
    cape: {
      name: "",
      effect: "",
    },
    necklace: {
      name: "",
      effect: "",
    },
    bracelet: {
      name: "",
      effect: "",
    },
    ring: [
      {
        name: "",
        effect: "",
      },
    ],
    boots: {
      name: "",
      effect: "",
    },
    special: {
      name: "",
      effect: "",
    },
    bags: [
      {
        bagName: "",
        isEquipped: false,
      },
    ],
  },
  inventory: {
    coins: 0,
    items: [
      {
        name: "",
        weight: 0,
        quantity: 0,
        isEquipped: false,
        showDescription: false,
        description: "",
      },
    ],
    carriedWeight: 0,
  },
  spellbook: {
    magicSchools: [""],
    minorMagic: [
      {
        name: "",
        cost: 0,
        time: 2,
        range: "",
        target: "",
        duration: "",
        channeling: 0,
        ad: "1dcm",
        damage: "",
        description: "",
        hasAttack: {
          name: "",
          damage: "1dcm",
          damageType: "P",
          energy: 3,
        },
      },
    ],
    initiateMagic: [
      {
        name: "",
        cost: 0,
        time: 2,
        range: "",
        target: "",
        duration: "",
        channeling: 0,
        ad: "1dcm",
        damage: "",
        description: "",
        hasAttack: {
          name: "",
          damage: "1dcm",
          damageType: "P",
          energy: 3,
        },
      },
    ],
    professionalMagic: [
      {
        name: "",
        cost: 0,
        time: 2,
        range: "",
        target: "",
        duration: "",
        channeling: 0,
        ad: "1dcm",
        damage: "",
        description: "",
        hasAttack: {
          name: "",
          damage: "1dcm",
          damageType: "P",
          energy: 3,
        },
      },
    ],
    masterMagic: [
      {
        name: "",
        cost: 0,
        time: 2,
        range: "",
        target: "",
        duration: "",
        channeling: 0,
        ad: "1dcm",
        damage: "",
        description: "",
        hasAttack: {
          name: "",
          damage: "1dcm",
          damageType: "P",
          energy: 3,
        },
      },
    ],
  },
  powers: {
    manna: {
      value: 0,
    },
    faith: {
      value: 0,
    },
    ki: {
      value: 0,
    },
    chaos: {
      value: 0,
    },
  },
};
