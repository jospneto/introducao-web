const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if(!user || user.email !== email || user.password !== password){
    alert("Usuário não encontrado. Verifique suas credenciais.");
  }

  if (user && email === user.email && password === user.password){
    window.location.href = "feed.html";
  }

  if(password.length < 8 || email.length === 0){
    const errorPassword = document.getElementById("error-password");
    const errorEmail = document.getElementById("error-email");
    errorPassword.innerText = "A senha deve ter pelo menos 8 caracteres.";
    errorPassword.style.color = "red";
    errorEmail.innerText = "O e-mail deve ser preenchido.";
    errorEmail.style.color = "red";
  }
})

// const login = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("senha").value;

//   if (email === "admin@gmail.com" && password === "Neto0412*"){
//     window.location.href = "feed.html";
//   }

//   if(password.length < 8 || email.length === 0){
//     const errorPassword = document.getElementById("error-password");
//     const errorEmail = document.getElementById("error-email");
//     errorPassword.innerText = "A senha deve ter pelo menos 8 caracteres.";
//     errorPassword.style.color = "red";
//     errorEmail.innerText = "O e-mail deve ser preenchido.";
//     errorEmail.style.color = "red";
//   }
// }