import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Head from 'next/head'

import store from 'store'
import { fetchPosts } from 'store/posts/actions'
import { Link } from 'routes'
import NProgress from 'components/NProgress'

class PostsIndex extends Component {
  static getInitialProps({store}) {
    store.dispatch(fetchPosts())
  }

  render() {
    const { posts, fetchPosts } = this.props
    return (
      <div>
        <Head>
          <title>Posts Index</title>
        </Head>
        <NProgress />
        <button onClick={() => { fetchPosts() }}>Click Me</button>
        <h1>Posts</h1>
        { posts.length > 0 && posts.map(function(post) {
          return (
            <div key={post.id}>
              <h2>
                <Link prefetch route='post' params={{ id: post.id }}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <p>{post.body}</p>
            </div>
          )
        }) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts
  }, dispatch)
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(withReduxSaga(PostsIndex))
