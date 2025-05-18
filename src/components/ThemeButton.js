import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function ThemeButton() {
    const { theme, chooseTheme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    return (
        <button
            onClick={chooseTheme}
            className={`relative flex items-center w-[120px] h-[40px] rounded-full transition-colors duration-300 overflow-hidden
                        ${isDark ? 'bg-black' : 'bg-gray-200'}`}
        >
            <div
                className={`absolute top-1 left-1 h-8 w-8 rounded-full bg-white shadow-md transition-all duration-300 z-0
                            ${isDark ? 'translate-x-[80px]' : 'translate-x-0'}`}
            ></div>

            {isDark && (
                <div className="flex items-center gap-1 text-white z-10 pl-3">
                    <MoonIcon className="w-5 h-5" />
                    <span>Night</span>
                </div>
            )}

            {!isDark && (
                <div className="flex items-center gap-1 text-black font-semibold z-10 ml-auto pr-3">
                    <span>Day</span>
                    <SunIcon className="w-5 h-5 text-yellow-500" />
                </div>
            )}
        </button>
    );
}

export default ThemeButton;
