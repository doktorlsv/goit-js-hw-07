const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const emailValue = registerForm.elements.email.value.trim();
  const passwordValue = registerForm.elements.password.value.trim();
  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in");
  }
  const contactForm = {
    email: `${emailValue}`,
    password: `${passwordValue}`,
  };

  console.log(contactForm);
  form.reset();
});
