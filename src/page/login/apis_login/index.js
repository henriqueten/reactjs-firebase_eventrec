/*import React, {  Component }  from 'react';
import firebase_org from '../../../firebase';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {Redirect} from 'react-router-dom';


class ApisLogin extends Component{

    firebase = firebase_org
    state = { isSignedIn: false }
    

    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
       
      })
    }

  render() {
    return (
      <div className="App">
         {this.state.isSignedIn ? (
          <span>
            {  this.state.isSignedIn !== false ? <Redirect to={'/'}/> : null }
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}




export default ( ApisLogin )*/