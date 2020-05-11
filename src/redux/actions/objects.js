import { ADD_NEW_COLUMN, UPDATE_COLUMN, DELETE_COLUMN } from '../constants/types';

export function addNewColumn(column) { 
    return {
        type: ADD_NEW_COLUMN,
        column
    }
}

export function updateColumn(id, column) { 
    return {
        type: UPDATE_COLUMN,
        id,
        column
    }
}

export function deleteColumn(id) { 
    return {
        type: DELETE_COLUMN,
        id
    }
}
