// get data from the file (local database)
import characters_json from '../../services/data/characters.json';
import { ADD_CHARACTER } from '../actions';

// reducer: get data as default
const characters = (state = characters_json, action) => {
    switch(action.type) {
        case ADD_CHARACTER: 
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        default:
            return state;
    }
}

export default characters;