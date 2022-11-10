import { filterByCountries } from "../main/data/filterByCountries";

test('Filter countries by a range of letters', () => {
    expect(filterByCountries([
        { country: 'Kenya' },
        { country: 'Canada' },
        { country: 'Mexico' },
        { country: 'Angola' },
        { country: 'Norway' },
        { country: 'Estonia' },
        { country: 'Portugal' },
        { country: 'Haiti' },
        { country: 'Panama' }
    ], 'af')).toStrictEqual([
        { country: 'Canada' },
        { country: 'Angola' },
        { country: 'Estonia' }
    ])
});