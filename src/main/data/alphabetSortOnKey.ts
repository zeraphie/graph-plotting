import { Data, DataColumns } from "./types";

export function alphabetSortOnKey(data: Data, key: DataColumns){
    return data.sort((a, b) => {
        const ax = a[key].toUpperCase();
        const bx = b[key].toUpperCase();

        if (ax < bx) {
          return -1;
        }

        if (ax > bx) {
          return 1;
        }
      
        return 0;
    });
}
