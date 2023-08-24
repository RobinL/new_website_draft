import React from 'react';
import profilePic from '../images/headshot.png';

const AboutMe = () => {
    return (
        <div className="">
            <div className="w-40 h-40 mx-auto mb-5 rounded-full border border-gray-300 overflow-hidden">
                <img
                    src={profilePic}
                    alt="Robin"
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <p className="text-lg text-gray-600">
                    Hi! I'm Robin. I'm a data scientist, and the lead author of{' '}
                    <a
                        href="https://github.com/moj-analytical-services/splink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Splink
                    </a>
                    .
                </p>

                <p className="text-base text-gray-600 mb-4">
                    You can contact me here:
                </p>
                <p className="text-base text-gray-600">
                    Twitter:{' '}
                    <a
                        href="https://twitter.com/robinlinacre"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @robinlinacre
                    </a>
                    <br />
                    LinkedIn:{' '}
                    <a
                        href="https://www.linkedin.com/in/robinlinacre"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        robinlinacre
                    </a>
                    <br />
                    Email:{' '}
                    <a href="mailto:robinlinacre@hotmail.com">
                        robinlinacre@hotmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
