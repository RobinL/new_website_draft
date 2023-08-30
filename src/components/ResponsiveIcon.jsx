import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const ResponsiveLink = ({ text, IconComponent, route }) => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Link
                to={route}
                className="text-gray-600 hover:text-blue-700 transition ease-in duration-200"
            >
                {windowWidth > 500 ? (
                    text
                ) : (
                    <IconComponent className="w-4.5 h-4.5" />
                )}
            </Link>
        </div>
    );
};

export default ResponsiveLink;
