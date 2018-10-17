import React from 'react';
import Home from "./src/components/Home";
import  UserAction from "./src/Actions/UserAction";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
// import * as screenActions from './redux/actions/screenActions';
import {
  createStackNavigator,
  NavigationActions,
  StackActions
} from "react-navigation";
// import {rootReducer} from './src/reducers/rootReducer';
// const reducer = combineReducers(reducers);
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = rootReducer;
// const store = createStoreWithMiddleware(reducer);

const componentWithHeader = {
  headerStyle: {
    backgroundColor: "#3352FF",
    marginLeft: 0,
    borderBottomWidth: 0,
    borderWidth: 0,
    borderColor: "#3352FF",
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0 // remove shadow on iOS
  },
  headerTintColor: "#FFFFFF",
  // headerBackTitle: "Terug",
  title:  "Terug",
  titleStyle: {
    // alignSelf: "right",
    justifyContent:"center"
  },
  gesturesEnabled: false
};

const Navigator=createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: componentWithHeader
  }
}, {
  initialRouteName: "Home"
})

export default class App extends React.Component {
 
state={
  userdata:object
}
  componentDidMount=async()=>{
    const userData=await UserAction.fetchUserData();
    // this.setState({
    //   userdata:userData
    // })
    console.log("Data Expected",userData);
  }

  render() {
    return <Navigator/>;
  }
}