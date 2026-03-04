import React from 'react';
import useCheckout from '../hooks/useCheckout';

const CheckoutForm: React.FC = () => {
    const { error, processing, isSuccessful, handleCheckout } = useCheckout();

    return (
        <div role="form" aria-label="Checkout Form">
            {error && <div role="alert" aria-live="assertive">{error}</div>}
            {isSuccessful ? (
                <div role="status" aria-live="polite">Checkout successful!</div>
            ) : (
                <button 
                    onClick={handleCheckout}
                    disabled={processing}
                    aria-busy={processing.toString()}
                >
                    {processing ? 'Processing...' : 'Checkout'}
                </button>
            )}
        </div>
    );
}

export default CheckoutForm;