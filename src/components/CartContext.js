import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((items) => {
            const exists = items.find(item => item.title === product.title);

            if (exists) {
                const result = [];
                for (const item of items) {
                    if (item.title === product.title) {
                        result.push({ ...item, qty: item.qty + 1 });
                    } else {
                        result.push(item);
                    }
                }
                return result;
            } else {
                return [...items, { ...product, qty: 1 }];
            }
        });
    };

    const removeFromCart = (title) => {
        setCartItems((items) => items.filter(item => item.title !== title));
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}
