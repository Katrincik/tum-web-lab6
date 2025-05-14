import React from 'react';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-white text-gray-900 p-4">
            <Header />
            <NavBar />
            <Hero />
            <Bestsellers />
            <Footer />
        </div>
    );
}

export default App;
