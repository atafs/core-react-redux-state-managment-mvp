// action types
export const ADD_CHARACTER = 'ADD_CHARACTER';

// action creators that returns actions (objects)
export const addCharacterById = id => {
    const action = {
        type: ADD_CHARACTER,
        id
    }

    return action;
}