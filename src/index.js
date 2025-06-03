import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { CartProvider } from './components/CartContext';
import { ThemeProvider } from './components/ThemeContext';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <CartProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </CartProvider>
        </AuthProvider>
    </BrowserRouter>
);