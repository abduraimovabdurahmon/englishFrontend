import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://englishbackend-ggc0.onrender.com/api/home');
        const data = await response.json();
        setApi(data);
        setLoading(false); 
      } catch (error) {
        console.error('Xatolik:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingBox">
          <div className="loading"></div>
        </div>
      ) : (
        <>
          <Header route = "home"/>
          <Sidebar api={api} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
