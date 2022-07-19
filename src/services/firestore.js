import firebase from "firebase";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDdrR_EeBDKhGlt7X5FFHGuMZhgUa8wcok",
    authDomain: "gojs-database.firebaseapp.com",
    projectId: "gojs-database",
    storageBucket: "gojs-database.appspot.com",
    messagingSenderId: "859535792458",
    appId: "1:859535792458:web:b1baea74f4622c4b4509b3",
    measurementId: "G-145WFCM084"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase