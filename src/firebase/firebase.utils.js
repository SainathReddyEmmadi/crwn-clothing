import fb from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyCA1elpeYdvNGfnuiyi8_YU7Or0QUU_YCE",
  authDomain: "crwn-db-574b2.firebaseapp.com",
  databaseURL: "https://crwn-db-574b2.firebaseio.com",
  projectId: "crwn-db-574b2",
  storageBucket: "crwn-db-574b2.appspot.com",
  messagingSenderId: "366881485068",
  appId: "1:366881485068:web:33b870eeefce03b0245929",
  measurementId: "G-9J9XN5239N",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth);
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      const data = await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log(data);
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userRef;
};
fb.initializeApp(config);
export const auth = fb.auth();
export const firestore = fb.firestore();
const provider = new fb.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default fb;
