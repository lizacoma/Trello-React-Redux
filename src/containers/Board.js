import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import shortid from 'shortid';
import Column from './Column';
import AddForm from '../components/AddForm';
import { addNewColumn, updateTaskList } from '../redux/actions/columns';

const Board = (props) => {
  
  const {allColumns, addNewColumn, updateTaskList} = props;

  const addColumn = (title) => {

    if (!title) return;
      const newColumn = {
          id: shortid.generate(),
          title,
          tasks: []
      };
      addNewColumn(newColumn);
  }

  const onDragEnd = (result) => {

    if(!result.destination) return;

      const {source, destination} = result;
      const columns = [...allColumns];

      const sourceColumn = columns.find(el => el.id === source.droppableId);
      const sourceTaskList = sourceColumn.tasks;
      const [removed] = sourceTaskList.splice(source.index, 1);

      if (source.droppableId !== destination.droppableId) {

        const destColumn = columns.find(el => el.id === destination.droppableId); 
        const destTaskList = destColumn.tasks;
        destTaskList.splice(destination.index, 0, removed);
        
        updateTaskList(destination.droppableId, destTaskList);

      } else {
        sourceTaskList.splice(destination.index, 0, removed);
      }

      updateTaskList(source.droppableId, sourceTaskList);
  };
 
    return (
      <DragDropContext onDragEnd = {onDragEnd}>
        <section className = 'board-wrapper container-fluid d-flex justify-content-start'>
          
            {allColumns.map((column) => (
              <Column key = {column.id} column = {column}/>
              )
            )}
         
          <div className = 'new-column-wrapper rounded m-2 px-2 d-flex flex-column align-self-start'> 
            <AddForm onSubmit = {addColumn} placeholder = 'add new column...'/>
          </div>
        </section>
        </DragDropContext>
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
        addNewColumn: column => dispatch(addNewColumn(column)),
        updateTaskList: (id, tasks) => dispatch(updateTaskList(id, tasks))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Board);