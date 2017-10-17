import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Head from 'next/head'

import store from 'store'
import { fetchPosts } from 'store/posts/actions'
import api from 'services/api'

class Aref extends Component {
  static getInitialProps({store}) {
    store.dispatch(fetchPosts())
  }

  render() {
    const { posts, fetchPosts } = this.props
    return (
      <div>
        <Head>
          <title>Aref</title>
        </Head>
        <button onClick={() => { fetchPosts() }}>Click Me</button>
        <h1>Posts</h1>
        { posts.map(function(post) {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(withReduxSaga(Aref))
