let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 
let placar = 0 


let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')


let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')


let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Como se contrai o Covid-19?",
    alternativaA : "Por meio do Ar.",
    alternativaB : "Por ingestão de alimentos mal higienizados.",
    alternativaC : "Por meio de goticulas espalhadas pela tosse ou espirro.",
    correta      : "Por meio de goticulas espalhadas pela tosse ou espirro.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Onde o uso de máscara é aconselhavel?",
    alternativaA : "Dentro de locais fechados.",
    alternativaB : "Em todo lugar público.",
    alternativaC : "Na academia.",
    correta      : "Em todo lugar público.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual destes métodos foram eficazes no combate previo contra o Covid-19?",
    alternativaA : "Kit-Covid",
    alternativaB : "Exposição a altas temperaturas",
    alternativaC : "Nenhuma das alternativas acima",
    correta      : "Nenhuma das alternativas acima",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Onde ocorreu o primeiro caso no mundo?",
    alternativaA : "Paris.",
    alternativaB : "Nova York.",
    alternativaC : "Wuhan.",
    correta      : "Wuhan.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quais são os principais sintomas da doença?",
    alternativaA : "Diarréia e nauseas.",
    alternativaB : "Febre e Tosse.",
    alternativaC : "Dor no corpo e garganta inflamada.",
    correta      : "Febre e Tosse.",
}
const q6 = {
  numQuestao   : 6,
  pergunta     : "Onde foi localizada a primeira morte por covid-19 no Brasil?",
  alternativaA : "Rio de janeiro.",
  alternativaB : "Salvador.",
  alternativaC : "São Paulo.",
  correta      : "São Paulo.",
}
const q7 = {
  numQuestao   : 7,
  pergunta     : "Quando o brasil atingiu a marca de 500mil mortes por covid?",
  alternativaA : "15/05/2021",
  alternativaB : "19/06/2021",
  alternativaC : "20/05/2021",
  correta      : "19/06/2021",
}
const q8 = {
  numQuestao   : 8,
  pergunta     : "Qual o nome da variante mais agressiva até o momento registrada no Brasil?",
  alternativaA : "Delta.",
  alternativaB : "Alfa.",
  alternativaC : "Beta.",
  correta     : "Delta.",
}
const q9 = {
  numQuestao   : 9,
  pergunta     : "Qual o nome do humorista vitima do covid-19 em 2021 que interpretava 'Dona Herminia'?",
  alternativaA : "Paulo Ricardo.",
  alternativaB : "Paulo Gustavo.",
  alternativaC : "Leandro Hassum.",
  correta      : "Paulo Gustavo.",
}
const q10 = {
  numQuestao   : 10,
  pergunta     : "Onde aconteceu a primeira vacinação no Rio de janeiro?",
  alternativaA : "No Cristo Redentor.",
  alternativaB : "No Corcovado.",
  alternativaC : "Na Fio-Cruz.",
  correta      : "No Cristo Redentor.",
}


const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes


numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC


a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')


function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    

    let certa = questoes[numeroDaQuestao].correta
    

    if(respostaEscolhida == certa) {
        
        pontos += 10 
    } else {
        
    }

    
    placar = pontos
    instrucoes.textContent = "Seu placar atual é de: " + placar

    
    bloquearAlternativas()

    setTimeout(function() {
        
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}
