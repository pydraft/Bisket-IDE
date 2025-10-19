import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;