btn = document.querySelector(".btn");
input = document.querySelector(".input");
mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
label = document.getElementById("label");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value.length === 0) {
    label.textContent = `Email is required`;
  } else if (input.value.match(mailFormat)) {
    label.textContent = "Valid Email";
  } else {
    label.textContent = `Please enter a valid email address!`;
  }
});
