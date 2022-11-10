import { Data, DataLabels } from "./types";

export type DataOptions = {
    xAxis: string,
    yAxis: string,
    filterCountries: string,
    showAnnualSalary: boolean,
    showCreditCardDebt: boolean
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function transformCSVToPlotly({ data, options }: { data: Data, options: DataOptions}) {
    let filteredData = data;

    if(options.filterCountries){
        const start = alphabet.indexOf(options.filterCountries[0] || 'a') || 0;
        const end = alphabet.indexOf(options.filterCountries[1] || 'z') || 25;

        filteredData = filteredData.filter(item => {
            const pos = alphabet.indexOf(item["country"].toLowerCase().charAt(0));

            if(isNaN(pos)){
                return false;
            }

            return pos >= start && pos <= end;
        });
    }

    let sortedData = filteredData.sort((a, b) => {
        const ax = a[options.xAxis].toUpperCase();
        const bx = b[options.xAxis].toUpperCase();

        if (ax < bx) {
          return -1;
        }

        if (ax > bx) {
          return 1;
        }
      
        return 0;
    });

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