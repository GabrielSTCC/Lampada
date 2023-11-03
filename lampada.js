var lamp = window.document.getElementById('lampadaDesligada')
function estarQuebrada(){
    return lamp.src.indexOf('lampadaQuebrada') > -1
}
function Ligar(){
    if(!estarQuebrada())
    lamp.src = 'lampadaLigada.svg'
}
function Desligar(){
    if(!estarQuebrada())
    lamp.src = 'lampadaDesligada.svg'
}
lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = 'lampadaQuebrada.svg'
}