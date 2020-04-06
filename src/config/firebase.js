import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnco2cAEnpkKQ5zlUAqY2gJE0VkmhamDg",
    authDomain: "eventos-48ac0.firebaseapp.com",
    databaseURL: "https://eventos-48ac0.firebaseio.com",
    projectId: "eventos-48ac0",
    storageBucket: "eventos-48ac0.appspot.com",
    messagingSenderId: "977520701586",
    appId: "1:977520701586:web:3b985ff5b3f23e6c31b64b"
  };

  export default firebase.initializeApp(firebaseConfig);