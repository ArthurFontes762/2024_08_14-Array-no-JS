// Exemplo de formas de criação de Vetor

var alunos = ["Lucas","Mariana","Diego","Bruna","Everson"];
console.log(alunos); // Colocando console.log(alunos[0]) você irá ver a posição que está declarado respectivamente.

let frutas = new Array(); // Criando uma array sem nenhum elemento
frutas[0] = 'Maçã';
frutas[1] = 'Melancia';
frutas[2] = 'Abacaxi';
frutas[3] = 'Mamão';
frutas[4] = 'Morango';
console.log(frutas);

// Agora irei adicionar um item no final dentro da Array de frutas usando push

frutas.push('Laranja');
console.log(frutas);

// Agora irei remover um item no final dentro da Array de frutas usando pop

frutas.pop();
console.log(frutas); // Neste caso a Laranja foi a ultima coisa que foi implementada na Array

// Agora irei remover um item no começo dentro da Array de frutas usando shift

frutas.shift();
console.log(frutas); // Neste caso a Maçã foi eliminada por estar na primeira posição

// Agora irei adicionar um item no começo dentro da Array de frutas usando unshift

frutas.unshift('Amora');
console.log(frutas);

// Agora irei localizar um item de acordo com a posição dele atualmente

var posicao = frutas.indexOf('Mamão');
console.log(posicao); // Neste caso estou localizando a posição do Mamão na lista de frutas atualmente