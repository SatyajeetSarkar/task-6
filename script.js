const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name cannot be empty.";
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === "") {
    document.getElementById("emailError").textContent =
      "Email cannot be empty.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email format.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent =
      "Message cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent =
      "Form submitted successfully! (This is a demo, not sent)";

    form.reset();
  }
});
