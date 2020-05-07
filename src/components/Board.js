import React from 'react';
import { connect } from 'react-redux';
import { addNewColumn } from '../redux/actions/columns'
import { Column } from './Column';

const Board = (props) => {
  
  const {allColumns, state} = props;
  console.log('state: ', allColumns);
    return (
        <section className = 'board-wrapper'>
          {allColumns.map((column) => (
             <Column title = {column.title}/>
             )
          )}
          <Column/>  

        </section>
    )
}

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

export default connect(mapStateToProps, mapDispatchToProps) (Board);