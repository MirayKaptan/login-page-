import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfiguration } from "../config/config";

const Firebase = firebase.initializeApp(firebaseConfiguration);

export default Firebase;
