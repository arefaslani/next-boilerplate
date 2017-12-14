import React, { Component } from "react";
import signIn from "services/auth/sign_in";

export default class Signin extends Component {
  static getInitialProps(ctx) {
    signIn(ctx);
    return {};
  }

  render() {
    return <div />;
  }
}
