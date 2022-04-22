/*
OOP GAME app
*/

class Game{
    constructor(){
        this.missed = 0;
        this.phrase = [
            new Phrase('I am on a seafood diet I see food and I eat it'),
            new Phrase('A baleced diet means a cupcake in each hand'),
            new Phrase('I love you'),
            new Phrase('You cannot win this'),
            new Phrase('Humpty Dumpty was pushed')
        ];

        // need to add 5 phrases inside this array:
        this.activePhrase = null;
    }

    gettRandomPhrase(){
        let randomPhrase = Math.floor(Math.random()*this.phrase.length);
        return this.phrase[randomPhrase];
    }

    startGame(){
        // clear UL before game start
        this.reset()

        // hide the start screen overlay
        const overlay = document.getElementById('overlay');
        overlay.style.visibility = 'hidden';

        // call the getRandomPhase()
        let select = this.gettRandomPhrase();
        this.activePhrase = select;
        select.addPhraseToDisplay();
        

        // selected pharse:
        console.log(this.activePhrase);

    }

    handleInteraction(event){
        let button = event.target;
        let letter = event.target.innerText;
        const gameStatus = document.getElementById('game-over-message');

        // Chzck clicked letter :
        if(this.activePhrase.checkLetter(letter)){
            // disable the selected button:
            button.setAttribute('disabled',true);

            // call show matched letter
            this.activePhrase.showMatchedLetter(letter);

            // add chosen class:

            button.classList.add('chosen');

            // call check for win:
            this.checkForwin();
            console.log(this.checkForwin());

            //if check for win return true
            if (this.checkForwin()){
                this.gameOver(this.checkForwin())
            }
            else{
                console.log(button);
                // add wrong cclass 
                button.classList.add('wrong');
                // disable the selected button
                button.setAttribute('disable',true);
                //remove a life 
                this.removeLife();
            }

        }
        }
        checkForwin(){
            const list = document.querySelectorAll('.show');
            const letters = document.querySelectorAll('.letter');

            if(list.length == letters.length){
                return true;
            }
            console.log('ra mabritich')
            console.log(list.length);
            console.log(letters.length);
        }

        removeLife(){
            // Remove a life from the scoreBoard
            if(this.missed<5){
                // grab all image
                const lifes = document.querySelectorAll('.tries img');
                let totalLives = lifes.length - this.missed -1;
                // change the source attribute of the life that needs to be removed:
                lifes[totalLives].setAttribute('src','../images/lostHeart.png');

            }
            // Increase the value of the missed property
            this.missed += 1;
            // chechs if player has remaining lives and ends game if player is out
            if(this.missed == 5){
                this.gameOver();
            }
        }

        gameOver(gamewon){
            const overlay = document.getElementById('overlay');
            const gameStatus = document.getElementById('game-over-message');
            overlay.style.visibility = 'visible';

            // check for win 
            if(gamewon){
                gameStatus.innerText = 'woohoon you won';

            }
            else{
                gameStatus.innerText = 'sorry you lose';
            }

        }

        reset(){
            document.querySelector('UL').innerHTML = '';
            // reset button element :
            const keys = document.querySelectorAll('.key');

            /*
            remove disable attribure from onscreen button 
            removed chosed and wrong lass
             */
            keys.forEach(key => {
                key.removeAttribute('disable');
                key.classList.remove('wrong');
                key.classList.remove('chosen');

            });

            /*
            reset all life heart images
            */

            const hearts = document.querySelectorAll('#scoreboard img');
            hearts.forEach(heart => {
                heart.setAttribute('src', 'images/liveHeart.png')
            });
    }
}
