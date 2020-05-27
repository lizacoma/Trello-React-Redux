import React from 'react';
import AddForm from '../components/AddForm';

import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../redux/actions/columns';

const ModalWindow = (props) => {
    const {task, column, onVisible, updateTask, deleteTask} = props;

    const changeTitile = (text) => {

      let newTask = {
            ...task,
            title: text,
        };
        updateTask(newTask);
    };

    const changeDescription = (text) => {

       let newTask = {
             ...task,
             description: text
         };  
         updateTask(newTask);
     };

    return (
        <section className = 'modal'>   
            <div className='hidden-background w-100 h-100' onClick = {() => onVisible(false)} />
                <div className = 'modal-window-wrapper modal-dialog modal-dialog-centered d-flex flex-column'>
                    <div className="modal-content">
                        <div className="modal-header py-0">
                            <div className = 'modal-title w-100'> 
                                <AddForm content = {task.title}  id = {task.id} onSubmit = {changeTitile} onDelete = {deleteTask}/> 
                                <span className = 'pl-2'> in list <span className = 'column-name font-italic'> {column.title} </span> </span>
                            </div>
                            <i className="far fa-window-close close m-0 pt-3 px-0" onClick = {() => onVisible(false)}/>
                        </div>
                        <div className='modal-body'>
                            <AddForm className = 'modal-body' content = {task.description} id = {task.id} onSubmit = {changeDescription}/>
                        </div>
                    </div>
                </div>        
        </section>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: id => dispatch(deleteTask(id)),
        updateTask: task => dispatch(updateTask(task))
    };
  };

export default connect(null, mapDispatchToProps) (ModalWindow);