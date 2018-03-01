import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TodoForm, TodoList } from 'components';
import { 
  createTodoRequest, 
  readTodosRequest, 
  updateTodoTextRequest,
  updateTodoRequest,
  deleteTodoRequest,
  downloadRequest
} from 'store/actions';


class TodoContainer extends Component {

  handleImport = () => {
    const { importFromFile } = this.props;
    importFromFile();
  }

  handleExport = () => {
    const { exportToJson } = this.props;
    exportToJson();
  }

  handleUpdateTodo = (e, todo) => {
    const { updateTodo } = this.props;
    updateTodo(todo);
  }

  handleUpdateTodoText = (e) => {
    const { value } = e.target;
    const { updateTodoText } = this.props;
    updateTodoText(value);
  }

  handleDeleteTodo = (e, id) => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  }

  handleCreateTodo = (e) => {
    e.preventDefault();

    const { createTodo, updateTodoText, text } = this.props;
    const todo = { id: `${new Date().getTime()}-${text}`, text: text, completed: false };

    if(!text) {
      return;
    }

    createTodo(todo);
    updateTodoText('');
  }

  render() {
    const { handleImport, handleExport, handleUpdateTodoText, handleCreateTodo, handleUpdateTodo, handleDeleteTodo } = this;
    const { text, list } = this.props;
    return (
        <div>
          <TodoForm 
            text={text}
            onImport={handleImport} 
            onExport={handleExport}
            onChangeTodoText={handleUpdateTodoText}
            onSubmit={handleCreateTodo}/>
          <TodoList 
            list={list} 
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}/>
        </div>
    )
  }

}

const mapStateToProps = (state) => ({
  text: state.todo.get('text'),
  list: state.todo.get('list')
});

const mapDispatchToProps = (dispatch, { limit }) => ({
  updateTodoText: (text) => dispatch(updateTodoTextRequest(text)),
  createTodo: (todo) => dispatch(createTodoRequest(todo)),
  updateTodo: (todo) => dispatch(updateTodoRequest(todo)),
  deleteTodo: (id) => dispatch(deleteTodoRequest(id)),
  importFromFile: () => dispatch(readTodosRequest({ import: true })),
  exportToJson: () => dispatch(downloadRequest({ type: 'excel', filename: 'todos.xlsx' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);