import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyCVtI4VvKM9MuYDRJL7e47xORPruFVTkys",
    authDomain: "cooking-aide-site.firebaseapp.com",
    projectId: "cooking-aide-site",
    storageBucket: "cooking-aide-site.appspot.com",
    messagingSenderId: "100886927877",
    appId: "1:100886927877:web:1e3fc4c25e8a00ca0e1a6c"
  }

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()

export { projectFirestore }