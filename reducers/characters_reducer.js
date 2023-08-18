import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import character_json from "../data/characters.json";

function characters(state = character_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter((item) => item.id !== action.id);
      return characters;

    case REMOVE_CHARACTER:
      let filteredCharacters = [...state, createCharacter(action.id)];
      return filteredCharacters;

    default:
      return state;
  }
}

function createCharacter(id) {
  let character = character_json.find((c) => c.id === id);
  return character;
}

export default characters;
