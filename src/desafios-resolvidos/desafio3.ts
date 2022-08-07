// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

let Saldo = 0;

function somarAoSaldo(soma:number){
    Saldo += soma;
    campoSaldo.innerHTML = Saldo.toString() + ' ' ;
}

function limparSaldo() {
    Saldo = 0;
    campoSaldo.innerHTML = '';
    soma.value = '';
}

botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});