const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;

  if(name && email && password){
    window.location.href = "feed.html";
    const user = { name, email, password}
    localStorage.setItem("user", JSON.stringify(user));
  }
});
