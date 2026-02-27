
# 🎲 Sorteador de Números Sem Repetição

Um sorteador de números aleatórios baseado em intervalo definido pelo usuário, que garante que nenhum número seja repetido até que todos os valores sejam sorteados.

---

## 📌 Funcionalidades

* Define um número mínimo e máximo
* Gera números aleatórios dentro do intervalo
* Impede repetição até esgotar todos os números
* Reinicia automaticamente quando todos forem sorteados
* Atualiza automaticamente se o intervalo for alterado

---

## 🧠 Como Funciona

1. O usuário define um intervalo (mínimo e máximo).
2. Um array é criado contendo todos os números do intervalo.
3. A cada clique:

   * Um índice aleatório é gerado.
   * O número correspondente é selecionado.
   * O número é removido do array com `splice`.
4. Quando o array fica vazio, ele é recriado automaticamente.

---

## 🏗️ Estrutura Principal do Código

### Variáveis Globais

```js
let ultimoMinimo;
let ultimoMaximo;
let numerosDisponiveis = [];
```

Essas variáveis controlam:

* O último intervalo usado
* A lista de números ainda disponíveis

---

### Função `gerarNumero()`

Responsável por:

* Ler os valores dos inputs
* Verificar se o intervalo mudou
* Criar ou recriar o array quando necessário
* Sortear um número aleatório
* Remover o número sorteado
* Exibir o resultado no console

---

### Função `criarArray(minimo, maximo)`

Cria e retorna um array com todos os números dentro do intervalo informado.

```js
function criarArray(minimo, maximo) {
    let lista = [];
    for (let x = minimo; x <= maximo; x++) {
        lista.push(x);
    }
    return lista;
}
```

---

## 🚀 Como Usar

1. Insira o valor mínimo.
2. Insira o valor máximo.
3. Clique no botão "Sortear".
4. O número será exibido no console.
5. Continue clicando até todos os números serem sorteados.

---

## ⚙️ Tecnologias Utilizadas

* HTML
* CSS
* JavaScript (DOM + lógica de controle de estado)

---

## 💡 Possíveis Melhorias Futuras

* Exibir o número sorteado na interface ao invés do console
* Mostrar histórico dos números já sorteados
* Adicionar validação para evitar mínimo maior que máximo
* Adicionar botão de reset manual
* Implementar animação de sorteio

---

## 📚 Conceitos Trabalhados

* Manipulação do DOM
* Eventos com `addEventListener`
* Arrays
* Método `splice`
* Geração de números aleatórios
* Controle de estado
* Escopo de variáveis
* Operadores lógicos (`||`, `!==`)

---

Projeto ideal para praticar lógica de programação e manipulação de arrays em JavaScript.
