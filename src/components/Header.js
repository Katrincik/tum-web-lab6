import React, {useState} from 'react';
import CartPanel from './CartPanel';
import { useAuth } from '../components/AuthContext';

function Header() {
    const [showCart, setShowCart] = useState(false);
    const { user, logout } = useAuth();

    return (
        <>
        <header className="h-10 bg-black fixed top-0 left-0 w-full z-[1000] flex justify-center items-center">
            <p className="text-white text-[11px] font-medium uppercase tracking-[2px] text-center">
                Does your skin need something refreshing?
            </p>
            <div className="absolute right-[60px] flex space-x-[25px]">
                <button id="first" className="icon-button p-[5px] transition-transform duration-200 hover:scale-110">
                    <img
                        src="images/FontAwesome-Magnifying-Glass-icon.png"
                        alt="Search"
                        className="invert w-[20px] h-[20px]"
                    />
                </button>
                <button className="icon-button p-[5px] transition-transform duration-200 hover:scale-110">
                    <img
                        src="images/abstract-user-flat-4.png"
                        alt="User"
                        className="w-[24px] h-[24px]"
                    />
                </button>
                <button onClick={() => setShowCart(true)} className="icon-button p-[5px] transition-transform duration-200 hover:scale-110">
                    <img
                        src="images/shopping-cart-white-icon.png"
                        alt="Cart"
                        className="w-[24px] h-[24px]"
                    />
                </button>

                {user && (
                    <button
                        onClick={logout}
                        className="bg-red-600 text-white px-2 py-1 text-xs rounded hover:bg-red-700"
                    >
                        Log Out
                    </button>
                )}
            </div>
        </header>
            <CartPanel visible={showCart} onClose={() => setShowCart(false)} />
        </>
    );
}

export default Header;
