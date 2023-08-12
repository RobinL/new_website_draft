import React from 'react';

const Footer = () => {
    return (
        <div>
            <hr className="border-gray-300" />
            <footer className="mt-4">
                <p className="text-base text-gray-700">
                    <a href="/">Back to homepage.</a>
                </p>
                <p className="text-base text-gray-700">
                    This site is built using{' '}
                    <a href="https://observablehq.com">Observable HQ</a> and{' '}
                    <a href="https://gatsbyjs.org">Gatsby.js</a>. Source code{' '}
                    <a href="https://github.com/robinl/robinlinacre">here</a>.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
