// action types
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

// action creators that returns actions (objects)
export const addCharacterById = id => {
    const action = {
        type: ADD_CHARACTER,
        id
    }

    return action;
}

export const removeCharacterById = id => {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }

    return action;
}