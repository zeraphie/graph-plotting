import { alphabetSortOnKey } from "./alphabetSortOnKey";
import { filterByCountries } from "./filterByCountries";
import { Data, DataColumns, DataLabels } from "./types";

export type DataOptions = {
    xAxis: DataColumns,
    yAxis: DataColumns,
    filterCountries: string,
    showAnnualSalary: boolean,
    showCreditCardDebt: boolean
};

export function transformCSVToPlotly({ data, options }: { data: Data, options: DataOptions}) {
    let filteredData = data;

    // Filter by the range of countries first so sort is faster
    if(options.filterCountries){
        filteredData = filterByCountries(filteredData, options.filterCountries);
    }

    // Alphabetically sort by countries for more readability
    let sortedData = alphabetSortOnKey(filteredData, options.xAxis);
    console.log(sortedData);

    return {
        type: 'scatter',
        mode: 'markers',
        x: sortedData.map(item => item[options.xAxis]),
        y: sortedData.map(item => item[options.yAxis]),
        // Dynamically change the markers dependant on what should be shown in it
        text: sortedData.map(item => {
            let str = '';

            if(options.showAnnualSalary){
                str += DataLabels['annual Salary'] + ': ' + item['annual Salary'];
            }

            if(options.showAnnualSalary && options.showCreditCardDebt){
                str += '<br>';
            }

            if(options.showCreditCardDebt){
                str += DataLabels['credit card debt'] + ': ' + item['credit card debt'];
            }

            return str;
        })
    }
}
