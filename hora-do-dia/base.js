function carregar(){
   
    var msg = window.document.getElementById("texto-hora")
    var imag = window.document.getElementById("imagem")
    var back = window.document.getElementById("fundo")
    
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora<12){
        imag.innerHTML = `<img class='imagem2' src="manha.png"/>`
        back.style.backgroundColor="rgb(202, 194, 209)"
    }else if (hora<18){
        imag.innerHTML = `<img class='imagem2' src="tarde.png"/>`
        back.style.backgroundColor="rgb(184, 164, 79)"
        
    }
}
