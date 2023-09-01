function confirmaEnvioFormulario()
{
    desabilitaBotao();
    if (!confirm('Confirma o envio do formulário?'))
    {
        alert('Envio cancelado pelo usuário :-(');
        habilitaBotao();
        return false;
    }
    desabilitaBotao();
    setTimeout(enviaFormulario, 3000);
    return false;
}

function desabilitaBotao()
{
    var botao = document.getElementById("btnSubmit");
    botao.setAttribute('disabled', '')
    botao.setAttribute('value', 'Enviando formulário. Aguarde ...');
}

function habilitaBotao()
{
    var botao = document.getElementById("btnSubmit");
    botao.removeAttribute('disabled', '')
    botao.setAttribute('value', 'Enviar Formulário');
}


function enviaFormulario()
{
    habilitaBotao();
    alert('Formulário enviado com sucesso!');
}