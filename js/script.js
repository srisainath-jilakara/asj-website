function openTab(tabId){

let tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
tab.classList.remove("active");
});

document.getElementById(tabId).classList.add("active");

window.scrollTo({
top: document.querySelector(".container").offsetTop - 60,
behavior: "smooth"
});

}
