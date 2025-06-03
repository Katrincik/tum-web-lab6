import React from 'react';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import Footer from "./components/Footer";
import AuthPage from './components/AuthPage';
import { useAuth } from './components/AuthContext';


function App() {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                <AuthPage />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 p-4">
            <Header />
            <NavBar />
            {user.role === 'admin' ? (
                <main className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Welcome, Admin</h2>
                    <p className="text-gray-600">This is your admin panel. You can implement user management, product updates, etc.</p>
                </main>
            ) : (
                <>
                    <Hero />
                    <Bestsellers />
                </>
            )}
            <Footer />
        </div>
    );
}

export default App;
