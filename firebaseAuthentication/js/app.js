  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBU4uqd3xGxdkHCiCPcoEB237uXMUX8Bb8",
    authDomain: "my-first-project-b427d.firebaseapp.com",
    projectId: "my-first-project-b427d",
    storageBucket: "my-first-project-b427d.appspot.com",
    messagingSenderId: "488446940561",
    appId: "1:488446940561:web:34e63ce0dca68767a37630",
    measurementId: "G-98XMQR498R"
  };

const password = document.getElementById('password_signup');
const email = document.getElementById('email_signup');
const signupBtn = document.getElementById('signup_btn');

const password_login = document.getElementById('password_login');
const email_login = document.getElementById('email_login');
const login_Btn = document.getElementById('login_btn');

signupBtn.addEventListener('click', createUserAccount);


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

login_Btn.addEventListener('click', loginUserAccount);


  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is logged in');
      const uid = user.uid;
          } else {
        console.log('User is not logged in');
    }
  });

function createUserAccount() {
    if(password_login=="" || email_login==""){
        alert("pleace efisjiji")

    }
    createUserWithEmailAndPassword(auth,email_login.value, password_login.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
    //   console.log(user,password);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
// alert('error in name or password')
      // ..
    });
}

function loginUserAccount(e) {
    e.preventDefault()
console.log(email_login.value);    
console.log(password_login.value);    

}


