import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { FIREBASE_CONFIG } from '../../constants/envConsts';

export const firebaseConfig = {
  apiKey: 'AIzaSyBJTGyIaG5Mz5xfP8_SkDgfhX84CRmJUU4',
  authDomain: 'filmoteka-a6ea9.firebaseapp.com',
  databaseURL:
    'https://filmoteka-a6ea9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-a6ea9',
  storageBucket: 'filmoteka-a6ea9.appspot.com',
  messagingSenderId: '824201120756',
  appId: '1:824201120756:web:f8f623736e98ae62edc7a1',
  measurementId: 'G-THM4WVYQNH',
};

export const db = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth();
// console.log(auth);
