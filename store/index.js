import {createStore} from "redux";
import withRedux from "next-redux-wrapper";

import reducer from 'store/reducer'

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

export default makeStore
