// var listaPerguntas = [
//   "Qual é o primeiro filme produzido pelo Studio Ghibli?",
//   "Quem é o fundador do Studio Ghibli?",
//   "De que filme eu sou? Meu nome é calicifer",
//   'Em "O Castelo Animado", qual é a maldição que atinge o protagonista, Howl?',
//   "Qual filme do Studio Ghibli explora a relação entre humanos e deuses da floresta?",
//   'Quem é o diretor de "O Conto da Princesa Kaguya" (2013)?',
//   "Qual filme do Studio Ghibli apresenta a personagem Marnie?",
//   'Em "Túmulo dos Vagalumes" (1988), qual é o relacionamento entre Seita e Setsuko?',
//   'Qual é o tema principal de "Porco Rosso" (1992)?',
//   'Quem é a protagonista de "Whisper of the Heart" (1995)?',
// ];

// // var listaRespostasCertas = ['Nausicaä do Vale do Vento - (1984)','Hayao Miyazaki e Isao Takahata.','O castelo Animado',
// // 'Ele se transforma em um pássaro humano','Princesa Mononoke - (1997)','Isao Takahata','When Marnie Was There','Irmãos',
// // 'A aviação e a busca pela paz','Shizuku Tsukishima'];

// var listaQuestoes = [

//   [`<div class="perguntas">Qual é o primeiro filme produzido pelo Studio Ghibli?</div>
//     <div id="respostas" class="respostas">
//     <button id="alternativa1" onclick="respostaCerta(),alterarCores()">Nausicaä do Vale do Vento (1984)</button>
//     <button id="alternativa2" onclick="alterarCores()">O Castelo Animado (2004)</button>
//     <button id="alternativa3" onclick="alterarCores()">Meu Vizinho Totoro (1988)</button>
//     <button id="alternativa4" onclick="alterarCores()">A Viagem de Chihiro (2001)</button></div>`,
//   ],

//   [`<div class="perguntas">Quem é o fundador do Studio Ghibli?</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa2" onclick="alterarCores()">Isao Takahata</button>
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">Hayao Miyazaki e Isao Takahata</button>
//   <button id="alternativa3" onclick="alterarCores()">Hayao Miyazaki</button>
//   <button id="alternativa4" onclick="alterarCores()">Toshio Suzuki</button></div>`
//   ],

//   [`<div class="perguntas">De que filme eu sou? Meu nome é calicifer</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa2" onclick="alterarCores()">A Princesa Mononoke (1997)</button>
//   <button id="alternativa3" onclick="alterarCores()">O Serviço de Entregas da Kiki (1989)</button>
//   <button id="alternativa4" onclick="alterarCores()">O Conto da Princesa Kaguya (2013)</button>
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">O castelo Animado</button></div>`
  
//   ],

//   [`<div class="perguntas">Em "O Castelo Animado", qual é a maldição que atinge o protagonista, Howl?</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa2" onclick="alterarCores()">Se transformar em uma árvore</button>
//   <button id="alternativa3" onclick="alterarCores()">Encolher até ficar do tamanho de uma formiga</button>
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">Ele se transforma em um pássaro humano</button>
//   <button id="alternativa4" onclick="alterarCores()">TA morte</button></div>`
//   ],

//   [`<div class="perguntas">"Qual filme do Studio Ghibli explora a relação entre humanos e deuses da floresta?</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">Princesa Mononoke - (1997)</button>
//   <button id="alternativa2" onclick="alterarCores()">Meu Vizinho Totoro (1988)</button>
//   <button id="alternativa3" onclick="alterarCores()">Omoide no Mânî (2014)</button>
//   <button id="alternativa4" onclick="alterarCores()">Ponyo - Uma Amizade que Veio do Mar (2008)</button></div>`
//   ],

//   [`<div class="perguntas">Quem é o diretor de "O Conto da Princesa Kaguya" (2013)?</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa2" onclick="alterarCores()">Isao Takahata</button>
//   <button id="alternativa3" onclick="alterarCores()">Hayao Miyazaki</button>
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">Makoto Shinkai</button>
//   <button id="alternativa4" onclick=">Toshio Suzuki</button></div>`],

//   [`<div class="perguntas">Qual filme do Studio Ghibli apresenta a personagem Marnie?</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa2" onclick="alterarCores()">A Viagem de Chihiro (2001)</button>
//   <button id="alternativa3" onclick="alterarCores()">Túmulo dos Vagalumes (1988)</button>
//   <button id="alternativa4" onclick="alterarCores()">O Serviço de Entregas da Kiki</button>
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">When Marnie Was There</button></div>`
//   ],

//   [`<div class="perguntas">Em "Túmulo dos Vagalumes" (1988), qual é o relacionamento entre Seita e Setsuko?</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa2" onclick="alterarCores()">Primos</button>
//   <button id="alternativa3" onclick="alterarCores()">Amigos</button>
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">Irmãos</button>
//   <button id="alternativa4" onclick="alterarCores()">Conhecidos</button></div>`],

//   [`<div class="perguntas">Qual é o tema principal de "Porco Rosso" (1992)?</div>
//     <div id="respostas" class="respostas">
//     <button id="alternativa1" onclick="respostaCerta(),alterarCores()">A aviação e a busca pela paz</button>
//     <button id="alternativa2" onclick="alterarCores()">Exploração espacial</button>
//     <button id="alternativa3" onclick="alterarCores()">A busca por tesouros perdidos</button>
//     <button id="alternativa4" onclick="alterarCores()">Ajudar a mineira</button></div>`
//   ],

//   [`<div class="perguntas">Quem é a protagonista de "Whisper of the Heart" (1995)?</div>
//   <div id="respostas" class="respostas">
//   <button id="alternativa2" onclick="alterarCores()">Kiki</button>
//   <button id="alternativa1" onclick="respostaCerta(),alterarCores()">Shizuku Tsukishima</button>
//   <button id="alternativa3" onclick="alterarCores()">Sophie</button>
//   <button id="alternativa4" onclick="alterarCores()">Kaguya</button></div>`],
// ];

// var Total = 0;
// var containerQuiz = document.getElementById("containerQuiz");

// function comecarJogo() {
//   for (var posicao = 0; posicao < listaQuestoes.length; posicao += 1){
//     containerQuiz.innerHTML = listaQuestoes[posicao];
//   }
// }

// function respostaCerta(){
//     Total +=1;

// }

// function alterarCores(){
//     alternativa1.style.backgroundColor = "green";
//     alternativa2.style.backgroundColor = "red";
//     alternativa3.style.backgroundColor = "red";
//     alternativa4.style.backgroundColor = "red";
// }