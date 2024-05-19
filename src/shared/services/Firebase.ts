import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgmrF7wBsDponpBVt752-FUiOeb1zpzbc",
  authDomain: "superfrete-web-challenge.firebaseapp.com",
  projectId: "superfrete-web-challenge",
  storageBucket: "superfrete-web-challenge.appspot.com",
  messagingSenderId: "922087138044",
  appId: "1:922087138044:web:f8d192b6449c154dc86d79"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
