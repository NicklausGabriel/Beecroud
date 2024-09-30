class Idade {
    constructor(dias) {
        this.dias = dias;
    }
}

function diasEmAnos(dias) {
    let ano = 0;
    let mes = 0;
    let diasEmAno = 365;

    while (dias >= diasEmAno) {
        dias -= diasEmAno;
        ano++;
    }
    
    while (dias >= 30) {
        dias -= 30;
        mes++;
    }
    

    console.log(`${ano} ano(s)`);
    console.log(`${mes} mês(es)`);
    console.log(`${dias} dia(s)`);
}


const joao = new Idade(400); // Altere aqui o número de dias
diasEmAnos(joao.dias);
