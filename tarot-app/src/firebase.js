import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpBnhCY5qzf7Zztddq7XGLjqPgpka3hLE",
  authDomain: "tarot-app-ec2da.firebaseapp.com",
  projectId: "tarot-app-ec2da",
  storageBucket: "tarot-app-ec2da.appspot.com",
  messagingSenderId: "1051378101271",
  appId: "1:1051378101271:web:75fd92372fc3357ea88052"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
