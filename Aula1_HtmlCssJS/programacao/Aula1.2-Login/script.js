
function sendCredentialsToBackend(event) {
    event.preventDefault(); //não recarrego a página
    //cria variável e coleta do html o campo de e-mail e password
    const email = document.querySelector("#e-mail").value;
    const password = document.querySelector("#pass").value;

    console.log("email: ", email);
    console.log("password: ", password);

    alert("email: " + email + ", password:" + password);
}