import React from 'react';
import ThemeButton from './ThemeButton';

function NavBar() {
    return (
        <nav className="fixed top-10 left-0 w-full z-[999] bg-[#e0dede] dark:bg-black h-[60px] flex justify-center items-center">
            <div className="h-[62px] bg-[#e0dede] dark:bg-black flex justify-center items-center">
                <ul className="flex gap-[20px] list-none p-0 m-0 group">
                    {[
                        { href: "#home", label: "Home" },
                        { href: "#bestsellers", label: "Bestsellers" },
                        { href: "#skincare", label: "Skincare" },
                        { href: "#bodyHair", label: "Body+Hair" },
                        { href: "#contacts", label: "Contacts" },
                    ].map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="text-black dark:text-white font-bold text-[16px] cursor-pointer px-[15px] py-[10px] pb-[17px] transition-colors duration-200 group-hover:opacity-50 hover:!opacity-100 hover:bg-[#d0cece]"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="absolute right-4">
                    <ThemeButton />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
