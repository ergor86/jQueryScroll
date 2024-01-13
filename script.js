$(document).ready(function(){
    //console.log("oi");
    //$("#botao1").css("background-color", "blue");
    var itens = $(".lista2");
    console.log(itens.find("li:nth-child(2)").text()); //pegando o segundo li da lista2
     var li = $("li");
    console.log(li.eq(5).text()); //pegando o 4 elemento li
    li.each(function(){
        console.log($(this).text());//iterando e imprimindo o texto de cada li
    });

    $('select').each(function(){
        $(this).find('option:nth-child(odd)').addClass('inputText'); //pinta os options impares de cada caixa
     });

});