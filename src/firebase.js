import firebase from 'firebase';

/*

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyDQB1PHpc4lgVzXGakNqkFFzkAiXlkGhng",
  authDomain: "eventrec-4bfbc.firebaseapp.com",
  databaseURL: "https://eventrec-4bfbc.firebaseio.com",
  projectId: "eventrec-4bfbc",
  storageBucket: "eventrec-4bfbc.appspot.com",
  messagingSenderId: "45739327742",
  appId: "1:45739327742:web:6e105ef6554ff7544765af",
  measurementId: "G-2N9ZG7006Y"
};













  export default firebase.initializeApp(firebaseConfig);


