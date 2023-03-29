const buttonAddBook = document.querySelector<HTMLInputElement>('.button-add-book')
const buttonCancel = document.querySelector<HTMLInputElement>('.cancel--button')
const buttonSave = document.querySelector<HTMLInputElement>('.save--button')
const modal = document.querySelector<HTMLInputElement>('.modal-container')
let cardsContainer = document.querySelector<HTMLInputElement>('.cards--container')

let cardsLocalStorage = localStorage.getItem("cards");
if(cardsLocalStorage && cardsContainer != null){
    cardsContainer.innerHTML = cardsLocalStorage;
}

const showOrHideModal = () => {
    if(modal != null && !modal.classList.value.includes('active')){
        showModal()
    }else{
        hideModal()
    }
}

const showModal = () => {
    if(modal != null){
        modal.classList.add('active');
    }
}

const hideModal = () => {
    if(modal != null && modal.classList.value.includes('active')){
        modal.classList.remove('active');
    }
    if(modal != null) modal.classList.add('hide');
}

const saveCard = () => {
    let val = document.querySelector<HTMLInputElement>('input');
    if(val != null && val.value == '') return
    let randColor = generateRandomColor();
    let cardsContainer = document.querySelector('.cards--container')
    if(cardsContainer!= null){
        cardsContainer.innerHTML += `
        <div class="card" style='background-color: ${randColor}'>
            <div class="title--container">
                <p>${val}</p>
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        `;
        hideModal();
        localStorage.setItem('cards', cardsContainer.innerHTML);
        let input = document.querySelector<HTMLInputElement>('input');
        if(input != null){
            input.value= '';
        }
    }
    
}


const deleteCard = () => {
    console.log('trash')
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber:any = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

buttonAddBook?.addEventListener("click", showOrHideModal);
buttonCancel?.addEventListener("click", showOrHideModal);
buttonSave?.addEventListener("click", saveCard);