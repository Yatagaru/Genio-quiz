class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    // escreva aqui o código para ocultar os elementos da questão (procure o nome da função na classe Question)
    question.hide();
    // escreva o código aqui para mudar a cor de fundo
    background("Yellow");
    // escreva o código para exibir um texto indicando o resultado do Quiz
    //text()
    // chame a função estática getContestantInfo() aqui (ela foi criada na classe Contestant)
    Contestant.getContestantInfo();
    
    if(allContestants!= undefined){
      textSize(20)
      fill("Blue")
      text("Jogador que acertou está em verde",130,230)
      var correctAns = "2";
      var y = 300 
          for(var plr in allContestants){
             y+=20;
             
            if(correctAns === allContestants[plr].answer){
              fill("Green")
              
            }else{
               fill("red")
        }
        
        text(allContestants[plr].name + " " + allContestants[plr].answer,100,y)
      }
    }
    /* Se allContestants (todos os competidores) não for indefinido
    - aparece um texto avisando que o competidor que acertou será destacado em verde
    - o nome de cada jogador e sua resposta são escritos na tela
    - o nome do jogador que acertar é destacado em verde 
    ** Caso tenha dificuldade com a última tarefa, olhe as dicas na página do projeto */
    
  }

}
