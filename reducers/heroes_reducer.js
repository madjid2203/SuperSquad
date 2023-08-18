import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import character_json from "../data/characters.json";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;

    case REMOVE_CHARACTER:
      let filteredHeroes = state.filter((hero) => hero.id !== action.id);
      return filteredHeroes;

    default:
      return state;
  }
}

function createCharacter(id) {
  let character = character_json.find((c) => c.id === id);
  return character;
}

export default heroes;
