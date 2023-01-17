let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.3272;
let rateCHF = 4.6600;
let rateEUR = 4.6915;
let rateAUD = 3.0183;
let rateCAD = 3.2417;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;

        case "AUD":
            result = amount / rateAUD;
            break;

        case "CAD":
            result = amount / rateCAD;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});