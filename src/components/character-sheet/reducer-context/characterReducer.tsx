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
    default:
      return state;
  }
}
