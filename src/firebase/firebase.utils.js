import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL6d1CN4JrhiDfLHQyJTZZd4kqAXOtMMs",
  authDomain: "crwn-db-2e773.firebaseapp.com",
  databaseURL: "https://crwn-db-2e773.firebaseio.com",
  projectId: "crwn-db-2e773",
  storageBucket: "crwn-db-2e773.appspot.com",
  messagingSenderId: "19057977788",
  appId: "1:19057977788:web:0d43286a7447d258e9e3b9",
  measurementId: "G-30SYPEKYG8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
