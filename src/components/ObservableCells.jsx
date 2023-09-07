import React, {
    useRef,
    useEffect,
    createContext,
    useContext,
    useState,
} from 'react';
import { Runtime, Inspector, Library } from '@observablehq/runtime';

const ObservableRuntimeContext = createContext(null);

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

export function ObservableProvider({ notebook, children }) {
    const [sharedRefs, setSharedRefs] = useState({});
    const runtime = new Runtime(Object.assign({}, new Library(), { width }));

    useEffect(() => {
        runtime.module(notebook, name => {
            if (sharedRefs[name]) {
                return new Inspector(sharedRefs[name]);
            }
        });
        return () => runtime.dispose();
    }, [runtime, sharedRefs, notebook]);

    return (
        <ObservableRuntimeContext.Provider value={{ setSharedRefs }}>
            {children}
        </ObservableRuntimeContext.Provider>
    );
}

export function ObservableCell({ cellName, styles }) {
    const ref = useRef(null);
    const { setSharedRefs } = useContext(ObservableRuntimeContext);

    useEffect(() => {
        setSharedRefs(prevRefs => ({ ...prevRefs, [cellName]: ref.current }));
    }, [cellName, setSharedRefs]);

    return <div ref={ref} style={styles} />;
}

export function WithObservableProvider({ notebook, children }) {
    return (
        <ObservableProvider notebook={notebook}>{children}</ObservableProvider>
    );
}
