const submit = document.getElementById("submit");

submit.addEventListener("click", function(e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  console.log(username);
  console.log(password);
});