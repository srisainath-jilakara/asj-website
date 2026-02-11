function openTab(tabId){
  document.querySelectorAll('.tab').forEach(tab=>{
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

// Initialize EmailJS
(function(){
  emailjs.init("7NQqAsC5qzEcJw1xr"); // replace
})();

document.addEventListener("DOMContentLoaded", ()=>{

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if(email === "" || message === ""){
      alert("Email and Message are required.");
      return;
    }

    submitBtn.disabled = true;
    btnText.style.display = "none";
    spinner.style.display = "inline";

    emailjs.sendForm(
      "service_wix8j4i",   // replace
      "template_a5zu069",  // replace
      this
    )
    .then(()=>{
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(()=>{
      alert("Failed to send message.");
    })
    .finally(()=>{
      submitBtn.disabled = false;
      btnText.style.display = "inline";
      spinner.style.display = "none";
    });

  });

});
