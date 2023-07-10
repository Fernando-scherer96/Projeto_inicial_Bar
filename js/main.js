$(document).ready(function(){

    let mascara = if (celular) ? '(00) 00000-0000' : '(00) 0000-0000'

    $(`#telefone`).mask(mascara);

    $('form').validate({
        rules: {
            nome: {
            required: true
            }, 
            email:{
                required: true,
                email: true
            }, 
            telefone: {
                required: true
            }, 
            mensagem: {
                required:true
            }
        }
    });
});