function playGame(playerInput){
    clearMessages();

    console.log(playerInput);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
        else if(argMoveId == 2){
            return 'papier';
        }
        else if(argMoveId == 3){
            return 'nożyce';
        }
    
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    let PlayerMove = getMoveName(playerInput);

    
 
        function displayResult(argComputerMove,  argPlayerMove){

        console.log('moves', argComputerMove, argPlayerMove);
    
        printMessage('Mój ruch to ' + argComputerMove + ', a Twój ' + argPlayerMove + '.' )

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Komputer wygrywa');
        }else if( argComputerMove =='kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis');
        }
        
        if( argComputerMove == 'papier' && argPlayerMove =='nożyce'){
            printMessage('Ty wygrywasz');
        }else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Komputer wygrywa');
        }else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis');
        }
    
        if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz');
        }else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Komputer wygrywa');
        }else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis');
        }

        }

    
    displayResult(computerMove, PlayerMove)
    /*if (randomNumber == 1) {
        computerMove = 'kamień';
    }
    else if (randomNumber == 2) {
        computerMove = 'papier'
    }
    else if (randomNumber == 3) {
        computerMove = 'nożyce'
    }*/


   /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    
    console.log('Gracz wpisał: ' + playerInput);*/

    
   
    /*if (playerInput == '1') {
        playerMove = 'kamień';
    }
    else if (playerInput == '2') {
        playerMove = 'papier'
    }
    else if (playerInput == '3') {
        playerMove = 'nożyce'
    } */
    /*printMessage('Twój ruch to: ' + playerMove);*/

    /*if(computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Komputer wygrywa!');
    }

    if(computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    else if(computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Komputer wygrywa!');
    }

    if(computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }
    else if(computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Komputer wygrywa!');
    } */

}
document.getElementById('rock').addEventListener('click', function(){
    playGame(1);
    
});
document.getElementById('paper').addEventListener('click', function(){
    playGame(2);
    
  });
document.getElementById('scissors').addEventListener('click', function(){
    playGame(3);
    
  });
