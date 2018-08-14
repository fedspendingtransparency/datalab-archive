export function prepareData(_data){
    console.log('data', _data);
    
    const data = {
            indexed: {},
            countryList: []
        }

    _data.forEach(r => {
        data.countryList.push(r.country);

        data.indexed[r.country] = r;
    });

    return data;
}