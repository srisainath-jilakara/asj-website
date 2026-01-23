function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}

// Contact form mock submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("status").innerText = "Message sent successfully!";
    form.reset();
  });
});
