
const firebaseConfig = {
    apiKey: "AIzaSyAX2bYwaZsNYc9VKG9kimBCoQboAmmWGk8",
    authDomain: "frontendeirosss.firebaseapp.com",
    projectId: "frontendeirosss",
    storageBucket: "frontendeirosss.appspot.com",
    messagingSenderId: "1057465817692",
    appId: "1:1057465817692:web:ec56a5970171db78416499",
    measurementId: "G-PGNCJRE2ER"
};

// Incializa o Firebase
firebase.initializeApp(firebaseConfig);

// Incializa o Firebase Authentication
const auth = firebase.auth();

// Define o provedor de autenticação
var provider = new firebase.auth.GoogleAuthProvider();