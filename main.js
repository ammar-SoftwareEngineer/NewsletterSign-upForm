let inputEmail = document.getElementById("email");
let btnSubmit = document.getElementById("btn");
let btnClose = document.getElementById("btnClose");

function submit() {
  if (validation()) {
    let emailObject = {
      email: inputEmail.value,
    };
    document.getElementById("form").style.display = "none";
    document.getElementById("msg").style.display = "flex";
    document.getElementById("confirm").innerHTML = emailObject.email;
  } else {
    changeForm;
  }
  clearForm();
}
let changeForm = inputEmail.addEventListener("keyup", () => {
  if (validation() || inputEmail.value == "") {
    inputEmail.style.cssText = "border:1px solid hsl(231, 7%, 60%)";
    document.getElementById("errorMsg").style.display = "none";
  } else {
    inputEmail.style.cssText = "border:1px solid hsl(4, 100%, 67%)";
    document.getElementById("errorMsg").style.display = "block";
  }
});
btnSubmit.addEventListener("click", () => {
  submit();
});
btnClose.addEventListener("click", () => {
  document.getElementById("form").style.display = "block";
  document.getElementById("msg").style.display = "none";
});

function validation() {
  let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil)$/;
  return regex.test(inputEmail.value);
}
function clearForm() {
  inputEmail.value = "";
}
