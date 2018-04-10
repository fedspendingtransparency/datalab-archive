---
---

$(() => {
    const { barchartModule, dataModule } = window;

    const barchartModuleDraw = barchartModule().draw;

    const settings = {
        xAxisUnit: "dollars",
        xAxisScale: "quantity"
    };

    function handleYAxisCheckboxChange(id, checked) {
        dataModule.mem.cicData = dataModule.mem.cicData.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    displayed: checked
                };
            }
            return c;
        });

        barchartModuleDraw(dataModule.mem.cicData, settings, { handleYAxisCheckboxChange });
    }

    dataModule.loadCicData((cicData) => {
        barchartModuleDraw(cicData, settings, { handleYAxisCheckboxChange });
    });

    $("#barchartToolbar").change((e) => {
        e.preventDefault();

        const data = dataModule.mem.cicData;

        const xAxisUnit = $('input[name="xAxisUnit"]:checked').val();
        const xAxisScale = $('input[name="xAxisScale"]:checked').val();

        settings.xAxisScale = xAxisScale;
        settings.xAxisUnit = xAxisUnit;

        barchartModuleDraw(data, settings, { handleYAxisCheckboxChange });
    });

    $("#button1").click(() => {
        let data = dataModule.mem.cicData;

        data = data.map((c) => ({
            ...c,
            displayed: true
        }));

        settings.xAxisUnit = "dollars";
        settings.xAxisScale = "quantity";

        $('input[name="xAxisUnit"]')[0].checked = true;
        $('input[name="xAxisScale"]')[0].checked = true;

        barchartModuleDraw(data, settings, { handleYAxisCheckboxChange });
    });
});
