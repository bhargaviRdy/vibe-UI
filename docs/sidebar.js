const sidebarIcon = document.querySelector("#sidebar-icon");
const sidebarList = document.querySelector("#sidebar-list");
const docs = document.querySelector(".docs");
sidebarIcon.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarList.classList.toggle("sidebar-active");
})
