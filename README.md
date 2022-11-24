# Patterns_ES2
Repositório destinado a elaboração do trabalho de Design Patterns, com o objetivo de explicar o desenvolvimento de um sistema utilizando padrões de desenvolvimento.

## Padrão de Desenvolvimento Strategy
Ele consiste em delegar as responsabilidades adquiridas pelas entidades, atribuindo, portanto, o comportamento. Assim a comunicação entre os objetos é aprimorada, pois há a distribuição das responsabilidades. O objetivo é representar uma operação a ser realizada sobre os elementos de uma estrutura de objetos. O padrão Strategy permite definir novas operações sem alterar as classes dos elementos sobre os quais opera. Ele Define uma família de algoritmos, encapsula cada uma delas e torná-as intercambiáveis. Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

### O padrão tem como habilidade:

* Definir uma família de algoritmos;
* Encapsular cada algoritmo como uma classe;
* Permitir que eles possam ser trocados entre si.
* Permitir que o algoritmo possa variar independentemente dos clientes que o utilizam.

O padrão Strategy sugere que você pegue uma classe que faz algo específico de várias maneiras diferentes e extraia todos esses algoritmos em classes separadas chamadas estratégias.

A classe original, chamada context, deve possuir um campo para armazenar uma referência a uma das estratégias. O context delega o trabalho a um objeto de estratégia vinculado em vez de executá-lo por conta própria.

O context não é responsável por selecionar um algoritmo apropriado para o trabalho. Em vez disso, o cliente passa a estratégia desejada para o context. Funciona com todas as estratégias através de uma mesma interface genérica, que expõe apenas um único método para acionar o algoritmo encapsulado na estratégia selecionada.

Desta forma o context se torna independente de estratégias concretas, então você pode adicionar novos algoritmos ou modificar os existentes sem alterar o código do context ou outras estratégias.

### [Link da apresentação](https://drive.google.com/drive/folders/1l4A98iyVg-E9BE83sciKc3U0zbnsI_be?usp=share_link)
