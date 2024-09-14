document.getElementById("confirmButton").addEventListener("click", function() {
    // Pergunta o nome do convidado
    var name = prompt("Digite seu nome para confirmar a presença:");

    if (name) {
        // Mensagem personalizada para o WhatsApp
        var message = "Olá, meu nome é " + name + " e estou confirmando minha presença no Chá de Panela de Matheus e Kariny!";
        
        // Link do WhatsApp com a mensagem predefinida
        var whatsappLink = "https://api.whatsapp.com/send?phone=5588999999999&text=" + encodeURIComponent(message);

        // Redireciona para o WhatsApp
        document.getElementById("confirmButton").href = whatsappLink;
    } else {
        alert("Por favor, insira seu nome para confirmar.");
    }
});
