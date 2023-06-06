import React from 'react';
import './css/style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainContent } from '../MainContent';

// Приложение
function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
