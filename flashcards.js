

const term = document.querySelector('.cardTerm')
const definition = document.querySelector('.cardDefinition')
const previousButton = document.querySelector('.previousCard')
const flipButton = document.querySelector('.flipCard')
const nextButton = document.querySelector('.nextCard')

flipButton.addEventListener('click', function() {
    definition.style.display = 'block';
})

let cards = {
    'Which is the only American Football team to go a whole season undefeated, including the Super Bowl?': '1972 Miami Dolphins',
    'Which is the only team to play in every soccer World Cup tournament?': 'Brazil',
    'At the 1976 Olympic Games in Montreal, gymnast Nadia Comaneci became the first gymnast to score a perfect 10. Which country was she representing?': 'Romania',
    'Which American Football team won the first two Super Bowls in 1967 and 1968': 'Green Bay Packers',
    'Which two racing drivers hold the record for the most Formula One World Drivers Championship wins, with seven titles?': 'Michael Schumacher and Lewis Hamilton',
    'Which NFL team appeared in four consecutive Super Bowls between 1991 and 1994 and lost them all?': 'Buffalo Bills',
    'Which boxer was the first to defeat Muhammad Ali in professional boxing?': 'Joe Frazier, 1971',

}

data = Object.entries(cards)

function getRandomTerm() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

flipButton.addEventListener('click', function() {
    definition.style.display = 'block';
})

nextButton.addEventListener('click', function() {
    getRandomTerm()
    definition.style.display = 'none';
})