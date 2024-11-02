const openModal = document.querySelector("#open-modal");
const dialog = document.querySelector("#dialog");
const closeModal = document.querySelector("#close-modal");

openModal.addEventListener("click", () => dialog.showModal())
closeModal.addEventListener('click', () => dialog.close());


// function that makes you close your modal by clicking anywhere in the screen
dialog.addEventListener('click',() =>{
    const rect = dialog.getBoundingClientRect();
    const isInDialog = 
    event.clientX >= rect.left && 
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

    if(!isInDialog){
        dialog.close();
    }
})