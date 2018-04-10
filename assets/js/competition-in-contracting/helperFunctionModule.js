---
---

const formatPercent = d3.format(",.0%");
const formatActions = d3.format(",");
const formatDollars = d3.format("$,");
const formatDollarsText = d3.format(".2s");

window.helperFunctionModule = {

    formatNumber(type, number) {
        switch (type) {
            case "percent":
                return formatPercent(number);
            case "actions":
                return formatActions(number);
            case "dollars":
                return formatDollars(Math.round(number));
            case "dollars text":
                return (
                    `$${
                        formatDollarsText(Math.round(number))
                            .replace("k", " thousand")
                            .replace("M", " million")
                            .replace("G", " billion")
                            .replace("T", " trillion")}`
                );
            default:
                return "";
        }
    }
};
