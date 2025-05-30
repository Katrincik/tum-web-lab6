import React from 'react';
import { useCart } from '../components/CartContext';

function CartPanel({ visible, onClose }) {
    const { cartItems, removeFromCart, increaseQty, decreaseQty} = useCart();

    return (
        <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-black dark:text-white shadow-lg p-5 z-[1001] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={onClose} className="text-right block w-full mb-4 text-xl font-bold">×</button>
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item, idx) => (
                    <div key={idx} className="mb-4 border-b pb-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-800 dark:text-white font-bold">{item.price}</p>

                        <div className="flex items-center gap-2 mt-2">
                            <button
                                onClick={() => decreaseQty(item.title)}
                                className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded dark:bg-black dark:text-white dark:hover:bg-gray-800"
                            >
                                −
                            </button>
                            <span className="text-sm">{item.qty}</span>
                            <button
                                onClick={() => increaseQty(item.title)}
                                className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded dark:bg-black dark:text-white dark:hover:bg-gray-800"
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={() => removeFromCart(item.title)}
                            className="mt-2 text-red-600 text-xs underline hover:text-red-800"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default CartPanel;
