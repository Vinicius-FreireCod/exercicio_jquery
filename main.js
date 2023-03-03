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

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

    var ul = document.getElementById('ativ-cadastrada');
    ul.onclick = function(event) {
        var target = getEventTarget(event);
        $(target).toggleClass("feito");
    };


})