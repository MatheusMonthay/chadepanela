// Função para abrir o modal
document.getElementById('modalButton').onclick = function() {
    document.getElementById('confirmModal').style.display = 'block';
}

// Para fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('confirmModal')) {
        document.getElementById('confirmModal').style.display = 'none';
    }
}

// Função para confirmar presença
function confirmarPresenca(phoneNumber) {
    var message = "Olá, eu e minha família estamos muito felizes em fazer parte deste momento da vida de vocês, podem contar com nossa presença.";
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.location.href = whatsappLink;
}

// Adicionando ações aos botões do modal
document.getElementById('confirmMatheus').onclick = function() {
    confirmarPresenca("5569992834132"); // Chama a função com o número de Matheus
    document.getElementById('confirmModal').style.display = 'none'; // Fecha o modal após a confirmação
}

document.getElementById('confirmKariny').onclick = function() {
    confirmarPresenca("556984736855"); // Chama a função com o número de Kariny
    document.getElementById('confirmModal').style.display = 'none'; // Fecha o modal após a confirmação
}
