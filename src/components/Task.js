import React, { useState } from 'react';
import ModalWindow from '../containers/ModalWindow';

import { Draggable } from 'react-beautiful-dnd';


const Task = (props) => {
    const [showBlock, setShowBlock] = useState(false);
    const {task, column, index} = props;

    const openModal = () => {
        setShowBlock(true);
    };

    const closeModal = (bool) => {
        setShowBlock(bool); 
    };

    return (
        <div>
            <Draggable draggableId = {task.id} index = {index}>
                {(provided, snapshot) => {
                    return (
                    <section  className = 'task-wrapper mb-2'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref = {provided.innerRef}
                        style = {{ 
                            backgroundColor: snapshot.isDragging ? 'white' : '#ffffffc2',
                            boxShadow: snapshot.isDragging ? '0 0 12px #4c00c3b5' : '',
                            ...provided.draggableProps.style
                    }}>
                    
                    <section className = 'task-content mx-2 p-2 d-flex justify-content-between rounded-sm' onClick = {openModal}>
                        <p className = 'm-0 p-2'> {task.title} </p>
                        <i className = "fas fa-pencil-alt edit"/>
                    </section>
                    </section>
                    )}
                }
                </Draggable>
                    {showBlock ? <ModalWindow task = {task} column = {column} onVisible = {closeModal}/> : ''}
            </div>        
    )
};

export default Task;