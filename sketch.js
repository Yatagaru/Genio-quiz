var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  //quando o número de participantes é igual a 2, o estado de jogo muda
  if(contestantCount === 2){
    quiz.update(1);

  }
  
  //quando o estado de jogo é igual a 1, a função play() é ativada
  if(gameState === 1){
    clear();
    quiz.play();
  }

  //Sua missão: ir à classe Quiz e definir a função play, que mostra quem acertou ou errou o quiz
}
