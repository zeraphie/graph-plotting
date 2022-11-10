import { alphabet } from "./alphabet";
import { Data } from "./types";

export function filterByCountries(data: Data, filterCountries: string){
    const start = alphabet.indexOf(filterCountries[0] || 'a') || 0;
    const end = alphabet.indexOf(filterCountries[1] || 'z') || 25;

    return data.filter(item => {
        const pos = alphabet.indexOf(item["country"].toLowerCase().charAt(0));

        if(isNaN(pos)){
            return false;
        }

        return pos >= start && pos <= end;
    });
}
