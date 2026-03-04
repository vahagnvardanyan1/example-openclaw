import React, { useState } from 'react';

const PasswordRecoveryForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleRecovery = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate password recovery process
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Mock async request
            setMessage('Recovery email sent');
        } catch (error) {
            setMessage('Recovery failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleRecovery} aria-label="Password recovery form">
            <div>
                <label htmlFor="recover-email">Email:</label>
                <input 
                    type="email" 
                    id="recover-email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            {message && <p role="alert">{message}</p>}
            <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Recovery Email'}</button>
        </form>
    );
};

export default PasswordRecoveryForm;