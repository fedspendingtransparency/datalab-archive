const spendingPerSecond = 130000;

let ticker = 0;

function updateTicker() {
    ticker += spendingPerSecond;

    document.getElementById('ticker__number').innerText = '$' + ticker.toLocaleString('en');
}

export function initTicker() {
    setInterval(updateTicker, 1000);
}