import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from '@firebase/app';
import { Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  state={
    loggedIn: null
  };
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyCvqGXbVMuoSn7sONrky9GRK2TFQLuP_6U",
    authDomain: "reactnativeauth-a6ab0.firebaseapp.com",
    databaseURL: "https://reactnativeauth-a6ab0.firebaseio.com",
    projectId: "reactnativeauth-a6ab0",
    storageBucket: "reactnativeauth-a6ab0.appspot.com",
    messagingSenderId: "577669705270"
  });
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        this.setState({loggedIn:true});
    }else{
      this.setState({loggedIn:false});
    }
  });
};

renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={()=>firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
          );
      case false:
        return <LoginForm/>
      default:
        return <Spinner size="large"/>
    }
  }





  render() {
    return (
      <View>
        <Header headerText= "Authentication"/>
        {this.renderContent()}

      </View>

    );
  }
}

export default App;
