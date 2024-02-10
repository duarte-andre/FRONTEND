/* este é um comentário 
de várias linhas
*/
// este é um comentário de uma linha

function showMessage(){
    console.log("Exibindo minha mensagem no console!!!!");
    //alert("Clicou no botão!!!"); //parar a aplicação até dar ok no aviso
}

function saveNewsletterUser(event){
    //evitar o comportamento de reload da página ao enviar formulario
    event.preventDefault();
    console.log('evento: ', event);   
    //seleciona os campos existentes no html usando id (#)
    const elementName = document.querySelector("#name").value;
    const elementEmail = document.querySelector("#email").value;

    console.log("elementName: ", elementName);
    console.log("elementEmail: ", elementEmail);

    alert("Formulário enviado!");
}