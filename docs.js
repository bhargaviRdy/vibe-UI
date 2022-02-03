const alertBtnClose = document.querySelector(".btn-close");
const alertClose = document.querySelector(".alert-close")
alertBtnClose.addEventListener("click",() => {
    alertClose.style.display = "none";
})