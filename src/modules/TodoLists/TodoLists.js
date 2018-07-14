import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodoListsEpic } from 'Actions/queries/todolists/todolists.actions';
import FullWidthLoading from 'ubidy_ui_kit/lib/FullWidthLoading';

class TodoLists extends Component {
  componentDidMount() {
    this.props.services.getTodoListsEpic();
  }
  handleGetTodosById = id => {
    this.props.services.getTodoListsEpic(id);
  };
  handleManipulate = () => {
    let newTodos = [];
    if (this.props.todolists.length > 1) {
      newTodos = this.props.todolists.splice(0, 15);
      console.log('newTodos', newTodos);
    } else {
      newTodos = [
        {
          ...this.props.todolists,
        },
      ];
    }
    return newTodos;
  };

  render() {
    const { todolists, loading } = this.props;
    //console.log(this.handleManipulate());

    return (
      <section className="Todo-section">
        <h1> TO DO:</h1>
        {loading ? (
          <FullWidthLoading type="Dotted" skin="dark" />
        ) : (
          this.handleManipulate().map(todos => {
            return (
              <div
                className="todo-item"
                key={todos.id}
                data-todolists-id={todos.id}
              >
                <h1 className="title">{todos.title}</h1>
                <h1 className="completed">{todos.completed}</h1>
                {/* <button onClick={() => this.handleGetTodosById(todos.id)}>
                  ABC
                </button> */}
              </div>
            );
          })
        )}
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    todolists: state.todolists.todolists,
    loading: state.todolists.loading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    services: bindActionCreators(
      {
        getTodoListsEpic,
      },
      dispatch,
    ),
    dispatch,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLists);
