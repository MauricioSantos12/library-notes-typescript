var buttonAddBook = document.querySelector('.button-add-book');
var buttonCancel = document.querySelector('.cancel--button');
var buttonSave = document.querySelector('.save--button');
var modal = document.querySelector('.modal-container');
var cardsContainer = document.querySelector('.cards--container');
var cardsLocalStorage = localStorage.getItem("cards");
if (cardsLocalStorage && cardsContainer != null) {
    cardsContainer.innerHTML = cardsLocalStorage;
}
var showOrHideModal = function () {
    if (modal != null && !modal.classList.value.includes('active')) {
        showModal();
    }
    else {
        hideModal();
    }
};
var showModal = function () {
    if (modal != null) {
        modal.classList.add('active');
    }
};
var hideModal = function () {
    if (modal != null && modal.classList.value.includes('active')) {
        modal.classList.remove('active');
    }
    if (modal != null)
        modal.classList.add('hide');
};
var saveCard = function () {
    var val = document.querySelector('input');
    if (val != null && val.value == '')
        return;
    var randColor = generateRandomColor();
    var cardsContainer = document.querySelector('.cards--container');
    if (cardsContainer != null) {
        cardsContainer.innerHTML += "\n        <div class=\"card\" style='background-color: ".concat(randColor, "'>\n            <div class=\"title--container\">\n                <p>").concat(val, "</p>\n                <i class=\"fa-regular fa-trash-can\"></i>\n            </div>\n        </div>\n        ");
        hideModal();
        localStorage.setItem('cards', cardsContainer.innerHTML);
        var input = document.querySelector('input');
        if (input != null) {
            input.value = '';
        }
    }
};
var deleteCard = function () {
    console.log('trash');
};
function generateRandomColor() {
    var maxVal = 0xFFFFFF; // 16777215
    var randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    var randColor = randomNumber.padStart(6, 0);
    return "#".concat(randColor.toUpperCase());
}
buttonAddBook === null || buttonAddBook === void 0 ? void 0 : buttonAddBook.addEventListener("click", showOrHideModal);
buttonCancel === null || buttonCancel === void 0 ? void 0 : buttonCancel.addEventListener("click", showOrHideModal);
buttonSave === null || buttonSave === void 0 ? void 0 : buttonSave.addEventListener("click", saveCard);
