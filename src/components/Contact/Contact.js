import React from 'react';
import logoInstagram from '../../assets/instagram.png';
import logoFacebook from '../../assets/fb.png';
import logoTwitter from '../../assets/twitter.png';

const Contact = () => {
    return (
        <section id='contact' style={{ display: 'flex', flexDirection: 'column', height: '340px', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                <h2>Kontakt</h2>
                <p>Nr telefonu: 123-456-789</p>
                <p>Adres e-mail: example@example.com</p>
                <p>Adres korespondencyjny: ul. Przykładowa 1, 00-000 Miasto</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logoInstagram} alt="Instagram" style={{ width: '40px', height: '40px', margin: '0 10px' }} />
                <img src={logoFacebook} alt="Facebook" style={{ width: '40px', height: '40px', margin: '0 10px' }} />
                <img src={logoTwitter} alt="Twitter" style={{ width: '40px', height: '40px', margin: '0 10px' }} />
            </div>
        </section>
    );
};

export default Contact;
