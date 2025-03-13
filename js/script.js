const dataForm = document.getElementById("data-form");
console.log(dataForm);

const kilometersId = document.getElementById("kilometers");
console.log(kilometers);

const ageId = document.getElementById("age");
console.log(age);

const resultElement = document.getElementById("result");


dataForm.addEventListener("submit", formManager);
function formManager(event) {
    event.preventDefault();

    const kilometers = kilometersId.value;
    const age = ageId.value;
    const price = 0.21 * kilometers;
    const discount20 = price - (price * 20 / 100);
    const discount40 = price - (price * 40 / 100);
    let message;

    if (kilometers.length === 0 || age.length === 0) {
        message = "Inserisci i dati";
        resultElement.classList.add("text-danger");
    } else if (kilometers > 1000 || age > 150) {
        message = "Nessun bigletto disponibile secondo i dati inseriti";
        resultElement.classList.add("text-danger");
    } else if (age < 18) {
        message = `Hai diritto ad uno sconto del 20%. Il prezzo to tale è di ${discount20.toFixed(2)}€`;
        resultElement.classList.remove("text-danger");
    } else if (age >= 65) {
        message = `ai diritto ad uno sconto del 40%. Il prezzo to tale è di ${discount40.toFixed(2)}€`;
        resultElement.classList.remove("text-danger");
    } else {
        message = `Il prezzo to tale è di ${price.toFixed(2)}€`;
        resultElement.classList.remove("text-danger");
    };
    resultElement.innerText = message;
};






