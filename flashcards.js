

const term = document.querySelector('.term')
const definition = document.querySelector('.cardDefinition')
const previousButton = document.querySelector('.previousCard')
const flipButton = document.querySelector('.flipCard')
const nextButton = document.querySelector('.nextCard')

previousButton.addEventListener('click', function() {
    console.log('You clicked the Previous Card Button')
})

flipButton.addEventListener('click', function() {
    definition.style.display = 'block';
})

nextButton.addEventListener('click', function() {
    console.log('You clicked the Next Card Button')
})



questions = []
answers = []



// Hide both #term and #answer from view





// show card with term in the card and not answer - click default to start the first term

addEventListener

// click the showAnswer button and transition card to answerCard

addEventListener


// click the #nextCard button and transition card to next card



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

console.log(data[0][0])

function getRandomTerm() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = ``
}

