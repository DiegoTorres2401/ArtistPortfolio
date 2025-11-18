document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("commissionForm");

  form.addEventListener("submit", (e) => {
    let valid = true;
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    const name = form.name.value.trim();
    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Por Favor ingresa un nombre valido (al menos 2 caracteres).";
      valid = false;
    }
    const email = form.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Por Favor ingresa una direccion de email correcta.";
      valid = false;
    }
    const message = form.message.value.trim();
    if (message.length < 10) {
      document.getElementById("messageError").textContent = "El mensaje debe contener como minimo 10 caracteres.";
      valid = false;
    }
    const artwork = form.artwork.value;
    if (!artwork) {
      document.getElementById("artworkError").textContent = "Por favor, selecciona el tipo de arte.";
      valid = false;
    }
    if (!valid) e.preventDefault();
  });
});
