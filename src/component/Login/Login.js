import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { googleSignIn } = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={googleSignIn} className='btn btn-warning' >Google SignIn</button>
        </div>
    );
};

export default Login;