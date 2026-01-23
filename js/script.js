function openTab(id){
document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
document.getElementById(id).classList.add('active');
}


// Contact Form Handler (API Ready)
document.addEventListener('DOMContentLoaded',()=>{
const form = document.getElementById('contactForm');
if(!form) return;


form.addEventListener('submit',async(e)=>{
e.preventDefault();
const status=document.getElementById('status');
status.innerText='Sending...';


// 🔌 API endpoint integration here
// fetch('/api/contact', { method:'POST', body: new FormData(form) })


setTimeout(()=>{
status.innerText='Message sent successfully!';
form.reset();
},1000);
});
});
