import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Welcome to Our Application</h1>
                <p>Your gateway to managing tasks with ease.</p>
            </header>
            <main>
                <section aria-labelledby="login-section">
                    <h2 id="login-section">Login</h2>
                    <LoginForm />
                </section>
                <section aria-labelledby="signup-section">
                    <h2 id="signup-section">Sign Up</h2>
                    <SignupForm />
                </section>
                <section aria-labelledby="password-recovery-section">
                    <h2 id="password-recovery-section">Recover Password</h2>
                    <PasswordRecoveryForm />
                </section>
            </main>
            <footer>
                <p>&copy; 2023 My Application</p>
            </footer>
        </div>
    );
};

export default LandingPage;