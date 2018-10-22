export function drawChart(data) {
    const config = {};

    config.data = data.filter(r => r.amount > 0);
    config.negativeData = data.filter(r => r.amount <= 0);

    console.log(config.data)
    console.log(config.negativeData)
}