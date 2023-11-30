
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
export {basededatos};


const firebaseConfig = {
  apiKey: "AIzaSyCpnfIc-RX0TljBbZGT88uijOYH20u6oa8",
  authDomain: "robotica-metro.firebaseapp.com",
  databaseURL: "https://robotica-metro-default-rtdb.firebaseio.com",
  projectId: "robotica-metro",
  storageBucket: "robotica-metro.appspot.com",
  messagingSenderId: "266508477384",
  appId: "1:266508477384:web:6666cc3511e537a33816fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const basededatos = getDatabase(app);

