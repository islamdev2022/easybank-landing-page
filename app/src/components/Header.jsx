import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-10 bg-white">
            <div className="flex justify-between items-center px-10 py-0">
                <div className="flex gap-4 md:gap-64">
                    <img src="./public/images/Screenshot 2024-02-14 141349.png" alt="" width="250" height="300"/>
                    <div className="hidden md:flex gap-12 items-center">
                        <ul className="flex text-gray-400 cursor-pointer font-semibold gap-12 items-center">
                            <li className="menu-item">Home</li>
                            <li className="menu-item">About</li>
                            <li className="menu-item">Contact</li>
                            <li className="menu-item">Blog</li>
                            <li className="menu-item">Careers</li>
                        </ul>
                    </div>
                    <button className="md:hidden text-gray-400 font-semibold " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        Menu
                    </button>
                </div>
                <button className="hidden md:block bg-gradient-to-r from-hsl-button to-hsl-button-to text-white font-bold py-2 px-4 rounded-full hover:opacity-85">
    Request Invite
</button>

            </div>
            {isMenuOpen && (
                <div className="absolute top-full right-0 bg-white shadow-md p-5 md:hidden">
                    <ul className="flex flex-col text-gray-400 cursor-pointer font-semibold gap-4">
                        <li className="menu-item">Home</li>
                        <li className="menu-item">About</li>
                        <li className="menu-item">Contact</li>
                        <li className="menu-item">Blog</li>
                        <li className="menu-item">Careers</li>
                    </ul>

                </div>
                
            )}
        </div>
    );
};

export default Header;
