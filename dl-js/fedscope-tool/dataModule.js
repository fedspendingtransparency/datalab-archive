---
---

window.dataModule = {
    mem: {},

    loadStates: (cb) => {
        d3.json("../../../data-lab-data/fedscope-tool/states.json", (
            error,
            data
        ) => {
            if (error) throw error;
            window.dataModule.mem.states = data;
            cb(data);
        });
    },

    loadAgencies: (cb) => {
        d3.json("../../../data-lab-data/fedscope-tool/agencies.json", (
            error,
            data
        ) => {
            if (error) throw error;
            window.dataModule.mem.agencies = data;
            cb(data);
        });
    },

    loadOccupationCategories: (cb) => {
        d3.json(
            "../../../data-lab-data/fedscope-tool/occupationCategories.json",
            (error, data) => {
                if (error) throw error;
                window.dataModule.mem.occupationCategories = data;
                cb(data);
            }
        );
    },

    loadEmployeeCountData: (cbs, props) => {
        d3.json("../../../data-lab-data/fedscope-tool/employees.json", (
            error,
            data
        ) => {
            if (error) throw error;
            window.dataModule.mem.employeeCounts = data;
            cbs.forEach((cb) => cb(data, props));
        });
    },

    loadEmployeeSalaryData: (cbs, props) => {
        d3.json(
            "../../../data-lab-data/fedscope-tool/employeeSalaries.json",
            (error, data) => {
                if (error) throw error;
                window.dataModule.mem.employeeSalaries = data;
                cbs.forEach((cb) => cb(data, props));
            }
        );
    }
};
