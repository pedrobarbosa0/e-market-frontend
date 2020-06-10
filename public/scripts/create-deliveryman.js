const buttonCreate = document.querySelector("form button")
const sucessModal = document.querySelector("#deliveryman-modal")
buttonCreate.addEventListener("click", () => {
    sucessModal.classList.remove("hide")
})