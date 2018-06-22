# NEXT Boilerplate
Lightweight Next boilerplate!
## Background
We had tough times working with Next to make it our beloved framework. We opened issues (https://github.com/zeit/next.js/issues/3131), make pull requests and discuss a lot in the slack channel of NextJs. Unfortunately some of our must have features was not supported at that time. So we started creating a boilerplate that had all the features we wanted on top of Next.

## Features
* **redux** for handling application state
* **redux-saga** for handling async actions and side-effects
* **next-routes** for handling dynamic routes
* **axios** for making HTTP requests
* **dotenv** for using environment variables
* **express** as the server
* **redux-devtools** in development
* **redux-logger** in development for managing actions and state changes they cause
* **universal-cookie-express** as a middleware for easily writing cookies
* **compression** for compressing static assets
* **babel-plugin-module-resolver** for importing modules related to the root directory
* **prettier** and **eslint** configured with **airbnb**'s styleguide for formating code
* **husky** and **lint-staged** for autoformatting code before commit
* **styled-components** allows you to write actual CSS code to style your components.

this boilerplate also includes **flow** and **storybook** that you can easily remove them if you don't like.

For more information please read the [docs](https://arefaslani.github.io/next-boilerplate)
