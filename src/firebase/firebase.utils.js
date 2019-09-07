import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
        apiKey: "AIzaSyAMJzx5sPRasBdbCEpBmTqG6YA-umhD0JE",
        authDomain: "fir-starter-d1464.firebaseapp.com",
        databaseURL: "https://fir-starter-d1464.firebaseio.com",
        projectId: "fir-starter-d1464",
        storageBucket: "",
        messagingSenderId: "735343913284",
        appId: "1:735343913284:web:f674e9c57d83dae3a38f11"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase