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

};*/

const firebaseConfig = {
  apiKey: "AIzaSyCIzgA_1ew9nUkpH94TXDDHHWe61GF0HFA",
  authDomain: "eventos-36f9d.firebaseapp.com",
  databaseURL: "https://eventos-36f9d.firebaseio.com",
  projectId: "eventos-36f9d",
  storageBucket: "eventos-36f9d.appspot.com",
  messagingSenderId: "127451813888",
  appId: "1:127451813888:web:f140e14abe90bf4dfca0e5"
};
/*
const firebaseConfig = {
  apiKey: "AIzaSyCIzgA_1ew9nUkpH94TXDDHHWe61GF0HFA",
  authDomain: "eventos-36f9d.firebaseapp.com",
  databaseURL: "https://eventos-36f9d.firebaseio.com",
  projectId: "eventos-36f9d",
  storageBucket: "eventos-36f9d.appspot.com",
  messagingSenderId: "127451813888",
  appId: "1:127451813888:web:f140e14abe90bf4dfca0e5"
}; 



const firebaseConfig = {
  apiKey: "AIzaSyDfykj2IGXlOQIXLiNBC2I-OcfQ_309oJQ",
  authDomain: "eventrecteste.firebaseapp.com",
  databaseURL: "https://eventrecteste.firebaseio.com",
  projectId: "eventrecteste",
  storageBucket: "eventrecteste.appspot.com",
  messagingSenderId: "458782663470",
  appId: "1:458782663470:web:1d17395fb000a90e7750bf",
  measurementId: "G-V5GLH8VPCZ"
};

*/





  export default firebase.initializeApp(firebaseConfig);