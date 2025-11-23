function confirmarEnvio(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    

    const confirmarMensagem = `Confirme seus dados antes de enviar: \n\n Nome: ${nome}\n Email: ${email}`;

    return confirm(confirmarMensagem);
}
