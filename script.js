function consultaCEP(){
	$(".brra-progresso").show();
	$("#conteudo").show();
	let cep=document.getElementById("cep").value;
	let urljs=`https://viacep.com.br/ws/${cep}/json/`;
	$.ajax({
		url:urljs,
		type:"GET",
		success:function(response){
			$("#rcep").html(response.cep);
			$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);
			$('.barra-progresso').hide();
		}
	});
	$("#conteudo").css("visibility", "visible");
}

$(function(){
	$('.barra-progresso').hide();

});
