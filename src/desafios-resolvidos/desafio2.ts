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