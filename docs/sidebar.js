const sidebarIcon = document.querySelector("#sidebar-icon");
const sidebarList = document.querySelector("#sidebar-list");
const docs = document.querySelector(".docs");
sidebarIcon.addEventListener("click", (event) => {
    event.preventDefault();
    if(docs.style.marginLeft === "15%")
        docs.style.marginLeft = "1rem";
    else{
     docs.style.marginLeft = "15%";
    }
    console.log(docs.style.marginLeft);

    sidebarList.classList.toggle("sidebar-active");
})
