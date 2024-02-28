import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import '../styles/WelcomePage.css';

// Welcome page component

const WelcomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home'); // Navigate to the home page on successful login
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };

  const handleLoginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home'); // Navigate to the home page on successful login
    } catch (error) {
      console.error("Facebook sign-in error:", error.message);
    }
  };

  return (
    <div className="welcome-page">
      <img src={`${process.env.PUBLIC_URL}/logo(1).png`} alt="Logo" />
      <h1>SentinelGuard</h1>
      <p className="tagline">A Guardian in Your Pocket</p>
      <Link to="/register" className="get-started-button">Get Started</Link>
      <div className="social-login">
        {/* Google and Facebook login buttons */}
        <button onClick={handleLoginWithGoogle} className="google-login-button">
          Login with Google
        </button>
        <button onClick={handleLoginWithFacebook} className="facebook-login-button">
          Login with Facebook
        </button>
      </div>
      <div className="sign-in-text">
        Already have an account? <Link to="/login" className="sign-in-link">Sign in</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
