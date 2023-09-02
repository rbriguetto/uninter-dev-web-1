function confirmaEnvioFormulario()
{
    desabilitaBotao();

    if (!confirm('Confirma o "envio" do formulário?'))
    {
        alert('Envio cancelado pelo usuário :-(');
        habilitaBotao();
        return false;
    }

    // Espera 3 segundos para confirmar o envio. Somente para simular uma demora
    // no tempo de resposta do servidor
    setTimeout(enviaFormulario, 3000);
    return false;
}

/**
 * Desabilita o botão enquanto processa o envio do formulário
 */
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
    alert('Formulário "enviado" com sucesso!');
}