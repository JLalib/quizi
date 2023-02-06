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
  },
  {
    question: '¿Quién será la esposa del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Khadija', correct: false },
      { text: 'Áicha', correct: true },
      { text: 'Somaia', correct: false }
    ]
  },
  {
    question: 'Nombra un milagro del Profeta Isa (AS)',
    answers: [
      { text: 'Resucitar fallecidos', correct: true },
      { text: 'Hablar con animales', correct: false },
      { text: 'Predicir el futuro', correct: false }
    ]
  },
  {
    question: '¿Qué profeta le comió un pez?',
    answers: [
      { text: 'Younes (AS)', correct: false },
      { text: 'Zakaria (AS)', correct: true },
      { text: 'Yaqoub (AS)', correct: true }
    ]
  },
  {
    question: 'Nombra un milagro del Profeta Sulaiman (AS)',
    answers: [
      { text: 'Resucitar fallecidos', correct: false },
      { text: 'Hablar con animales', correct: true },
      { text: 'Predicir el futuro', correct: false }
    ]
  },
  {
    question: '¿Qué profeta murió en el cuarto (4º) cielo?',
    answers: [
      { text: 'Idris (AS)', correct: true },
      { text: 'Younes (AS)', correct: false },
    ]
  },
    {
    question: 'Después de los profetas, ¿Quién entrará primero al Paraíso?, pista: es un sahabi.',
    answers: [
      { text: 'Abu Bakr Siddiq', correct: true },
      { text: 'Sulaiman', correct: false },
      { text: 'Abu Badr', correct: false }
    ]
  },
  {
    question: 'Quién son los dos (2) ángeles que enseñaron magia en la época de Sulaiman (AS)?',
    answers: [
      { text: 'Harut y Marut', correct: true },
      { text: 'Harut y Faruq', correct: false },
      { text: 'Faruq y Marut', correct: false }
    ]
  },
  {
    question: '¿Cuál era el oficio del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Pastor y Comerciante', correct: true },
      { text: 'Carpintero e Imam', correct: false }
    ]
  },
  {
    question: '¿Cuál es la frase que más repetían los Profetas',
    answers: [
      { text: 'Lailaha ila Allah', correct: true },
      { text: 'Subhana Allah', correct: false },
      { text: 'Aúdo bi Allah mina chaytani Rajim', correct: false }
    ]
  },
  {
    question: '¿Qué Profeta fue encarcelado?',
    answers: [
      { text: 'Youssef (AS)', correct: true },
      { text: 'Yaqoub (AS)', correct: false },
      { text: 'Idris (AS)', correct: false }
    ]
  },
  {
    question: 'Qué Profeta fue arrojado al Fuego?',
    answers: [
      { text: 'Ibrahim (AS)', correct: true },
      { text: 'Youssef (AS)', correct: false },
      { text: 'Younes (AS)', correct: false }
    ]
  },
  {
    question: '¿Quién fue el primer Sahabi que hizo el Adhan?',
    answers: [
      { text: 'Bilal (RA)', correct: true },
      { text: 'Zakaria (RA)', correct: false },
      { text: 'Omar (RA)', correct: false }
    ]
  },
  {
    question: 'Cuál fue la primera (1ª) batalla de los musulmanes?',
    answers: [
      { text: 'Batalla Badr', correct: true },
      { text: 'Batalla Yaqoub', correct: false },
      { text: 'Batalla Jibrel', correct: false }
    ]
  },
  {
    question: 'Nombra uno de los que estarán bajo la sombra del Rahman en el día del Juicio Final',
    answers: [
      { text: 'respuesta', correct: true },
      { text: 'respuesta', correct: false },
      { text: 'respuesta', correct: false }
    ]
  },
  {
    question: 'Nombra dos (2) Suart del Corán que empiezen por "AlhamduliLah"',
    answers: [
      { text: 'Al-Fatiha y Al-Kahf', correct: true },
      { text: 'Al-Fatiha y Al-Ikhlass', correct: false },
      { text: 'Al-Fatiha y An-Nass', correct: false }
    ]
  },
  {
    question: 'Nombra los Pilares del Islam',
    answers: [
      { text: 'Ashahada, Rezo, Ayunar, Sadaqa (limosna) y Haajj (Peregrinaje; quién pueda)', correct: true },
      { text: 'Ashahada, Ayunar, Sadaqa (limosna) y Haajj (Peregrinaje; quién pueda)', correct: false },
    ]
  },
  {
    question: 'Nombre los Pilares de la Fé',
    answers: [
      { text: 'Creer en Allah y en el último día', correct: false },
      { text: 'Creer en Állah , sus ángeles, sus libros, sus profetas, el destino y el último día', correct: true },
    ]
  },
  {
    question: '¿Cuántos hijos tuvo Fátima (RA), la hija del Profeta Mohamed (SWS)?',
    answers: [
      { text: '6', correct: false },
      { text: '2', correct: false },
      { text: '4', correct: true },
      { text: '3', correct: false }
    ]
  },
  {
    question: '¿Qué Profeta deseó estar entre la Ummah del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Nuh', correct: false },
      { text: 'Moussa', correct: true },
      { text: 'Younes', correct: false }
    ]
  },
  {
    question: '¿Quién es el guardián del Paraíso?',
    answers: [
      { text: 'Riduan', correct: true },
      { text: 'Tariq', correct: false },
      { text: 'Yahya', correct: false }
    ]
  },
  {
    question: '¿Quién el guardián del Infierno?',
    answers: [
      { text: 'Yahya', correct: false },
      { text: 'Taqriq', correct: false },
      { text: 'Malik', correct: true }
    ]
  },
  {
    question: '¿Cuál es la puerta de la Jannah por la que entrarán los ayunantes?',
    answers: [
      { text: 'Bab Al-Maghreb', correct: false },
      { text: 'Bab Rayan', correct: true },
      { text: 'Bab Al-Youssra', correct: false }
    ]
  },
  {
    question: '¿Qué Sahabi podrá acceder al Jannah por cualquier puerta?',
    answers: [
      { text: 'Abu Bakr Siddiq (RA)', correct: true },
      { text: 'Youssef (RA)', correct: false },
      { text: 'Abu Khadija (RA)', correct: false }
    ]
  },
  {
    question: '¿Quién fue la primera mujer en creer en el Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Khadija (RA)', correct: true },
      { text: 'Somaia (RA)', correct: false },
      { text: 'Áicha (RA)', correct: false }
    ]
  },
  {
    question: '¿Quién fue la primera mujer mártir en el Islam?',
    answers: [
      { text: 'Khadija (RA)', correct: false },
      { text: 'Somaia (RA)', correct: true },
      { text: 'Áicha (RA)', correct: false }
    ]
  },
  {
    question: '¿Quién es la madre del Profeta Isa (AS)?',
    answers: [
      { text: 'Khadija (RA)', correct: false },
      { text: 'Somaia (RA)', correct: false },
      { text: 'Mariam (RA)', correct: true }
    ]
  },
  {
    question: 'Nombrra los 2 (dos) ángeles que nos preguntarán en nuestra tumba.',
    answers: [
      { text: 'Nakir y Makir', correct: false },
      { text: 'Munkar y Mukrah', correct: false },
      { text: 'Munkar y Nakir', correct: true }
    ]
  },
  {
    question: '¿Quién ayudó a Ibrahim (AS) en la construcción de Mekkah?',
    answers: [
      { text: 'Ismael (AS)', correct: true },
      { text: 'Younes (AS)', correct: false },
      { text: 'Yaqoub (AS)', correct: false }
    ]
  },
  {
    question: '¿A qué edad falleció el Profeta Mohamed (SWS)?',
    answers: [
      { text: '48', correct: false },
      { text: '63', correct: true },
      { text: '65', correct: false },
      { text: '67', correct: false }
    ]
  },
  {
    question: '¿En qué Surat de Corán se dice que primero hay que rezar y después sacrificar (cordero) [Fa Sali li Rabika wa Nhar]?',
    answers: [
      { text: 'Surat Al-Kawtar', correct: true },
      { text: 'Surat Al-Rahman', correct: false },
      { text: 'Surat Al-Mulk', correct: false },
      { text: 'Surat Al-Baqara', correct: false }
    ]
  },
  {
    question: '¿Quién es la primera persona que ordenó la recogida del Corán?',
    answers: [
      { text: 'Abu Yaqoub (RA)', correct: false },
      { text: 'Abu Talib (RA)', correct: false },
      { text: 'Abu Bakr Siddiq (RA)', correct: true }
    ]
  },
  {
    question: '¿Quién contruyó Kaaba en la Mekkah?',
    answers: [
      { text: 'Ibrahim (AS)', correct: true },
      { text: 'Youssef (AS)', correct: false },
      { text: 'Yaqoub (AS)', correct: false },
      { text: 'Idris (AS)', correct: false }
    ]
  },
  {
    question: '¿Quién fue la primera esposa del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'respuesta', correct: true },
      { text: 'respuesta', correct: false },
      { text: 'respuesta', correct: false }
    ]
  },
  {
    question: '¿Qué objeto fue creado por Allah?',
    answers: [
      { text: 'Lápiz', correct: true },
      { text: 'Papel', correct: false },
      { text: 'Tela', correct: false }
    ]
  },
  {
    question: '¿Qué día será el Juicio Final?',
    answers: [
      { text: 'Jueves', correct: false },
      { text: 'Viernes', correct: true },
      { text: 'Sábado', correct: false }
    ]
  },
  {
    question: '¿A qué se le conoce como [Haajj pequeño]',
    answers: [
      { text: 'Haajj sin tawaf', correct: false },
      { text: 'Umarh', correct: true }
    ]
  },
  {
    question: '¿En qué mes se conquistó Mekkah?',
    answers: [
      { text: 'Rajab', correct: false },
      { text: 'Ramadan', correct: true },
      { text: 'Muharram', correct: false }
    ]
  },
  {
    question: '¿Qué edad tiene Profeta Mohamed (SWS) cuando falleció su padre?',
    answers: [
      { text: 'Aún no había nacido [gestación]', correct: true },
      { text: '1 año', correct: false },
      { text: '3 años', correct: false },
      { text: '7 años', correct: false }
    ]
  },
  {
    question: '¿Qué día nació el Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Domingo', correct: false },
      { text: 'Lunes', correct: true },
      { text: 'Jueves', correct: false },
      { text: 'Viernes', correct: false }
    ]
  },
  {
    question: '¿Cuál es la Surat del Corán que se le conoce como el "Corazón del Corán"?',
    answers: [
      { text: 'Surat Yassin', correct: true },
      { text: 'Surat Al-Kahf', correct: false },
      { text: 'Surat Al-Rahman', correct: false }
    ]
  },
]
