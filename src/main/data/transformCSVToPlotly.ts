import { alphabetSortOnKey } from "./alphabetSortOnKey";
import { filterByCountries } from "./filterByCountries";
import { Data, DataLabels } from "./types";

export type DataOptions = {
    xAxis: string,
    yAxis: string,
    filterCountries: string,
    showAnnualSalary: boolean,
    showCreditCardDebt: boolean
};

export function transformCSVToPlotly({ data, options }: { data: Data, options: DataOptions}) {
    let filteredData = data;

    if(options.filterCountries){
        filteredData = filterByCountries(filteredData, options.filterCountries);
    }

    let sortedData = alphabetSortOnKey(filteredData, options.xAxis);

    return {
        type: 'scatter',
        mode: 'markers',
        x: sortedData.map(item => item[options.xAxis]),
        y: sortedData.map(item => item[options.yAxis]),
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
