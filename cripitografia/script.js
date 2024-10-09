function encripita(myfrase){
    let frase = myfrase;
    let array = frase.split('');
    let primeiraPassada = array.slice(); 
    let indexDaPrimeiraPassa = -1;


    array.forEach(function (caracter){
        indexDaPrimeiraPassa++
        if((caracter >= 'A' && caracter <= 'Z') || (caracter >= 'a' && caracter <= 'z')){
            for(let i = 65; i <= 122; i++){
                if(caracter == String.fromCharCode(i)){
                    primeiraPassada[indexDaPrimeiraPassa]= String.fromCharCode(i + 3);
                }
            }
        }
    });

    let segundaPassada = primeiraPassada.reverse();

    
    let meio = Math.floor(segundaPassada.length / 2);

    for (let i = meio; i < segundaPassada.length; i++) {
        segundaPassada[i] = String.fromCharCode(segundaPassada[i].charCodeAt(0) - 1);
    }

    let fraseCripitografada = segundaPassada.join('');

    console.log(fraseCripitografada);
}
encripita("Texto #3");
encripita("abcABC1");
encripita("vxpdylY .ph");
encripita("vv.xwfxo.fd");

