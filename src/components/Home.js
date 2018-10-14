import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types"
import * as UserDataAction from "./../Actions/UserDataAction";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Home extends React.Component {

  constructor(props){
      super(props);
      state={
          userData:[]
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


Home.propTypes = {
    actions: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(UserDataAction, dispatch),
    };
  }
  
  export default connect(    
    (state) => ({
        state: state.reducer
      }),
      (dispatch) => ({
        actions: bindActionCreators(mapStateToProps, mapDispatchToProps)
      })
    
    )(Home);