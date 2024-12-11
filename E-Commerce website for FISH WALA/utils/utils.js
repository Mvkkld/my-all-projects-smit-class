  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth,
  onAuthStateChanged, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getFirestore, 
    doc, 
    setDoc,
  getDoc,
  getDocs ,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import { getStorage,
    ref ,
    uploadBytes ,
    getDownloadURL 
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAu4yy3--7rG_3EbX6jF5nHwBZSu8M3bck",
    authDomain: "e-commerce-fish-wala.firebaseapp.com",
    projectId: "e-commerce-fish-wala",
    storageBucket: "e-commerce-fish-wala.appspot.com",
    messagingSenderId: "73614521194",
    appId: "1:73614521194:web:a68e252455e5deda3dab13",
    measurementId: "G-J2H73LZEPS"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const analytics = getAnalytics(app);

export{
 auth,
 db,
 storage,
 onAuthStateChanged,
 createUserWithEmailAndPassword, 
 signInWithEmailAndPassword ,
 doc,
 setDoc , 
 ref ,
 uploadBytes ,
 getDownloadURL,
 signOut,
 getDoc,
 collection,
 addDoc,
 getDocs ,
 updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,};