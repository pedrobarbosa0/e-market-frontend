const buttonCreate = document.querySelector("form button")
const sucessModal = document.querySelector("#cadastro-concluido")
buttonCreate.addEventListener("click", () => {
    sucessModal.classList.remove("hide")
})