$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        const atividade = $('#nova-tarefa').val();
        const novaAtividade = $("<li></li>")
        
        $(`<li>${atividade}</li>`).appendTo(novaAtividade);

        $(novaAtividade).appendTo('ul');

        $('#nova-tarefa').val('')

    })

    $('#botao-cadastrar').click(function() {
        $("#atividades").css("display", "grid");

    })

    $("#atividades").click(function() {
        $('li').toggleClass("feito");
    })

    

})