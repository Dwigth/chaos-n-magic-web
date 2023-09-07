export function characterReducer(state: any, action: any) {
  switch (action.type) {
    case "save_new_character": {
      return {
        ...state,
      };
    }
    case "load_character": {
      return {
        ...action.payload,
      };
    }
    case "update_name": {
      const newState = state;
      newState.characterName = action.payload;

      return { ...newState };
    }
    case "update_specie": {
      const newState = state;
      newState.specie = action.payload;

      return { ...newState };
    }
    case "update_profession": {
      const newState = state;
      newState.profession = action.payload;

      return { ...newState };
    }
    case "update_diet": {
      const newState = state;
      newState.diet = action.payload;

      return { ...newState };
    }
    case "update_characteristic": {
      const newState = state;
      newState.characteristic = action.payload;

      return { ...newState };
    }
    case "update_characterKnownLanguages": {
      const newState = state;
      newState.characterKnownLanguages = action.payload;

      return { ...newState };
    }

    case "update_coins": {
      const newState = state;
      newState.inventory.coins = action.payload;

      return { ...newState };
    }
    case "update_attributes": {
      const newState = state;
      const { name, value } = action.payload;
      newState.attributes[name].value = value;

      return { ...newState };
    }
    case "update_max_defense": {
      const newState = state;
      const { name, value } = action.payload;
      newState.defense[name] = value;

      return { ...newState };
    }
    case "update_speeds": {
      const newState = state;
      const { name, value } = action.payload;
      newState.speed[name].value = value;

      return { ...newState };
    }
    case "update_powers": {
      const newState = state;
      const { name, value } = action.payload;
      newState.powers[name].value = value;

      return { ...newState };
    }
    case "update_talents": {
      const newState = state;
      const { array, name, value } = action.payload;

      newState.talents[array][name] = value;

      return { ...newState };
    }
    case "update_details": {
      const newState = state;
      const { name, value } = action.payload;
      newState.details[name] = value;

      return { ...newState };
    }
    case "update_appearance": {
      const newState = state;
      const { name, value } = action.payload;
      newState[name] = value;

      return { ...newState };
    }
    case "update_character_level": {
      const newState = state;
      const { name, value } = action.payload;
      newState[name] = value;

      return { ...newState };
    }
    case "update_inventory": {
      const newState = state;
      const { name, value, int } = action.payload;
      newState.inventory.items[int][name] = value;

      return { ...newState };
    }
    case "update_equiped": {
      const newState = state;
      const { name, checked, int } = action.payload;
      newState.inventory.items[int][name] = checked;

      return { ...newState };
    }
    case "update_show_description": {
      const newState = state;
      const { value, int } = action.payload;
      newState.inventory.items[int].showDescription = !value;

      return { ...newState };
    }
    case "update_milestone": {
      const newState = state;
      const { checked, int } = action.payload;
      newState.milestones[int].exampleMilestone = checked;

      return { ...newState };
    }
    case "update_spellbook_info": {
      const newState = state;
      const { type, name, value, int } = action.payload;
      newState.spellbook[type][int][name] = value;

      return { ...newState };
    }
    case "update_magicSchools": {
      const newState = state;
      const { value } = action.payload;
      newState.spellbook.magicSchools[0] = value;

      return { ...newState };
    }
    case "update_action": {
      const newState = state;
      const { name, value, int } = action.payload;
      newState.actions[int][name] = value;

      return { ...newState };
    }

    case "add_talent": {
      const newState = state;

      newState.talents.push({ name: "", effect: "" });

      return { ...newState };
    }
    case "delete_talent": {
      const newState = state;
      const { int } = action.payload;

      newState.talents.splice(int, 1);

      return { ...newState };
    }
    case "add_inventory_item": {
      const newState = state;

      newState.inventory.items.push({
        name: "",
        weight: 0,
        quantity: 0,
        isEquipped: false,
      });

      return { ...newState };
    }
    case "add_spellbook_magic": {
      const newState = state;
      const { type } = action.payload;

      newState.spellbook[type].push({
        name: "",
        cost: 0,
        time: 0,
        range: "",
        duration: "",
        ad: "",
        damage: "",
        description: "",
      });

      return { ...newState };
    }
    case "add_action": {
      const newState = state;

      newState.actions.push({
        name: "",
        formula: "",
        damageType: "",
        energyCost: "",
      });

      return { ...newState };
    }

    default:
      return state;
  }
}
