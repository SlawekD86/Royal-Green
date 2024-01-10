import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="static" style={{ background: '#333' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Royal Green
                </Typography>
                <Button color="inherit" onClick={() => scrollToSection('home')}>
                    Home
                </Button>
                <Button color="inherit" onClick={() => scrollToSection('about')}>
                    O nas
                </Button>
                <Button color="inherit" onClick={() => scrollToSection('oferta')}>
                    Oferta
                </Button>
                <Button color="inherit" onClick={() => scrollToSection('contact')}>
                    Kontakt
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

