import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setuser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setuser(user)
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            });
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setuser(user)
        })
    }, [])
    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
}
export default useFirebase;