// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    
    return array.length
    
 }

// // EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// // EXERCÍCIO 03
 function retornaArrayOrdenado(array) {

  return array.sort((a,b)=>{
    if (a>b) return 1;
    if(a<b) return -1;  
    return 0
})
}


// EXERCÍCIO 04

function retornaNumerosPares(array) {
   const pares = []
   for (let p of array){
        if(p % 2 === 0 ){
          pares.push(p)

        }
   }
   return pares
}


// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
//não consegui
 
  
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

  return Math.max.apply(null,array)
   
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  
  // não consigo
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
  let primeirosPares = [];
    for (let i = 0; primeirosPares.length < n; i++) {
        if (i % 2 == 0) {
            primeirosPares.push(i);
        }
    }
    return primeirosPares;
}
retornaNPrimeirosPares(5);


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 
  const lado1 = ladoA
  const lado2 = ladoB
  const lado3 = ladoC

  if(lado1 < (lado2+lado3) && lado2 < (lado1+lado3) && lado3 < (lado1+lado2)){

      if(lado1 === lado2 && lado2 === lado3){
        return "Equilátero";
      }else if(lado1 === lado2 || lado1 === lado3 || lado3 === lado2){
        return "Isósceles";
      }else {
        return "Escaleno";
      }

    }
}
  

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  // Isso está errado, mas foi como consegui fazer
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}