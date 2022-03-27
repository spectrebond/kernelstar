import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBJiZs5FuAMyBN9Pvd17QMVr0pbhA847LI",
  authDomain: "learningonline-65497.firebaseapp.com",
  projectId: "learningonline-65497",
  storageBucket: "learningonline-65497.appspot.com",
  messagingSenderId: "925413918501",
  appId: "1:925413918501:web:6bfc2e97f51810e67a7ccc",
  measurementId: "G-HVCEC5FN2N"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const storage = firebaseApp.storage();
  export {storage};
  