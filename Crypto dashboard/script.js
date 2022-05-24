let cryptoRequest = new XMLHttpRequest();
cryptoRequest.open('GET','https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',false);
cryptoRequest.send(null);

var data = JSON.parse(cryptoRequest.responseText);

console.log(data[0].market_cap);
