import { ADD_NEW_COLUMN } from '../constants/types';

const initialState = [] 
    

    export function stateColumsReducer (state = initialState, action) {
        switch (action.type) {
            case ADD_NEW_COLUMN:
                return {
                    ...state,
                    columns: [action.column, ...state.columns]
                }
                default:
                    return state;
        }
      
    }