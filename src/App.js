import React from 'react';
import './App.scss';

import About from './Components/About/Index';
import Features from './Components/Features/Index';
import Hero from './Components/Hero/Index';
import HowTo from './Components/HowTo/Index';
import DownloadApp from './Components/DownloadApp/Index';
import Footer from './Components/Footer/Index';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Features />
      <HowTo />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
