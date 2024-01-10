import React from 'react';
import image1 from '../../assets/image1.jpeg';

const Logo = () => {
    return (
        <div style={{ width: '100%', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
                src={image1}
                alt="Logo"
                style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
            />
        </div>
    );
};

export default Logo;
