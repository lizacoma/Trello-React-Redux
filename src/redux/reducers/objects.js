import { ADD_NEW_COLUMN, UPDATE_COLUMN, DELETE_COLUMN } from '../constants/types';

const initialState = {
        board: []
    };

    export function stateReducer (state = initialState, action) {
        switch (action.type) {
            case ADD_NEW_COLUMN: 
            return  {
                ...state,
                board: [...state.board, action.column]
            };

            case UPDATE_COLUMN: 
            return {
                ...state,
                board: state.board.map(column => {
                        if (column.id !== action.id) {
                          return column
                        }
                        else {
                            return {
                                ...action.column
                              }
                            }
                        }) 
                };

            case DELETE_COLUMN: 
            return {
                ...state,
                board: state.board.filter(column => column.id !== action.id)
                };

                default:
                    return state;
        };
      
    };