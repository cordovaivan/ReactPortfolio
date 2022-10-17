import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/card';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
