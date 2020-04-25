import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter, removeCharacter } from './helpers/characters'

// get data from the file (local database)
import characters_json from '../../services/data/characters.json';

const heroes = (state = [], action) => {
    const { id, type } = action;

    switch (type) {
        case ADD_CHARACTER:
            return  [...state, createCharacter(characters_json, id)];
        case REMOVE_CHARACTER:
            return removeCharacter(state, id)
        default:
            return state;
    }
}

export default heroes;