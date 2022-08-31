import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  const [urlLink, setUrlLink] = useState("");
  const [loading, setLoading] = useState(false);

  const apiShort = "https://api.shrtco.de/v2/shorten?url=";

  const postApi = async () => {
    const sendUrl = await axios.post(`https://api.shrtco.de/v2/shorten?url=${urlLink}`);
    if(sendUrl) {
      setLoading(!loading);
    }
  };

  useEffect(() => {
    postApi()
  }, [urlLink])

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
