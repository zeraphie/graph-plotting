import { useEffect, useMemo, useRef, useState } from "react";
import Plotly, { BoxPlotData } from 'plotly.js-basic-dist-min'
import { Data, DataLabels } from "../data/types";
import { DataOptions, transformCSVToPlotly } from "../data/transformCSVToPlotly";

export function Graph({ data, options }: { data: Data, options: DataOptions}){
    const graphRef = useRef<HTMLHeadingElement>(null);

    const computedData = useMemo(() => transformCSVToPlotly({ data, options }), [data, options]);

    useEffect(() => {
        if(graphRef.current){
            Plotly.newPlot(graphRef.current, [computedData], {
                width: 1200,
                height: 700,
                yaxis: { title: DataLabels[options.yAxis] }
            });
        }
    }, [ computedData ]);

    return (
        <div ref={graphRef} />
    );
}
