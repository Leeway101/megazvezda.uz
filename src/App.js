import React, { useState } from 'react';
import Navbar from './layout/Navbar';
import Main from './Main';
import Footer from './layout/Footer';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("uz");

  const handleSelectLanguage = (code) => {
    setSelectedLanguage(code);
  };

  return (
    <div className="App">
    <Navbar 
      selectedLanguage={selectedLanguage} 
      handleSelectLanguage={handleSelectLanguage} 
    />
    <Main selectedLanguage={selectedLanguage} />
    <Footer selectedLanguage={selectedLanguage} />
  </div>
  );
}

export default App;
