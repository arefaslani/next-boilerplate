import React, { Component } from 'react'
import axios from 'axios'

export default class Aref extends Component {
  static async getInitialProps(props) {
    const res  = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return { data: res.data }
  }

  render() {
    const {data} = this.props
    return (
      <div>
        <h1>Posts</h1>
        {data.map(function(post) {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
