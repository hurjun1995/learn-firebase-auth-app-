import * as firebase from "firebase";

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_STORAGE_BUCKET
} from "./constants";

// Initialize Firebase
var config = {
    apiKey: FIREBASE_API_KEY,
    authDomain = FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectID: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderID: FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export default firebase;


// This code creates an instance of the Firebase SDK and configures it with your config.
// Now you can import it anywhere in your codebase and it’s always this singleton.
// When you see firebase from now on, assume that it’s imported from here.