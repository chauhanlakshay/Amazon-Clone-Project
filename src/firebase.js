// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCNmaFi7VM1z7ubItX8Xnfwf1_WpfMEVuI",
    authDomain: "clone-922b1.firebaseapp.com",
    projectId: "clone-922b1",
    storageBucket: "clone-922b1.appspot.com",
    messagingSenderId: "819358420338",
    appId: "1:819358420338:web:efba26553902be9ef3e1eb",
    measurementId: "G-XSENFYZKHF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }