import React from 'react';
import { auth } from '../firebase';
import firebase from "firebase/compat/app"
//gif
import google from '../assets/google.svg';

//styles
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerCard}>
                <h2>Welcome to Hamedgram</h2>
                <div 
                className={styles.containerButton}
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider() )}
                >
                    <img src={google} alt="logo" /> Sign up with google
                </div>
            </div>
        </div>
    );
};

export default Login;