import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        //  const credentials = GoogleAuthProvider.credentialFromResult(result)
        //  console.log(credentials) 
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errosCode = error.code
        const errorMessage = error.message
        // The email of the user's account used
        const email = error.customData.email
        // The Authcredential type that was used
        const credentials = GoogleAuthProvider.credentialFromError(error)
        return {
            ok: false,
            errosCode, errorMessage, email, credentials

        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user
        //TODO: actualizar el usuario y el displayName en Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            OK: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        // console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {
    //! signInWithEmailAndPassword

    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        //  const credentials = GoogleAuthProvider.credentialFromResult(result)
        //  console.log(credentials) 
        const { displayName, photoURL, uid } = result.user

        return {
            ok: true,
            //User info
            displayName, photoURL, uid
        }

    } catch (error) {
        // console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}


export const logoutFirebase = async () =>{
    return await FirebaseAuth.signOut()
}