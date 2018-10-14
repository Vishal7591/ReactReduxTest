import React from 'react';
import Home from "./src/components/Home";
import * as UserDataAction from "./src/Actions/UserDataAction";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
// import * as screenActions from './redux/actions/screenActions';

import {rootReducer} from './src/reducers/rootReducer';
const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = rootReducer;
const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component {

  componentDidMount(){
    console.log("Data Expected",UserDataAction.getUserData());
  }

  render() {
    return (

      <Provider store={store}>
        <Home />
      </Provider>
      
    );
  }
}