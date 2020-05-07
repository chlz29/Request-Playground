import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsersEpic } from 'Actions/queries/users/users.actions';
import FullWidthLoading from 'ubidy_ui_kit/lib/FullWidthLoading';

class Users extends Component {
  componentDidMount() {
    this.props.services.getUsersEpic();
  }

  handleGetUsersById = id => {
    this.props.services.getUsersEpic(id);
  };

  handleManipulate = () => {
    let newUsers = [];
    if (this.props.users.length > 1) {
      newUsers = this.props.users.splice(0, 10);
      console.log('newUsers', newUsers);
    } else {
      newUsers = [
        {
          ...this.props.users,
        },
      ];
    }

    return newUsers;
  };
  render() {
    const { users, loading } = this.props;
    return (
      <section className="Users-section">
        <h1> Users Section</h1>
        {loading ? (
          <FullWidthLoading type="Dotted" skin="dark" />
        ) : (
          this.handleManipulate().map(users => {
            return (
              <div
                className="users-item"
                key={users.id}
                data-user-id={users.id}
              >
                <h1 className="name">
                  <strong>Name:</strong> {users.name}
                </h1>
                <h1 className="u-name">
                  <strong>Username:</strong> {users.username}
                </h1>
                <h1 className="email">
                  <strong>Email:</strong> {users.email}
                </h1>
                <h1 className="country">
                  <strong>Country:</strong> {users.country}
                </h1>
                <h1 className="companyName">
                  <strong>Company Name:</strong> {users.companyName}
                </h1>
                <button onClick={() => this.handleGetUsersById(users.id)}>
                  More Info
                </button>
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
    users: state.users.users,
    loading: state.users.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    services: bindActionCreators(
      {
        getUsersEpic,
      },
      dispatch,
    ),
    dispatch,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
