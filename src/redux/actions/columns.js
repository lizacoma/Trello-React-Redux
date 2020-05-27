import { ADD_NEW_COLUMN, UPDATE_COLUMN, DELETE_COLUMN, UPDATE_TASK_LIST, UPDATE_TASK, DELETE_TASK } from '../constants/types';

export function addNewColumn(column) { 
    return {
        type: ADD_NEW_COLUMN,
        column
    }
}

export function updateColumn(column) { 
    return {
        type: UPDATE_COLUMN,
        column
    }
}

export function deleteColumn(id) { 
    return {
        type: DELETE_COLUMN,
        id
    }
}

export function updateTask(task) { 
    return {
        type: UPDATE_TASK,
        task
    }
}

export function deleteTask(id) { 
    return {
        type: DELETE_TASK,
        id
    }
}

export function updateTaskList(id, tasks) { 
    return {
        type: UPDATE_TASK_LIST,
        id,
        tasks
    }
}
