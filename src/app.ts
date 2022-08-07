//console.log('Arquivo de testes. Pode mexer nele como quiser.')

  
//  desafio1
/*
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
    code : 10,
    name : "John"
};
employee.code = 10;
employee.name = "John";
*/

//  desafio2
/*
// Como podemos melhorar o esse código usando TS? 
enum Profissao{
    Atriz,
    Padeiro
}

interface pessoa {
    idade: number,
    nome: string,
    profissao: Profissao
}

let pessoa1:pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};

let pessoa2:{nome:string, idade:number, profissao:Profissao} = {
    nome : "roberto",
    idade : 19,
    profissao : Profissao.Padeiro
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome : "carlos",
    idade : 19,
    profissao : Profissao.Padeiro
}
*/

//  desafio3

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
/*
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

//let campoSaldo.innerHTML = 0;
let Saldo = 0;

function somarAoSaldo(soma:number){
    //campoSaldo.innerHTML += soma;
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
*/
