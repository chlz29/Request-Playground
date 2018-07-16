import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCommentsEpic } from 'Actions/queries/comments/comments.actions';
import FullWidthLoading from 'ubidy_ui_kit/lib/FullWidthLoading';

class Comments extends Component {
  componentDidMount() {
    this.props.services.getCommentsEpic();
  }

  handleGetCommentsById = id => {
    this.props.services.getCommentsEpic(id);
  };

  handleManipulate = () => {
    let newComments = [];
    if (this.props.comments.length > 1) {
      newComments = this.props.comments.splice(0, 11);
    } else {
      newComments = [
        {
          ...this.props.comments,
        },
      ];
    }

    return newComments;
  };

  render() {
    const { comments, loading } = this.props;
    // console.log(this.handleManipulate());

    return (
      <section className="Comments-section">
        <h1> Comments Section </h1>
        {loading ? (
          <FullWidthLoading type="Dotted" skin="dark" />
        ) : (
          this.handleManipulate().map(comment => {
            return (
              <div
                className="comments-item"
                key={comment.id}
                data-comment-id={comment.id}
              >
                <h1 className="name">
                  <strong>Name:</strong> {comment.name}
                </h1>
                <h1 className="name">
                  <strong>Email:</strong>
                  {comment.email}
                </h1>
                <h1 className="name">
                  <strong>Body:</strong>
                  {comment.body}
                </h1>
                <button onClick={() => this.handleGetCommentsById(comment.id)}>
                  Get info
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
    comments: state.comments.comments,
    loading: state.comments.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    services: bindActionCreators(
      {
        getCommentsEpic,
      },
      dispatch,
    ),
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
