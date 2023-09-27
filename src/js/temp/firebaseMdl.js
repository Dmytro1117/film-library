// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// import { FIREBASE_CONFIG } from '../utils/envConsts';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: 'AIzaSyBJTGyIaG5Mz5xfP8_SkDgfhX84CRmJUU4',
  authDomain: 'filmoteka-a6ea9.firebaseapp.com',
  databaseURL: 'https://filmoteka-a6ea9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-a6ea9',
  storageBucket: 'filmoteka-a6ea9.appspot.com',
  messagingSenderId: '824201120756',
  appId: '1:824201120756:web:f8f623736e98ae62edc7a1',
  measurementId: 'G-THM4WVYQNH',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
  app,
  analytics,
};
