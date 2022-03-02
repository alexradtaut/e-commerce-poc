import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrkB1dPlL5Bnie9oFu01o6PHJmFz8LT9U",
  authDomain: "e-commerce-e0c72.firebaseapp.com",
  projectId: "e-commerce-e0c72",
  storageBucket: "e-commerce-e0c72.appspot.com",
  messagingSenderId: "100803647578",
  appId: "1:100803647578:web:540ec24f073d74a63d2063",
  measurementId: "G-G5GPP9E2C8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
