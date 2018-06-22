import React, { Component } from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Head from "next/head";
import PropTypes from "prop-types";
import styled from "styled-components";
import Store from "store";
import { fetchPosts } from "store/posts/actions";
import { Link } from "routes";
import NProgress from "components/NProgress";

const H1 = styled.h1`
  color: #458542;
`;

class PostsIndex extends Component {
  static getInitialProps({ store }) {
    store.dispatch(fetchPosts());
  }

  render() {
    const { posts, fetchPostsAction } = this.props;
    return (
      <div>
        <Head>
          <title>Posts Index</title>
        </Head>
        <NProgress />
        <button
          onClick={() => {
            fetchPostsAction();
          }}
        >
          Click Me
        </button>
        <H1>Posts</H1>
        {posts.length > 0 &&
          posts.map(post => (
            <div key={post.id}>
              <h2>
                <Link prefetch route="post" params={{ id: post.id }}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    );
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchPostsAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPostsAction: fetchPosts
    },
    dispatch
  );

export default withRedux(Store, mapStateToProps, mapDispatchToProps)(
  withReduxSaga(PostsIndex)
);
