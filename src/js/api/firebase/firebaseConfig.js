import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FIREBASE_CONFIG } from '../../constants/envConsts';

export const firebaseConfig = JSON.parse(FIREBASE_CONFIG);

export const db = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth();
// console.log(auth);
