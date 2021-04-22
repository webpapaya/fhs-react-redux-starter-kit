import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBaUKK6ikaiYN98xIiQiCV-wPIaPCNS26Y",
  authDomain: "full-stack-development-a2479.firebaseapp.com",
  databaseURL: "https://full-stack-development-a2479-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "full-stack-development-a2479",
  storageBucket: "full-stack-development-a2479.appspot.com",
  messagingSenderId: "338202513827",
  appId: "1:338202513827:web:7ecd7edebc5641f9deca16",
  measurementId: "G-QZ6VWV6785"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

if (process.env.NODE_ENV === 'development') {
  auth.useEmulator('http://localhost:9099')
}