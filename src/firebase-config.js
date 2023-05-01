import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDiWms_VX0bNNq1YQrx0Gj2DiPx3-5ACKw",
  authDomain: "main-shoppingcart.firebaseapp.com",
  projectId: "main-shoppingcart",
  storageBucket: "main-shoppingcart.appspot.com",
  messagingSenderId: "644829418163",
  appId: "1:644829418163:web:bbf9a91a9c14c5c10816c6",
  measurementId: "G-K0YSFJ12PC"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)