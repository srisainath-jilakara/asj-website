function openTab(tabId){
const tabs=document.querySelectorAll('.tab');
tabs.forEach(tab=>tab.classList.remove('active'));

document.getElementById(tabId).classList.add('active');
}

document.addEventListener("DOMContentLoaded",()=>{
const form=document.getElementById("contactForm");

if(!form) return;

form.addEventListener("submit",function(e){
e.preventDefault();
document.getElementById("status").innerText="Message sent successfully!";
form.reset();
});
});
