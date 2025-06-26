
const firebaseConfig = {
  apiKey: "AIzaSyDMZe2UpzMjaXCr2Jbr9OhofcWGO83z_hI",
  authDomain: "reasync.firebaseapp.com",
  projectId: "reasync",
  storageBucket: "reasync.firebasestorage.app",
  messagingSenderId: "892894738668",
  appId: "1:892894738668:web:826f882bd0ab8fe0060dc9",
  measurementId: "G-KGDDN74GZ5"
};
firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
