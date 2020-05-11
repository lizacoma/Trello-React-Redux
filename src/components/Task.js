import React from 'react';
import closeButton from '../dist/icons/round_clear_black_18dp.png'


const Task = (props) => {

    const {title, id} = props.task;

    return (
        <section className = "task-wrapper">
            <p>{title}</p>
            <img src = {closeButton} alt = "erorr" onClick = {() => props.onDelete(id)} className = 'close-button'></img>
        </section>
    )
};

export default Task;