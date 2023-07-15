var btnOpenNav = document.querySelector("#open__nav-btn")
var btnCloseNav = document.querySelector("#close__nav-btn")
var navItems = document.querySelector(".nav__items")

// open nav dropdown
const openNav = () => {
    navItems.style.display = "flex";
    btnOpenNav.style.display = "none";
    btnCloseNav.style.display = "inline-block";
}
btnOpenNav.addEventListener('click', openNav);

// close nav dropdown
const closeNav = () => {
    navItems.style.display = "none";
    btnCloseNav.style.display = "none";
    btnOpenNav.style.display = "inline-block";
}
btnCloseNav.addEventListener('click', closeNav);



// DashBoard 
const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector("#show__sidebar-btn");
const hideSidebarBtn = document.querySelector("#hide__sidebar-btn");

const showSidebar = () => {
    sidebar.style.left = "0";
    showSidebarBtn.style.display = "none";  
    hideSidebarBtn.style.display = "inline-block";  
}

showSidebarBtn.addEventListener('click', showSidebar);

const hideSidebar = () => {
    sidebar.style.left = "-100%";
    hideSidebarBtn.style.display = "none";  
    showSidebarBtn.style.display = "inline-block";
}
hideSidebarBtn.addEventListener('click', hideSidebar);


