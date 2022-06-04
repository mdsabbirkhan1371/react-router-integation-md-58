import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const handleSingWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <h3>Please Login!!</h3>
            <div style={{ margin: '10px' }}>
                <button onClick={handleSingWithGoogle}>Sign In With Google</button>
            </div>
            <form>
                <input type="email" placeholder=' your mail' />
                <br />
                <input type="password" placeholder='your password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;