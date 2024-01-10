// Importowanie potrzebnych bibliotek i komponentów
import React from 'react';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';

// Główny komponent aplikacji
const App = () => {
  return (
    <div className="App">
      <Header />
      <Logo />
      <AboutUs />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
