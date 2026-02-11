function openTab(tabId){
  document.querySelectorAll('.tab').forEach(tab=>{
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

// Initialize EmailJS
(function(){
  emailjs.init("7NQqAsC5qzEcJw1xr");
})();

document.addEventListener("DOMContentLoaded", ()=>{

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    submitBtn.disabled = true;
    btnText.style.display = "none";
    spinner.style.display = "inline";

    emailjs.sendForm(
      "service_wix8j4i",
      "template_a5zu069",
      this
    )
    .then(function(response){
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(function(error){
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Check console.");
    })
    .finally(function(){
      submitBtn.disabled = false;
      btnText.style.display = "inline";
      spinner.style.display = "none";
    });

  });

});
