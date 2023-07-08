import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAPbktvFd88wKcK7H8geea4NC4s92UuZIM",
  authDomain: "rnw-react-firebase-demo.firebaseapp.com",
  projectId: "rnw-react-firebase-demo",
  storageBucket: "rnw-react-firebase-demo.appspot.com",
  messagingSenderId: "1091200598216",
  appId: "1:1091200598216:web:06466aa385b5939f9f25fd",
  measurementId: "G-NGPT78VYRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);

