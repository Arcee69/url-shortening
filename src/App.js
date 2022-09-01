import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {

  return (
    <div className="overflow-x-hidden">
     <Navbar />
     <Content />
     <Statistics />
     <Boost />
     <Footer />
    </div>
  );
}

export default App;
