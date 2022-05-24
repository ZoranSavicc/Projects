let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let priceElement = document.querySelector('#crypto-price');
let lastPrice = null;

ws.onmessage = (event) => {
    let price = JSON.parse(event.data);
    priceElement.textContent = parseFloat(price.p).toFixed(2);

    priceElement.style.color = !lastPrice ? 'black' : parseFloat(price.p).toFixed(2) > lastPrice ? 'green' : 'red';

    lastPrice = parseFloat(price.p).toFixed(2);
};