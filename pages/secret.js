import React, { Component } from 'react'
import authenticate from 'services/auth/authenticate'

export default class Secret extends Component {
  static getInitialProps(ctx) {
    const { req, res } = ctx
    const user = authenticate(ctx)
    return {}
  }

  render() {
    return (
      <div>Secret Page</div>
    )
  }
}
