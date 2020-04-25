import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { removeCharacter, createCharacter } from './helpers/characters'

// get data from the file (local database)
import characters_json from '../../services/data/characters.json';

const characters = (state = characters_json, action) => {
    const { id, type } = action;

    switch(type) {
        case ADD_CHARACTER: 
            return removeCharacter(state, id)
        case REMOVE_CHARACTER:
            return [...state, createCharacter(characters_json, id)];
        default:
            return state;
    }
}

export default characters;