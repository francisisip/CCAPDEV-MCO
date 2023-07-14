const submit = document.getElementById("submit");

submit.addEventListener("click", function(e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  let emailAddress = $("#email").val();
  console.log(username);
  console.log(password);
  console.log(emailAddress);
});