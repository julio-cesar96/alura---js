function validarFormLogin() {
	let emailUsuario = formCadastroUsuario.emailUsuario.value;
	let senhaUsuario = formCadastroUsuario.senhaUsuario.value;
				
	if(emailUsuario == ""){
		alert('O campo e-mail não pode ser vazio. Por favor, preencha com o seu melhor e-mail');
		formCadastroUsuario.emailUsuario.focus();
	}
				
	if(senhaUsuario == "" || senhaUsuario.length <= 5){
		alert('Por segurança, digite uma senha com pelo menos 6 caracteres');
		formCadastroUsuario.senhaUsuario.focus();
	}
}
