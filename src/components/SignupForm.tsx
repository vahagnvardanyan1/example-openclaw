import React, { useState } from 'react';

const SignupForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate signup process
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Mock async request
            setError(null);
            alert('Signup successful');
        } catch (error) {
            setError('Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSignup} aria-label="Signup form">
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            {error && <p role="alert">{error}</p>}
            <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
        </form>
    );
};

export default SignupForm;