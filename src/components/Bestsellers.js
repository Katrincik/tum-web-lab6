import React from 'react';
import { useCart } from '../components/CartContext';

function Bestsellers() {

    const { addToCart } = useCart();

    const products = [
        {
            image: '/images/bs1.webp',
            title: 'Niacinamide 10% + Zinc 1%',
            description: 'Universal serum for blemish-prone skin that smooths, brightens, and supports',
            price: '6.00 USD',
        },
        {
            image: '/images/bs2.jpg',
            title: 'Hyaluronic Acid 2% + B5',
            description: 'Hyaluronic acid serum to hydrate, smooth and visibly reduce lines and wrinkles',
            price: '9.90 USD',
        },
        {
            image: '/images/bs3.jpg',
            title: 'Natural Moisturizing Factors + HA',
            description: 'Original surface hydrator to support skin barrier and keep it protected',
            price: '6.70 USD',
        },
        {
            image: '/images/bs4.jpg',
            title: 'Glycolic Acid 7% Exfoliating Toner',
            description: 'Glycolic acid toner that smooths skin texture, evens tone, and enhances luminosity',
            price: '8.70 USD',
        },
    ];

    return (
        <>
            <hr className="border border-gray-400 dark:border-black w-[90%] mx-auto" />
            <section id="bestsellers" className="w-[90%] mx-[100px] text-center py-5">
                <h2 className="text-left text-[32px] text-black/80 dark:text-white font-semibold">Bestsellers</h2>
                <div className="flex flex-wrap justify-center gap-10 py-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-lg shadow-md w-[300px] text-center flex flex-col justify-between"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full max-h-[310px] my-2 object-contain"
                            />
                            <h3 className="text-lg font-semibold my-2">{product.title}</h3>
                            <div className="text-left flex-1">
                                <p className="mt-2 text-sm">{product.description}</p>
                                <hr className="border border-gray-400 dark:border-black w-full mt-2" />
                                <div className="flex justify-between items-center mt-2">
                                    <p className="font-bold text-[16px]">{product.price}</p>
                                </div>
                            </div>
                            <button   onClick={() => addToCart(product)}
                                      className="mt-4 w-full h-[45px] border border-gray-500 dark:border-white dark:bg-black rounded-md font-medium text-sm transition duration-300 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black dark:hover:border-gray-500">
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Bestsellers;
