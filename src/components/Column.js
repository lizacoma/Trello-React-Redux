import React from 'react';
import AddForm from './AddForm';
import Task from './Task'
import shortid from 'shortid';

import { connect } from 'react-redux';
import { addNewColumn, updateColumn, deleteColumn } from '../redux/actions/objects';
import closeButton from '../dist/icons/round_clear_black_18dp.png'

const Column = (props) => {

    const {addNewColumn, updateColumn, deleteColumn, column, allColumns} = props;

    const addColumn = (title) => {
        
        let newColumn = {
            id: shortid.generate(),
            title,
            tasks: []
        };

        addNewColumn(newColumn);
        console.log('Column: allColumns', allColumns); //тут показує, що state порожній
    };

    const addTask = (title) => {  
        let newTask = {
            id: shortid.generate(),
            title
        };

        let newColumn = {...column, 
            tasks: [...column.tasks, newTask]
        };

        updateColumn(column.id, newColumn);
        console.log('Column: allColumns', allColumns);
        
    }

    const deleteTask = (id) => { 
        let newColumn = {...column, 
            tasks: column.tasks.filter(task => task.id !== id)
        }; 
        updateColumn(column.id, {...newColumn});
        console.log('Column: allColumns', allColumns);
    }

    return (
        <section className = 'column-wrapper'>
            {/* {console.log('Column: allColumns', allColumns)} */}
            {/* {localStorage.setItem('board', JSON.stringify([...allColumns]))} */}
               {column !== undefined ? 
                    <div className = "title-wrapper">
                        <h3> {column.title} </h3> 
                        <img src = {closeButton} alt = "erorr" className = 'close-button' onClick = {() => deleteColumn(column.id)}>
                        </img>
                    </div>
                    : <AddForm placeholder = 'add new column...' onSubmit = {addColumn}/>}  
               
            <section className = "all-tasks-wrapper">
                {column !== undefined ? column.tasks.map((task) => <Task key = {task.id} task = {task} onDelete = {deleteTask} />) : ''}
            </section>
            <div className = "task-input">
                {column !== undefined ? <AddForm placeholder = "add new task..." onSubmit = {addTask}/> : ''}
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        state,
        allColumns: state.stateReducer.board
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        addNewColumn: column => dispatch(addNewColumn(column)),
        deleteColumn: id => dispatch(deleteColumn(id)),
        updateColumn: (id, column) => dispatch(updateColumn(id, column))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Column);