import { ADD_NEW_COLUMN, UPDATE_COLUMN, UPDATE_TASK, DELETE_TASK, UPDATE_TASK_LIST, DELETE_COLUMN } from '../constants/types';

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
                            if (column.id !== action.column.id) {
                                return column
                            }
                            else {
                                return {...action.column}
                            }
                        }) 
                    };

            case DELETE_COLUMN: 
                return {
                    ...state,
                    board: state.board.filter(column => column.id !== action.id)
                    };

            case UPDATE_TASK:
                return {
                    ...state,
                    board: state.board.map(column => {
                        return {
                            ...column,
                        tasks: column.tasks.map(task => {
                               if (task.id === undefined || task.id !== action.task.id) {
                                   return task
                               } else {
                                   return action.task
                               }
                           })
                        }
                    }) 
                };

            case DELETE_TASK:
            return {
                ...state,
                board: state.board.map(column => {
                    return {
                        ...column,
                    tasks: column.tasks.filter(task => task.id !== action.id)
                    }
                }) 
            };

            case UPDATE_TASK_LIST:
                return {
                    ...state,
                    board: state.board.map(column => {
                            if (column.id !== action.id) {
                                return column
                            }else {
                                return {
                                    ...column,
                                    tasks: [...action.tasks]
                                }
                            }
                        }) 
                    };

                default:
                    return state;
                    
            };
    };