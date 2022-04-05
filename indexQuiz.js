const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const counterElement = document.getElementById('counter')
const scoreElement = document.getElementById('score')
const questionElement = document.getElementById('questions')
const answerBtnsElement = document.getElementById('answer-btn')
let shuffledQuestions, currentQuestionIndex
let score = 0
let counter = 1


startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
	currentQuestionIndex++
	counter++
	counterElement.innerText = "Fråga: " +counter + "/" + questionsLength 
	scoreElement.innerText = "Poäng: " + score + "/" + questionsLength
	if (questions.length == currentQuestionIndex + 1){
		startBtn.innerText = 'Försök igen'
		startBtn.classList.remove('hide')
		counterElement.classList.add('hide')
		questionContainerElement.classList.add('hide')
		
		if (score == currentQuestionIndex - 1){
		scoreElement.innerText = "Slut på frågor! Du är ett säkerhets geni! Du fick " + score + " utav " + questionsLength + " poäng!"
		}
		else if (score >= currentQuestionIndex / 2){
		scoreElement.innerText = "Slut på frågor! Du presterade helt okej! Du fick " + score + " utav " + questionsLength + " poäng!"
		}
		else if (score < currentQuestionIndex / 2) {
		scoreElement.innerText = "Slut på frågor! Du kanske borde plugga lite till... Du fick " + score + " utav " + questionsLength + " poäng!"
		}
	}
	setNextQuestion()
		
})




function startGame() {
	console.log('Quiz Start')
	startBtn.classList.add('hide')
	counterElement.classList.remove('hide')
	scoreElement.classList.remove('hide')
	shuffledQuestions = questions
	currentQuestionIndex = 0
	counter = 1
	score= 0
	counterElement.innerText = "Fråga: " + counter + "/" + questionsLength
	scoreElement.innerText = "Poäng: " + score + "/" + questionsLength
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}

function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])	
}

function showQuestion(question){
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
	const button = document.createElement('button')
	button.innerText = answer.text
	button.classList.add('btn')
	if(answer.correct) {
		button.dataset.correct = answer.correct
	}
	button.addEventListener('click', selectAnswer)
	answerBtnsElement.appendChild(button)

	})
}

function selectAnswer(e) {
	var selectedButton = e.target
	const correct = selectedButton.dataset.correct
	if(correct){
		score++
	}
	setStatusClass(document.body, correct)
	Array.from(answerBtnsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextBtn.classList.remove('hide')
	}
	else {
		counterElement.classList.add('hide')
		startBtn.innerText = 'Restart'
		startBtn.classList.remove('hide')
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if(correct) {
		element.classList.add('correct')
	} 
	else {
		element.classList.add('wrong')
			
		}
	}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


function resetState() {
	nextBtn.classList.add('hide')
	while (answerBtnsElement.firstChild) {
		answerBtnsElement.removeChild(answerBtnsElement.firstChild)
	}
}
//Lägga till nya frågor
const questions = [
		{
	question:'Hur ska kan minska risken för sårbarhet på mobilen? ',
	answers: [
		{text: 'Eftersom att jag rör på mig hela tiden så är jag alltid säker.', correct: false },
		
		{text: 'Sätt på “Do Not Disturb” så minskar du risken och höjer din säkerhet. ', correct: false },
		
		{text: 'Se till att mobilen alltid är i flygplansläge.', correct: false },
		
		{text: ' Ta bort eller inaktivera onödig appar som jag inte använder som kan ge åtkomst.', correct: true }

	]
	},
		{
	question:'Om det kommer upp ett fönster om att du ska uppdatera ditt system. Vad gör du då? ',
	answers: [
		{text: 'Väntar tills jag får godkännande från en IT-expert.', correct: false },
		
		{text: 'Uppdatera direkt för att minska chansen för sårbarheter.', correct: true },
		
		{text: 'Ignorerar då det är farligt att uppdatera hur som helst. ', correct: false },
		
		{text: 'Det är onödigt att klicka på det för uppdatering görs automatiskt ändå.', correct: false }

	]
	},
		{
	question:'I ett scenario så får du ett mail om att du får tillgång 100 000kr men bara om du klickar på en länk och fyller i dina person och bankuppgifter. Vad gör du? ',
	answers: [
		{text: 'Klickar på länken och fyller i alla uppgifter och väntar på att pengarna ska komma in på kontot. ', correct: false },
		
		{text: 'Jag behöver inte pengarna men jag min mormor behöver lite extra så jag skickar vidare mailet till henne. ', correct: false },
		
		{text: 'Ignorerar det och går vidare i livet för att jag vet att det troligtvis är ett scam.', correct: true }
		

	]
	},
		{
	question:'Vilket av följande lösenord är säkrast? ',
	answers: [
		{text: '20080411Elsa', correct: false },
		{text: '123456', correct: false },
		{text: 'Bi%DuIn!So57Lo ', correct: true },
		{text: '1q2w3e4r!', correct: false }

	]
	},
		{
	question:'Hur ofta bör du ta säkerhetskopior (backup) av data och information? ',
	answers: [
		{text: 'En gång i månaden.', correct: false },
		
		{text: 'En gång i veckan. ', correct: false },
		
		{text: 'Varje dag.', correct: true }
	]
	},
		{
	question:'Vilket av följande svar stämmer om antivirusprogram? ',
	answers: [
		{text: 'Antivirusprogram bör uppdateras löpande.', correct: true },
		
		{text: 'Antivirusprogram ger hundraprocentigt skydd. ', correct: false },
		
		{text: 'Med ett antivirusprogram installerat behövs ingen brandvägg. ', correct: false }

	]
	},
	/*Rör ej. Lämna alltid denna frågan tom och sist.*/
			{
	question:'',
	answers: [
		
	]
			}
]
 var questionsLength=questions.length
 questionsLength--

