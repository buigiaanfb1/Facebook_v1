const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/storage');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBDWtqnXek2oExLWxZdASXWg1PRAUvQ7mM',
  authDomain: 'facebook-for-cv.firebaseapp.com',
  projectId: 'facebook-for-cv',
  storageBucket: 'facebook-for-cv.appspot.com',
  messagingSenderId: '661687710668',
  appId: '1:661687710668:web:5e7fc6b83108f7e815e369',
  measurementId: 'G-QM7V1CRWBL',
};

// init firebase
firebase.default.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.default.firestore();

module.exports = projectFirestore;
