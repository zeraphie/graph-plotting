import { Data, DataColumns } from "./types";

export function dataSortOnKey(data: Data, key: DataColumns){
    return data.sort((a, b) => {
        const ax = a[key].toUpperCase();
        const bx = b[key].toUpperCase();
      
        return ax.localeCompare(bx);
    });
}
