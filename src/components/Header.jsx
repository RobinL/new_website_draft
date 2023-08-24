import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                    <div className="text-base font-mono font-semibold">
                        &gt;robinlinacre
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <Link
                        to="/about"
                        className="text-base font-normal text-gray-600 hover:text-gray-700 transition ease-in duration-200"
                    >
                        About
                    </Link>
                    <Link
                        to="/"
                        className="text-base font-normal text-gray-600 hover:text-gray-700 transition ease-in duration-200"
                    >
                        Home
                    </Link>

                    <a
                        href="https://twitter.com/robinlinacre"
                        className="text-gray-600 hover:text-gray-700 transition ease-in duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="w-4.5 h-4.5" />
                    </a>

                    <a
                        href="https://github.com/robinl"
                        className="text-gray-600 hover:text-gray-700 transition ease-in duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-4.5 h-4.5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/robinlinacre/"
                        className="text-gray-600 hover:text-gray-700 transition ease-in duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="w-4.5 h-4.5" />
                    </a>
                </div>
            </div>
            <hr className="border-gray-300 mb-6" />
        </div>
    );
};

export default Header;
