import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@robinl/my-flights";

function MyFlights() {
    const blurbRef = useRef();
    const chartRef = useRef();

    useEffect(() => {
        const runtime = new Runtime();
        runtime.module(notebook, name => {
            if (name === "blurb") return new Inspector(blurbRef.current);
            if (name === "chart") return new Inspector(chartRef.current);
        });
        return () => runtime.dispose();
    }, []);

    return (
        <>
            <div ref={blurbRef} />
            <div ref={chartRef} />
            <p>Credit: <a href="https://observablehq.com/@robinl/my-flights">10 years of flights by Robin Linacre</a></p>
        </>
    );
}

export default MyFlights;