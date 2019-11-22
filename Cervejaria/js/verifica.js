 window.onload = function () { 
      var botao = document.getElementById("botao");
      botao.onclick = function () {

		var nome = document.getElementByName("nome");
		var sobrenome = document.getElementByName("sobrenome");
		var telefone = document.getElementByName("telefone");
		var email = document.getElementByName("email");
		var textarea = document.getElementByName("textarea");
      
			if (nome.value == "" )/*sobrenome.value === "" ||
			isNaN(telefone) || telefone === "" || email.value.indexOf("@") == -1 ||
			email.value.indexOf(".") == -1 || email.value === "" || email.value == null)*/{
				alert('verificar os campos preenchidos');
			}
    }
}  