const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})

const buttonLogin = document.querySelector("#page-home header a")
const loginModal = document.querySelector("#login-modal")
const closeLogin = document.querySelector("#login-modal .header a")
buttonLogin.addEventListener("click", () => {
    loginModal.classList.remove("hide")
})

closeLogin.addEventListener("click", () => {
    loginModal.classList.add("hide")
})