// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import '../styles/LoginPage.css';


// LoginPage component

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home'); // Navigate to the home page on successful login
        } catch (error) {
            console.error("Login error:", error.message); // Log the error message from Firebase
            // You can also set an error state and display it to the user
        }
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/home');
            }).catch((error) => {
                console.error(error);
            });
    };

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/home');
            }).catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="login-page">
            <img src={`${process.env.PUBLIC_URL}/logo(1).png`} alt="Logo" />
            <h2>Hello again</h2>
            <p>Sign in below.</p>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Let's go</button>
            </form>
            <button onClick={signInWithGoogle} className="login-button google">Sign in with Google</button>
            <button onClick={signInWithFacebook} className="login-button facebook">Sign in with Facebook</button>
            <p className="register-link">
                Forgot your password?
            </p>
        </div>
    );
};

export default LoginPage;