import React from 'react';
import CardsTW from '../components/Cards/CardsTW';
import Footer from '../components/Footer/Footer';
import HeroSectionTW from '../components/HeroSection/HeroSectionTw';
import NavBarTW from '../components/NavBar/NavbarTW';

function HomeTW() {
  return (
    <>
      <NavBarTW />
      <HeroSectionTW/>
      <CardsTW />
      <Footer/>
    </>
  );
}

export default HomeTW;
