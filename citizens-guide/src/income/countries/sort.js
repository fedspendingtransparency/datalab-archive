function createSort(sortField, sortDirection){
    if(sortDirection === 'asc'){
        return function(a,b){
            return a[sortField] - b[sortField];
        }
    }
    return function(a,b){
        return b[sortField] - a[sortField]
    }
}

export function sort(sortBy) {

}