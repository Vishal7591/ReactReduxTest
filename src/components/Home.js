import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from "prop-types"
import * as UserDataAction from "./../Actions/UserDataAction";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
export default class Home extends React.Component {

  constructor(props){
      super(props);
      state={
          userData:[]
      }
      console.log("Screen Props",this.props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
        <View >
            <Image style={styles.avatar} source={{uri:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"}}/>           
          </View>
          <View>
            <Text style={styles.userName}></Text>
          </View>
          </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F2FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarSection:{
    flexDirection:"column",
    flex:1,
    marginTop:"10%",
    width:"100%"
  },
  avatar:{
    height:100,
    width:100,
    borderRadius:100,
    borderColor:"#000",
    borderWidth:2,
    marginLeft:"10%"
  },
  userName:{
    color:"#3352FF"
  }
});


// Home.propTypes = {
//     actions: PropTypes.object.isRequired,
//     auth: PropTypes.object.isRequired,
//   };
  
//   function mapStateToProps(state) {
//     return {
//       auth: state.auth,
//     };
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return {
//       actions: bindActionCreators(UserDataAction, dispatch),
//     };
//   }
  
//   export default connect(    
//     (state) => ({
//         state: state.reducer
//       }),
//       (dispatch) => ({
//         actions: bindActionCreators(mapStateToProps, mapDispatchToProps)
//       })
    
//     )(Home);