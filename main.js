function carregar() {
    var msg = document.getElementById('msg');
    var fotoDiv = document.getElementById('foto');
    var foto = fotoDiv.querySelector('img');
    var data = new Date();
    var hora = data.getHours();
    var horaescrita = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' , second: '2-digit'});
    msg.innerHTML = `Agora são ${horaescrita} horas.`;
    if (hora >= 5 && hora < 12) {
        foto.src = './img/manha.jpg';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        foto.src = './img/tarde.jpg';
        document.body.style.background = '#b9846f'
    } else {
        foto.src = './img/noite.jpg';
        document.body.style.background = '#515154'
    }
    setInterval(carregar,1000)
}

