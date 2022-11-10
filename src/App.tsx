import { useForm } from 'react-hook-form'
import './App.css'
import data from './assets/data.csv'
import { DataLabels } from './main/data/types'
import { Graph } from './main/graph/Graph'

function App() {
    const { register, watch, setValue } = useForm();

    const xAxis = 'country';
    const yAxis = 'annual Salary';
    const countryFilters = [
        {
            label: 'A to F', value: 'af'
        },
        {
            label: 'G to L', value: 'gl'
        },
        {
            label: 'M to P', value: 'mp'
        },
        {
            label: 'Q to Z', value: 'qz'
        }
    ];

    const filterCountries = watch('filterCountries');
    const showAnnualSalary = watch('showAnnualSalary');
    const showCreditCardDebt = watch('showCreditCardDebt');

    return (
        <div className="App">
            <div className="country-filter-wrapper">
                {countryFilters.map((filter, index) => (
                    <div className="input-wrapper" key={`${filter.value}-${index}-input-wrapper`}>
                        <input type="radio" id={filter.value} value={filter.value}  key={`${filter.value}-${index}-input`} {...register('filterCountries')} />
                        <label htmlFor={filter.value} key={`${filter.value}-${index}-label`}>
                            {filter.label}
                        </label>
                    </div>
                ))}
                <input type="button" value="Clear Country Filter" onClick={e => {
                    e.preventDefault();
                    setValue('filterCountries', '');
                }} />
            </div>

            <div className="label-filter-wrapper">
                <div className="input-wrapper">
                    <input type="checkbox" id="showAnnualSalary" {...register('showAnnualSalary')} />
                    <label htmlFor="showAnnualSalary">
                        Show {DataLabels["annual Salary"]}
                    </label>
                </div>
                <div className="input-wrapper">
                    <input type="checkbox" id="showCreditCardDebt" {...register('showCreditCardDebt')} />
                    <label htmlFor="showCreditCardDebt">
                        Show {DataLabels["credit card debt"]}
                    </label>
                </div>
            </div>

            <Graph data={data} options={{
                xAxis, yAxis, filterCountries, showAnnualSalary, showCreditCardDebt
            }} />
        </div>
    )
}

export default App
