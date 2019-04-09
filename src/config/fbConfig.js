import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Coloque a sua configuração do Firebase

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

export default firebase 