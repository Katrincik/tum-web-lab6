import React from 'react';

function HeroSection() {
    return (
        <section
            id="home"
            className="relative w-full h-screen flex items-center justify-start bg-cover bg-center transition-all duration-500 pt-32"
            style={{ backgroundImage: "url('/images/SerumFoundation.webp')" }}
        >
            <div className="w-[22%] ml-[100px] mb-[150px] text-black px-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Glow Naturally with Our Skincare
                </h1>
                <p className="text-md md:text-lg mt-4">
                    A light, buildable base that delivers a real-skin finish, it's makeup the way makeup should be.
                    Available for all true-to-your skin shades that blend seamless alongside your regimen.
                </p>
                <button
                    className="mt-6 px-6 md:px-10 py-2 md:py-3 text-md md:text-lg font-medium text-black bg-white bg-opacity-10 border border-black rounded-full transition duration-300 hover:bg-black hover:text-white hover:border-2 hover:border-black"
                    onClick={() =>
                        window.location.href =
                            "https://theordinary.com/en-us/multi-active-delivery-essence-100706.html"
                    }
                >
                    Buy now
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
