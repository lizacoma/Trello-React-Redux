import React from 'react';
import AddForm from '../components/AddForm';
import Task from '../components/Task'
import shortid from 'shortid';

import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { updateColumn, deleteColumn, updateTaskList } from '../redux/actions/columns';

const Column = (props) => {

    const {column, updateColumn, deleteColumn, updateTaskList} = props;
    const isColumn = column !== undefined ? true : false;

    const сhangeColumnTitle = (title) => {

        const changedColumn = {
            ...column,
            title   
        };
        updateColumn(changedColumn);
    };

    const addTask = (title) => {  

        const newTask = {
            id: shortid.generate(),
            title,
            description: ''
        };

        const newTaskList = [...column.tasks, newTask];
        updateTaskList(column.id, newTaskList);
    };
  
    return (
        <Droppable droppableId = {isColumn ? column.id : ''}>
            {(provided, snapshot) => {
                return (    
                    <section className = 'column-wrapper rounded m-2 px-2 d-flex flex-column align-self-start'
                        {...provided.droppableProps}
                        ref = {provided.innerRef}
                        style = {{
                            background: snapshot.isDraggingOver ? 'rgba(0, 31, 255, 0.32)' : '#001fff2e'
                        }}>
                            
                        <AddForm 
                            placeholder = 'add new column...' 
                            content = {isColumn ? column.title : ''} 
                            id = {isColumn ? column.id : ''} 
                            onSubmit = {сhangeColumnTitle} 
                            onDelete = {deleteColumn}
                        />  

                        <section className = 'all-tasks-wrapper'>
                            {isColumn ? column.tasks.map((task, index) => 
                                <Task 
                                    key = {task.id} 
                                    column = {column} 
                                    task = {task} 
                                    index = {index} 
                                    />) 
                                    : ''}
                            {provided.placeholder}
                        </section>
                    
                        <div className = 'task-input'>
                            {isColumn ? <AddForm className = 'task-form' placeholder = 'add new task...' onSubmit = {addTask}/> : ''}
                        </div>
                    </section>
                    )}
                    } 
        </Droppable>
    );
};

const mapDispatchToProps = dispatch => {

    return {
        deleteColumn: id => dispatch(deleteColumn(id)),
        updateColumn: column => dispatch(updateColumn(column)),
        updateTaskList: (id, tasks) => dispatch(updateTaskList(id, tasks))
    };
  };

export default connect(null, mapDispatchToProps) (Column);