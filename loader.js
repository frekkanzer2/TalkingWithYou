document.addEventListener('DOMContentLoaded', function() {
    let phrases = [];
    let lastPhraseIndex = -1;

    function loadPhrases() {
        fetch('./media/database.txt')
            .then(response => response.text())
            .then(data => {
                phrases = data.split('\n').filter(phrase => phrase.trim() !== '');
                showRandomPhrase();  // Mostra una frase casuale inizialmente
            })
            .catch(error => console.error('Errore nel caricare il file:', error));
    }

    // Funzione per mostrare una frase casuale
    function showRandomPhrase() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * phrases.length);
        } while (randomIndex === lastPhraseIndex);
        lastPhraseIndex = randomIndex;
        document.querySelector('.text').textContent = phrases[randomIndex];
    }

    document.querySelector('.button').addEventListener('click', showRandomPhrase);

    loadPhrases();
});
