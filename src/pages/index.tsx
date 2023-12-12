import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
      <Header />
      <main className="flex-1 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Next.js!!!</h1>
        <p className="text-base text-gray-600">This is a simple home page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
