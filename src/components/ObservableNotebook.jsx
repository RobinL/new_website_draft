import React, { useRef, useEffect } from 'react';
import { Runtime, Inspector, Library } from '@observablehq/runtime';

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

function ObservableNotebook({ notebook, cells }) {
    const refs = useRef(cells.map(() => React.createRef()));

    useEffect(() => {
        const runtime = new Runtime(library);
        runtime.module(notebook, name => {
            const index = cells.indexOf(name);
            if (index !== -1) {
                return new Inspector(refs.current[index].current);
            }
        });
        return () => runtime.dispose();
    }, [notebook, cells]);

    return (
        <>
            {refs.current.map((ref, index) => (
                <div key={index} ref={ref} />
            ))}
        </>
    );
}

export default ObservableNotebook;
