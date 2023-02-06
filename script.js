const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '¿Cuál fue la causa de la muerte del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Envenenado', correct: true },
      { text: 'Suicidio', correct: false },
      { text: 'Muerte natural', correct: false }
    ]
  }
  {
    question: '¿Quién será la esposa del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Khadija', correct: false },
      { text: 'Áicha', correct: true },
      { text: 'Somaia', correct: false }
    ]
  }
  {
    question: 'Nombra un milagro del Profeta Isa (AS)',
    answers: [
      { text: 'Resucitar fallecidos', correct: true },
      { text: 'Hablar con animales', correct: false },
      { text: 'Predicir el futuro', correct: false }
    ]
  }
  {
    question: '¿Qué profeta le comió un pez?',
    answers: [
      { text: 'Younes (AS)', correct: false },
      { text: 'Zakaria (AS)', correct: true },
      { text: 'Yaqoub (AS)', correct: true }
    ]
  }
  {
    question: 'Nombra un milagro del Profeta Sulaiman (AS)',
    answers: [
      { text: 'Resucitar fallecidos', correct: false },
      { text: 'Hablar con animales', correct: true },
      { text: 'Predicir el futuro', correct: false }
    ]
  }
  {
    question: '¿Qué profeta murió en el cuarto (4º) cielo?',
    answers: [
      { text: 'Idris (AS)', correct: true },
      { text: 'Younes (AS)', correct: false },
    ]
  }
    {
    question: 'Después de los profetas, ¿Quién entrará primero al paraíso?, pista: es un sahabi.',
    answers: [
      { text: 'Abu Bakr Siddiq', correct: true },
      { text: 'Sulaiman', correct: false },
      { text: 'Abu Badr', correct: false }
    ]
  }
    {
    question: 'Quién son los dos (2) ángeles que enseñaron magia en la época de Sulaiman (AS)?',
    answers: [
      { text: 'Harut y Marut', correct: true },
      { text: 'Harut y Faruq', correct: false },
      { text: 'Faruq y Marut', correct: false }
    ]
  }
]
