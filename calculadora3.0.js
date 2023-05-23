function insert (num) {
    let numero = document.getElementById('resposta').innerHTML;
    document.getElementById('resposta').innerHTML = numero + num;
}
function limpar () {
    document.getElementById('resposta').innerHTML = '';
}
function porcentagem (num) {
    let numero = document.getElementById('resposta').innerHTML;
    document.getElementById('resposta').innerHTML = numero * 100 / num;
}
function calcular () {
    var resposta = document.getElementById('resposta').innerHTML;
    if (resposta) {
        document.getElementById('resposta').innerHTML = eval (resposta);
    }
}

// Falta : Função % , virgula dos decimais, C( apagar apenas um) e porcentagem 