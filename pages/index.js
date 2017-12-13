import React, { Component } from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Head from "next/head";
import PropTypes from "prop-types";

import Store from "store";
import { fetchPosts } from "store/posts/actions";
import { Link } from "routes";
import NProgress from "components/NProgress";
import styles from "./index.scss";

class PostsIndex extends Component {
  static getInitialProps({ store }) {
    store.dispatch(fetchPosts());
  }

  render() {
    const { posts, fetchPostsAction } = this.props;
    return (
      <div>
        <style jsx>{styles}</style>
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
        <h1>Posts</h1>
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
  posts: state.posts
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
