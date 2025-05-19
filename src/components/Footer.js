import React from 'react';

function Footer() {
    return (
        <footer id="contacts" className="bg-[#f9f9f9] dark:bg-black px-[60px] py-10 text-sm font-sans">
            <div className="max-w-[1100px] mx-auto">
                <div className="flex flex-wrap gap-6 dark:text-white">
                    <div className="flex-1 min-w-[150px] max-w-[180px]">
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Join Us</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[150px]">
                        <h3 className="text-lg font-bold mb-4">Our Commitments</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Accessibility</a></li>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Sustainability</a></li>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Change is the Journey</a></li>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Everything Is Chemicals</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[150px]">
                        <h3 className="text-lg font-bold mb-4">Customer Care</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">FAQ</a></li>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Disposal Instructions</a></li>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Return Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-[#333] dark:text-[#666] hover:underline">Promotion Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[150px] max-w-[180px]">
                        <h3 className="text-lg font-bold mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </h3>
                        <h3 className="text-lg font-bold mb-4">
                            <a href="#" className="hover:underline">Track Order</a>
                        </h3>
                        <h3 className="text-lg font-bold mb-4">
                            <a href="#" className="hover:underline">Sign In</a>
                        </h3>
                    </div>

                    <div className="flex-[1.8] min-w-[250px]">
                        <h3 className="text-lg font-bold mb-2">Be in the know.</h3>
                        <p className="text-[13px] text-[#666] mb-3">
                            Subscribe to receive science-backed tips, access to special offers, and new innovations.
                        </p>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-[300px] bg-white">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 px-3 py-2 text-[14px] outline-none border-none"
                            />
                            <button className="px-4 py-2 text-black text-lg cursor-pointer">&#10140;</button>
                        </div>
                        <p className="text-[13px] text-[#666] mt-3">
                            *By providing your email address you are agreeing to receive marketing emails.
                            Please refer to our{" "}
                            <a href="#" className="text-[#222] underline">Privacy Policy</a> and{" "}
                            <a href="#" className="text-[#222] underline">Terms of Use</a>.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-300 gap-4">
                    <p className="text-xs text-[#666]">© 2025 Katrincik Company. All rights reserved.</p>
                    <ul className="flex gap-4 flex-wrap text-xs text-[#666]">
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Do not sell my personal information</a></li>
                        <li><a href="#" className="hover:underline">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
