import { getApps, initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB8VLAB4tmvc0FASmiH8IiIZYhd3m896U",
  authDomain: "homeclicq.firebaseapp.com",
  projectId: "homeclicq",
  storageBucket: "homeclicq.appspot.com",
  messagingSenderId: "216204011541",
  appId: "1:216204011541:web:44a7b6aa18bf0d1d31061c",
  measurementId: "G-VGFP2LGNMF"
};
let firebaseApp;

if (!getApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
}
const fireStore = getFirestore(firebaseApp as FirebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
export { fireStore, storage, auth };
