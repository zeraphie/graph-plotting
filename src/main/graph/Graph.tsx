import { useEffect, useMemo, useRef, useState } from "react";
import Plotly from 'plotly.js-dist'
import { Data, DataLabels } from "../data/types";
import { DataOptions, transformCSVToPlotly } from "../data/transformCSVToPlotly";

export function Graph({ data, options }: { data: Data, options: DataOptions}){
    const graphRef = useRef<HTMLHeadingElement>(null);

    const computedData = useMemo(() => transformCSVToPlotly({data, options}), [data, options]);

    useEffect(() => {
        Plotly.newPlot(graphRef.current, [computedData], {
            width: 1000,
            height: 500,
            yaxis: { title: DataLabels[options.yAxis] }
        });
    }, [ computedData ]);

    return (
        <div ref={graphRef}>

        </div>
    );
}