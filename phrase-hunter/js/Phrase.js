class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        //str.match(/[a-z]/i
        let ul = document.querySelector('UL'),
            li;
        let displayPhrase = this.phrase;
        for (let i = 0; i < displayPhrase.length; i++) {
            if (displayPhrase[i].match(/[a-z]/i)) {
                li = document.createElement('LI');
                li.classList.add('hide', 'letter');
                li.innerText = displayPhrase[i];
                ul.appendChild(li);
            } else if (displayPhrase[i].match('')) {
                li = document.createElement('LI');
                li.classList.add('space');
                li.innerText = displayPhrase[i];
                ul.appendChild(li);
            }
        }
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        let keyboard = document.getElementById('qwerty');
        //check if button is clicked
        if (this.phrase.includes(letter)) {
            return true;
            // console.log(true)
            // this.showMatchedLetter(letter)
        } else {
            return false;
        }
    }

    showMatchedLetter(letter) {
        const list = document.querySelectorAll('li');
        // console.log(list)
        for (let li of list) {
            if (letter === li.innerText) {
                // console.log('true')
                li.classList.add('show');
                li.classList.remove('hide')
            }
        }
    }
}