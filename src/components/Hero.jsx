import React from 'react';

const Hero = () => (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Welcome to Little Place!</h1>
        <p>Your cozy corner on the web.</p>
        <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Cozy place"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', marginTop: '1rem' }}
        />
    </section>
);

export default Hero;