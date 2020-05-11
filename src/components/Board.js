import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewColumn } from '../redux/actions/objects'
import Column from './Column';

const Board = (props) => {
  
  const {allColumns} = props;
 
    return (
        <section className = 'board-wrapper'>
          {console.log('allColumns: ', allColumns)} 
          {allColumns.map((column) => (
             <Column key = {column.id} column = {column}/>
             )
          )}

          <Column/>

        </section>
    )
};

const mapStateToProps = state => {
    return {
        state,
        allColumns: state.stateReducer.board
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
      addNewColumn: column => dispatch(addNewColumn(column))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Board);