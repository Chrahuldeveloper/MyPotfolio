import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.Firebase_api_key,
  authDomain: process.env.Firebase_api_Domain,
  projectId: process.env.Firebase_Project_id,
  storageBucket: process.env.Firebase_Storage_Bucket,
  messagingSenderId: process.env.Firebase_Messaging_Sender_Id,
  appId: process.env.Firebase_App_Id,
  measurementId: process.env.Firebase_Measurement_Id,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
