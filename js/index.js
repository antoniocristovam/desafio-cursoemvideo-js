function carregar (){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    msg.innerHTML = `Agora são: ${hora} Horas e ${minuto} minutos`
    if (hora >= 0 && hora <12) {
        //BOM DIA
        img.src = 'img/manhan.jpg'
        document.body.style.backgroundColor = '#b89052'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE
        img.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = '#b4ae8e'
    } else {
        //BOA NOITE
        img.src = 'img/noite.jpg'
        document.body.style.backgroundColor = '#011e2c'
    }
}