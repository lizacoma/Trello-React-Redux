import React from 'react';
import { AddForm } from './AddForm';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { addNewColumn } from '../redux/actions/columns'

const Column = (props) => {

    const addColumn = (title) => {
        
        let newColumn = {
            id: shortid.generate(),
            title,
            tasks: []
        };

        props.addNewColumn(newColumn);
        console.log('allColumns: ', props.allColumns);
    };

    return (
        <section className = 'column-wrapper'>
            <h1>{props.title}</h1>
            <AddForm
            onSubmit = {addColumn}
            />
        </section>
    )
};

const mapStateToProps = state => {
    return {
        state,
        allColumns: state.stateColumsReducer
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      addNewColumn: column => dispatch(addNewColumn(column))
    };
  };

export default 
// connect(mapStateToProps, mapDispatchToProps)
Column;