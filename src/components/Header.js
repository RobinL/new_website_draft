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
                    <Link to="/about" className="text-base font-normal text-gray-600 hover:text-gray-700 transition ease-in duration-200">About</Link>
                    <Link to="/blog" className="text-base font-normal text-gray-600 hover:text-gray-700 transition ease-in duration-200">Blog</Link>
                    <FaTwitter className="w-4.5 h-4.5" />
                    <FaGithub className="w-4.5 h-4.5" />
                    <FaLinkedin className="w-4.5 h-4.5" />
                    <FaHome className="w-4.5 h-4.5" />
                </div>
            </div>
            <hr className="border-gray-300 mb-6" />
        </div>
    );
};

export default Header;
