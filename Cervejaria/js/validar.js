function validar() {

document.getElementById('sucesso').style.display = 'none';
document.getElementById('erro').style.display = 'none';

var controle = 0;
var nome = form.nome.value;
var sobrenome = form.sobrenome.value;
var telefone = form.telefone.value;
var email = form.email.value;
var textarea = form.textarea.value;

    if (nome == "") {
        controle++;
    form.nome.style.borderColor = 'red';
    }

    if(sobrenome == ""){
        controle++;
     form.sobrenome.style.borderColor = 'red';
    }

    if(isNaN(telefone) || telefone == ""){
        controle++;
    form.telefone.style.borderColor = 'red';
    }

    if(email.indexOf("@") == -1 ||
    email.indexOf(".") == -1 ||
    email == "" ||
    email == null) {
        controle++;
    form.email.style.borderColor = 'red';
    }
    if(textarea == ""){
        controle++;
     form.textarea.style.borderColor = 'red';
    }

    if(controle===0){
        document.getElementById('sucesso').style.display = 'block';
    }else{
        document.getElementById('erro').style.display = 'block';
        alert('Preencha corretamente os campos selecionados');
    }
}

function fechaBalao(){
    document.getElementById('sucesso').style.display = 'none';
    document.getElementById('erro').style.display = 'none';
    form.inputnome.style.borderColor = 'lightgray';
    form.inputsobrenome.style.borderColor = 'lightgray';
    form.inputtelefone.style.borderColor = 'lightgray';
    form.inputemail.style.borderColor = 'lightgray';
    form.inputtextarea.style.borderColor = 'lightgray';

}
