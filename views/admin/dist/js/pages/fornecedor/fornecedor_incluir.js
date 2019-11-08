$(function(){
    'use strict';

    var tipoDocumento = $("#divTipoDocumento");
    var nomeRazaoSocial = $("#divNomeRazaoSocial");
    var divNomeFantasia = $("#divNomeFantasia");
    var divInscricaoEstadual = $("#divInscricaoEstadual");

    tipoDocumento.hide();
    nomeRazaoSocial.hide();
    divNomeFantasia.hide();
    divInscricaoEstadual.hide();

    $(document).on('click', 'input[type=radio]', function() {
        var id = $(this).prop('id');
        motrarInput(id);
    });

    function motrarInput(id){
        switch (id) {
            case 'pf':
                $('#divTipoDocumento label').text('CPF').prop('for', 'cpf');
                $('#divTipoDocumento label').prop('name','cpf').prop('id', 'cpf');

                tipoDocumento.show();

                $("#divNomeRazaoSocial label").text('Nome').prop('for','nome');
                $("#divNomeRazaoSocial label").prop('name','nome').prop('id', 'nome');
                nomeRazaoSocial.show();
                divNomeFantasia.hide();
                divInscricaoEstadual.hide();
                break;

            case 'pj':
                    $('#divTipoDocumento label').text('CNPJ')
                    $('#divTipoDocumento label').prop('name', 'cnpj');
                    $('#divTipoDocumento label').prop('id','cnpj');
                    tipoDocumento.show();
                    $('#divNomeRazaoSocial label').text('Razao Social');
                    $('#divNomeRazaoSocial label').prop('for', 'razaoSocial');
                    $('#divNomeRazaoSocial input').prop('name','razaoSocial');
                    $('#divNomeRazaoSocial input').prop('id','razaoSocial');
                    nomeRazaoSocial.show();
                    $('#divNomeFantasia label').text('Nome Fantasia');
                    $('#divNomeFantasia label').prop('for','nomeFantasia');
                    $('#divNomeFantasia input').prop('name', 'nomeFantasia');
                    $('#divNomeFantasia input').prop('id', 'nomeFantasia');
                    divNomeFantasia.show();
                    $('#divInscricaoEstadual label').text('Inscricao Estadual');
                    $('#divInscricaoEstadual label').prop('for','inscricaoEstadual');
                    $('#divInscricaoEstadual input').prop('name', 'inscricaoEstadual');
                    $('#divInscricaoEstadual input').prop('id', 'inscricaoEstadual');
                    divInscricaoEstadual.show();
                    break;
            default:
                break;
        }
    }
});

                    