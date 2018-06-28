import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDrPUhJgWIK7dSz1460t35dNvowhBlh-tw",
  authDomain: "odds-59e5d.firebaseapp.com",
  databaseURL: "https://odds-59e5d.firebaseio.com",
  projectId: "odds-59e5d",
  storageBucket: "odds-59e5d.appspot.com",
  messagingSenderId: "548192187987"
};

let fire = firebase.initializeApp(config);
export default fire;