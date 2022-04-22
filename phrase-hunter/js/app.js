// Project 4 : OOP Game App



let game;
document.getElementById('btn_reset').addEventListener('click', ()=> {
    game = new Game();
    game.startGame();
    console.log('oui clikciti')
    // game.checkForwin();
    // game.handleInteraction();

})

const buttons = document.querySelectorAll('.key');

buttons.forEach(button => {
    button.addEventListener('click',(event)=> {
        game.handleInteraction(event)
    })

});

//  click, addEventListener('click', (event)=>{
//  game.handleInteraction(event)
//})
