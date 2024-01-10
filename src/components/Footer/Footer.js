import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px 0' }}>
            <p>&copy; {new Date().getFullYear()} Nazwa Firmy. Wszelkie prawa zastrzeżone.</p>
        </footer>
    );
};

export default Footer;
