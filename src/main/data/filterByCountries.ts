import { alphabet } from "./alphabet";
import { Data } from "./types";

export function filterByCountries(data: Data, filterCountries: string){
    // Get the start and ending place of a character in the alphabet
    // for easier comparison
    const start = alphabet.indexOf(filterCountries[0] || 'a') || 0;
    const end = alphabet.indexOf(filterCountries[1] || 'z') || 25;

    return data.filter(item => {
        // get the position in the alphabet of the first letter of the country
        const pos = alphabet.indexOf(item["country"].toLowerCase().charAt(0));

        // If it isn't a letter, exclude it
        if(isNaN(pos)){
            return false;
        }

        // return countries that are only within the range given
        return pos >= start && pos <= end;
    });
}
