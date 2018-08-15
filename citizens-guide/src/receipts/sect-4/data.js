export function prepareData(_data){
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