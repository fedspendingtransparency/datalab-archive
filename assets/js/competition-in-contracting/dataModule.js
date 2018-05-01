---
---

window.dataModule = (() => {
    const mem = {};

    function loadCicData(cb) {
        d3.json("/data-lab-data/cicData.json", (error, data) => {
            if (error) throw error;
            mem.cicData = data;
            cb(data);
        });
    }

    return {
        loadCicData,
        mem
    };
})();
