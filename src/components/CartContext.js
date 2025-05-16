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

    const increaseQty = (title) => {
        setCartItems((prevItems) => {
            const updatedItems = [];

            for (const item of prevItems) {
                if (item.title === title) {
                    updatedItems.push({ ...item, qty: item.qty + 1 });
                } else {
                    updatedItems.push(item);
                }
            }

            return updatedItems;
        });
    };

    const decreaseQty = (title) => {
        setCartItems((prevItems) => {
            const updatedItems = [];

            for (const item of prevItems) {
                if (item.title === title) {
                    if (item.qty > 1) {
                        updatedItems.push({ ...item, qty: item.qty - 1 });
                    }
                } else {
                    updatedItems.push(item);
                }
            }

            return updatedItems;
        });
    };


    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQty,
            decreaseQty
        }}>
            {children}
        </CartContext.Provider>
    );
}
