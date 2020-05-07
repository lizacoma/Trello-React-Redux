import { ADD_NEW_COLUMN } from '../constants/types';

export function addNewColumn(column) { 
    return {
        type: ADD_NEW_COLUMN,
        column
    }
}
