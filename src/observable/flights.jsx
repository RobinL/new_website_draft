import React, { useRef, useEffect } from 'react';
import { Runtime, Inspector, Library } from '@observablehq/runtime';
import notebook from '@robinl/my-flights';

const mountId = 'mdx-container-div';

const stdlib = new Library();

const library = Object.assign({}, stdlib, { width });

function width() {
    return stdlib.Generators.observe(notify => {
        let width = notify(document.getElementById(mountId).clientWidth);
        function resized() {
            let width1 = document.getElementById(mountId).clientWidth;
            if (width1 !== width) notify((width = width1));
        }

        window.addEventListener('resize', resized);
        return () => window.removeEventListener('resize', resized);
    });
}

function MyFlights() {
    const blurbRef = useRef();
    const chartRef = useRef();

    useEffect(() => {
        const runtime = new Runtime(library);
        runtime.module(notebook, name => {
            if (name === 'blurb') return new Inspector(blurbRef.current);
            if (name === 'chart') return new Inspector(chartRef.current);
        });
        return () => runtime.dispose();
    }, []);

    return (
        <>
            <div ref={blurbRef} />
            <div ref={chartRef} />
        </>
    );
}

export default MyFlights;
