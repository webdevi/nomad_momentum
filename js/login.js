const $loginForm = document.querySelector("#loginForm");
const $loginInput = document.querySelector("#loginForm input");
const $welcomeMsg = document.querySelector(".welcomeMsg");
const HIDDEN_CLASSNAME = "hidden";

$loginInput.focus();

function onLoginSubmit(event) {
  event.preventDefault();
  const name = $loginInput.value;
  setName(name);
}

function dispName(name) {
  $welcomeMsg.innerHTML = `Hello ${name}`;
  $loginForm.classList.add(HIDDEN_CLASSNAME);
}
function setName(name) {
  localStorage.setItem("username", name);
  dispName(name);
}

const myName = localStorage.getItem("username");
console.log("myname : " + myName);
if (myName !== null || myName == "") {
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  dispName(myName);
} else {
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginInput.focus();
}

$loginForm.addEventListener("submit", onLoginSubmit);
