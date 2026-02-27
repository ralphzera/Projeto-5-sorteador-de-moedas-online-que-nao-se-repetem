let ultimoMinimo;
let ultimoMaximo;
let numerosDisponiveis = []; // começa uma variavel mutavel array com nada, mas que é abastecida pela function criarArray 



function gerarNumero() {
    const minimo = Number(document.querySelector("#input-minimo").value);
    const maximo = Number(document.querySelector("#input-maximo").value);

    // Se o array estiver vazio, cria o array novamente
    if (
    minimo !== ultimoMinimo || 
    maximo !== ultimoMaximo ||
    numerosDisponiveis.length === 0
    // if que serve para verificar se os valores sao os mesmo, se nao forem ele atualiza o array e reinicia o processo de sorteios
    //  assim cirando um novo array caso necessario
) {
    numerosDisponiveis = criarArray(minimo, maximo);
    ultimoMinimo = minimo;
    ultimoMaximo = maximo;
}

    const indiceAleatorioSorteado = Math.floor(Math.random() * numerosDisponiveis.length); 
    //transforma a lista de numeros em lista de indices
    //  ele faz isso multiplicando 0 e 0.999 pela largura da lista,
    //  assim gerando os indices e após isso ele gera um indice aleatorio


    const numeroSorteado = numerosDisponiveis[indiceAleatorioSorteado];
    //essa funcao pega esse indice aleatorio e com base nele pega o numero correspondente na lista

    
    numerosDisponiveis.splice(indiceAleatorioSorteado, 1);
    // ja essa função pega o indice sorteado e retira ele e o numero correspondente, assim impedindo a repetição 


    console.log(numeroSorteado);

    // Se acabaram os números
    if (numerosDisponiveis.length === 0) {
        console.log("Todos os números já foram sorteados. Reiniciando...");
    }
}

function criarArray(minimo, maximo) { //funcao com parametros min e max obtidos que abastece a variavel global
    numerosDisponiveis = [];
    for (let x = minimo; x <= maximo; x++) {
        numerosDisponiveis.push(x);
    }
    return numerosDisponiveis
}

const botao = document.querySelector(".botao-sortear");
botao.addEventListener("click", gerarNumero);