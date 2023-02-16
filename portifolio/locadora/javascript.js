/*Para descobrir se o campo de input está preenchido vamos usar um novo comando:
	
	'let nomeDaVariavel = document.forms["nomeDoFormulário"]["nomeDoInput"].value;'
	
	document.forms[""].value encontra o formulário através de seu nome e retorna o
	valor de preenchimento. Se o valor for vazio, não foi preenchido.
*/


function validaForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaDat = document.forms["cadastrar"]["data"].value;
	let validaTit = document.forms["cadastrar"]["titulo"].value;
	let validaDir = document.forms["cadastrar"]["diretor"].value;
	let validaAto = document.forms["cadastrar"]["ator"].value;
	let validaNot = document.forms["cadastrar"]["nota"].value;
	let validaRad = document.forms["cadastrar"]["radio"].value;

	if (validaCod == ""){
		alert("O código deve ser preenchido!");
		return false;
	}
	if (validaDat == ""){
		alert("A data deve ser preenchido!");
		return false;
	}
	if (validaTit == ""){
		alert("O titulo deve ser preenchido!");
		return false;
	}
	if (validaDir == ""){
		alert("O nome do Diretor deve ser preenchido!");
		return false;
	}
	if (validaAto == ""){
		alert("O nome do ator/atriz principal deve ser preenchido!");
		return false;
	}
	if (validaNot == ""){
		alert("A nota IMDB deve ser preenchido!");
		return false;
	}
	if (validaRad == ""){
		alert("O gênero deve ser marcado!");
		return false;
	}
}

function insere(){
	let codi = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let titu = document.forms["cadastrar"]["titulo"].value;
	let dire = document.forms["cadastrar"]["diretor"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let nota = document.forms["cadastrar"]["nota"].value;
	let radi = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${codi}</th>`;
	inserir.innerHTML +=	`<td>${titu}</td>`;
	inserir.innerHTML +=	`<td>${dire}</td>`;
	inserir.innerHTML +=	`<td>${data}</td>`;
	inserir.innerHTML +=	`<td>${radi}</td>`;
	inserir.innerHTML +=	`<td>${ator}</td>`;
	inserir.innerHTML +=	`<td>${nota}/10</td>`;

}