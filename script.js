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
    question: '??Qui??n ser?? la esposa del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Khadija', correct: false },
      { text: '??icha', correct: true },
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
    question: '??Qu?? profeta le comi?? un pez?',
    answers: [
      { text: 'Younes (AS)', correct: true },
      { text: 'Zakaria (AS)', correct: false },
      { text: 'Yaqoub (AS)', correct: false }
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
    question: '??Qu?? profeta muri?? en el cuarto (4??) cielo?',
    answers: [
      { text: 'Idris (AS)', correct: true },
      { text: 'Younes (AS)', correct: false },
    ]
  },
    {
    question: 'Despu??s de los profetas, ??Qui??n entrar?? primero al Para??so?, pista: es un sahabi.',
    answers: [
      { text: 'Abu Bakr Siddiq', correct: true },
      { text: 'Sulaiman', correct: false },
      { text: 'Abu Badr', correct: false }
    ]
  },
  {
    question: 'Qui??nes  son los dos (2) ??ngeles que ense??aron magia en la ??poca de Sulaiman (AS)?',
    answers: [
      { text: 'Harut y Marut', correct: true },
      { text: 'Harut y Faruq', correct: false },
      { text: 'Faruq y Marut', correct: false }
    ]
  },
  {
    question: '??Cu??l era el oficio del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Pastor y Comerciante', correct: true },
      { text: 'Carpintero e Imam', correct: false }
    ]
  },
  {
    question: '??Cu??l es la frase que m??s repet??an los Profetas',
    answers: [
      { text: 'Lailaha ila Allah', correct: true },
      { text: 'Subhana Allah', correct: false },
      { text: 'A??do bi Allah mina chaytani Rajim', correct: false }
    ]
  },
  {
    question: '??Qu?? Profeta fue encarcelado?',
    answers: [
      { text: 'Youssef (AS)', correct: true },
      { text: 'Yaqoub (AS)', correct: false },
      { text: 'Idris (AS)', correct: false }
    ]
  },
  {
    question: '??Qu?? Profeta fue arrojado al Fuego?',
    answers: [
      { text: 'Ibrahim (AS)', correct: true },
      { text: 'Youssef (AS)', correct: false },
      { text: 'Younes (AS)', correct: false }
    ]
  },
  {
    question: '??Qui??n fue el primer Sahabi que hizo el Adhan?',
    answers: [
      { text: 'Bilal (RA)', correct: true },
      { text: 'Zakaria (RA)', correct: false },
      { text: 'Omar (RA)', correct: false }
    ]
  },
  {
    question: '??Cu??l fue la primera (1??) batalla de los musulmanes?',
    answers: [
      { text: 'Batalla Badr', correct: true },
      { text: 'Batalla Yaqoub', correct: false },
      { text: 'Batalla Jibrel', correct: false }
    ]
  },
  {
    question: 'Nombra dos (2) Suart del Cor??n que empiezen por "AlhamduliLah"',
    answers: [
      { text: 'Al-Fatiha y Al-Kahf', correct: true },
      { text: 'Al-Fatiha y Al-Ikhlass', correct: false },
      { text: 'Al-Fatiha y An-Nass', correct: false }
    ]
  },
  {
    question: 'Nombra los Pilares del Islam',
    answers: [
      { text: 'Ashahada, Rezo, Ayunar, Sadaqa (limosna) y Haajj (Peregrinaje; qui??n pueda)', correct: true },
      { text: 'Ashahada, Ayunar, Sadaqa (limosna) y Haajj (Peregrinaje; qui??n pueda)', correct: false },
    ]
  },
  {
    question: 'Nombre los Pilares de la F??',
    answers: [
      { text: 'Creer en Allah y en el ??ltimo d??a', correct: false },
      { text: 'Creer en ??llah , sus ??ngeles, sus libros, sus profetas, el destino y el ??ltimo d??a', correct: true },
    ]
  },
  {
    question: '??Cu??ntos hijos tuvo F??tima (RA), la hija del Profeta Mohamed (SWS)?',
    answers: [
      { text: '6', correct: false },
      { text: '2', correct: false },
      { text: '4', correct: true },
      { text: '3', correct: false }
    ]
  },
  {
    question: '??Qu?? Profeta dese?? estar entre la Ummah del Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Nuh', correct: false },
      { text: 'Moussa', correct: true },
      { text: 'Younes', correct: false }
    ]
  },
  {
    question: '??Qui??n es el guardi??n del Para??so?',
    answers: [
      { text: 'Riduan', correct: true },
      { text: 'Tariq', correct: false },
      { text: 'Yahya', correct: false }
    ]
  },
  {
    question: '??Qui??n el guardi??n del Infierno?',
    answers: [
      { text: 'Yahya', correct: false },
      { text: 'Taqriq', correct: false },
      { text: 'Malik', correct: true }
    ]
  },
  {
    question: '??Cu??l es la puerta de la Jannah por la que entrar??n los ayunantes?',
    answers: [
      { text: 'Bab Al-Maghreb', correct: false },
      { text: 'Bab Rayan', correct: true },
      { text: 'Bab Al-Youssra', correct: false }
    ]
  },
  {
    question: '??Qu?? Sahabi podr?? acceder al Jannah por cualquier puerta?',
    answers: [
      { text: 'Abu Bakr Siddiq (RA)', correct: true },
      { text: 'Youssef (RA)', correct: false },
      { text: 'Abu Khadija (RA)', correct: false }
    ]
  },
  {
    question: '??Qui??n fue la primera mujer en creer en el Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Khadija (RA)', correct: true },
      { text: 'Somaia (RA)', correct: false },
      { text: '??icha (RA)', correct: false }
    ]
  },
  {
    question: '??Qui??n fue la primera mujer m??rtir en el Islam?',
    answers: [
      { text: 'Khadija (RA)', correct: false },
      { text: 'Somaia (RA)', correct: true },
      { text: '??icha (RA)', correct: false }
    ]
  },
  {
    question: '??Qui??n es la madre del Profeta Isa (AS)?',
    answers: [
      { text: 'Khadija (RA)', correct: false },
      { text: 'Somaia (RA)', correct: false },
      { text: 'Mariam (RA)', correct: true }
    ]
  },
  {
    question: 'Nombrra los 2 (dos) ??ngeles que nos preguntar??n en nuestra tumba.',
    answers: [
      { text: 'Nakir y Makir', correct: false },
      { text: 'Munkar y Mukrah', correct: false },
      { text: 'Munkar y Nakir', correct: true }
    ]
  },
  {
    question: '??Qui??n ayud?? a Ibrahim (AS) en la construcci??n de Mekkah?',
    answers: [
      { text: 'Ismael (AS)', correct: true },
      { text: 'Younes (AS)', correct: false },
      { text: 'Yaqoub (AS)', correct: false }
    ]
  },
  {
    question: '??A qu?? edad falleci?? el Profeta Mohamed (SWS)?',
    answers: [
      { text: '48', correct: false },
      { text: '63', correct: true },
      { text: '65', correct: false },
      { text: '67', correct: false }
    ]
  },
  {
    question: '??En qu?? Surat de Cor??n se dice que primero hay que rezar y despu??s sacrificar (cordero) [Fa Sali li Rabika wa Nhar]?',
    answers: [
      { text: 'Surat Al-Kawtar', correct: true },
      { text: 'Surat Al-Rahman', correct: false },
      { text: 'Surat Al-Mulk', correct: false },
      { text: 'Surat Al-Baqara', correct: false }
    ]
  },
  {
    question: '??Qui??n es la primera persona que orden?? la recogida del Cor??n?',
    answers: [
      { text: 'Abu Yaqoub (RA)', correct: false },
      { text: 'Abu Talib (RA)', correct: false },
      { text: 'Abu Bakr Siddiq (RA)', correct: true }
    ]
  },
  {
    question: '??Qui??n contruy?? Kaaba en la Mekkah?',
    answers: [
      { text: 'Ibrahim (AS)', correct: true },
      { text: 'Youssef (AS)', correct: false },
      { text: 'Yaqoub (AS)', correct: false },
      { text: 'Idris (AS)', correct: false }
    ]
  },
  {
    question: '??Qu?? objeto fue creado por Allah?',
    answers: [
      { text: 'L??piz', correct: true },
      { text: 'Papel', correct: false },
      { text: 'Tela', correct: false }
    ]
  },
  {
    question: '??Qu?? d??a ser?? el Juicio Final?',
    answers: [
      { text: 'Jueves', correct: false },
      { text: 'Viernes', correct: true },
      { text: 'S??bado', correct: false }
    ]
  },
  {
    question: '??A qu?? se le conoce como [Haajj peque??o]?',
    answers: [
      { text: 'Haajj sin tawaf', correct: false },
      { text: 'Umarh', correct: true }
    ]
  },
  {
    question: '??En qu?? mes se conquist?? Mekkah?',
    answers: [
      { text: 'Rajab', correct: false },
      { text: 'Ramadan', correct: true },
      { text: 'Muharram', correct: false }
    ]
  },
  {
    question: '??Qu?? edad tiene Profeta Mohamed (SWS) cuando falleci?? su padre?',
    answers: [
      { text: 'A??n no hab??a nacido [gestaci??n]', correct: true },
      { text: '1 a??o', correct: false },
      { text: '3 a??os', correct: false },
      { text: '7 a??os', correct: false }
    ]
  },
  {
    question: '??Qu?? d??a naci?? el Profeta Mohamed (SWS)?',
    answers: [
      { text: 'Domingo', correct: false },
      { text: 'Lunes', correct: true },
      { text: 'Jueves', correct: false },
      { text: 'Viernes', correct: false }
    ]
  },
  {
    question: '??Cu??l es la Surat del Cor??n que se le conoce como el "Coraz??n del Cor??n"?',
    answers: [
      { text: 'Surat Yassin', correct: true },
      { text: 'Surat Al-Kahf', correct: false },
      { text: 'Surat Al-Rahman', correct: false }
    ]
  },
  {
    question: '??En qu?? ciudad naci?? el profeta Muhammad?',
    answers: [
      { text: 'Mekkah (Meca)', correct: true },
      { text: 'Medina', correct: false },
      { text: 'Jeddah', correct: false }
    ]
  },
  {
    question: '??Qui??nes son los primeros cuatro califas despu??s de la muerte del profeta Muhammad?',
    answers: [
      { text: 'Abu Bakr, Umar, Youssef y Ali', correct: false },
      { text: 'Abu Bakr, Umar, Uthman y Ali', correct: true }
    ]
  },
  {
    question: 'La Mezquita "Al-Aqsa" se llama as?? porque es la mezquita;',
    answers: [
      { text: 'Lejana', correct: true },
      { text: 'Bella', correct: false },
      { text: 'Sagrada', correct: false }
    ]
  },
  {
    question: '??Cu??ntas oraciones diarias fueron ordenadas incialmente?',
    answers: [
      { text: '5', correct: false },
      { text: '10', correct: false },
      { text: '25', correct: false },
      { text: '50', correct: true }
    ]
  },
  {
    question: '??Cu??ntas oraciones diarias fueron ordenadas finalmente?',
    answers: [
      { text: '5', correct: true },
      { text: '6', correct: false },
      { text: '7', correct: false }
    ]
  },
  {
    question: '??Qu?? profeta aconsej?? a Muhammad (SWS) que se redujera el n??mero inicial de las oraciones diarias?',
    answers: [
      { text: 'Moussa AS', correct: true },
      { text: 'Isa AS', correct: false },
      { text: 'Ibrahim AS', correct: false }
    ]
  },
  {
    question: '??Con qu?? profeta se encontr?? Muhammad (SWS) en el primer cielo?',
    answers: [
      { text: 'Asam AS', correct: true },
      { text: 'Ibrahim AS', correct: false },
      { text: 'Isa AS', correct: false }
    ]
  },
  {
    question: '??C??mo se llamaba el animal que llev?? al Profeta Muhammad SWS desde Mekkah a Jerusalem?',
    answers: [
      { text: 'Muwtar', correct: false },
      { text: 'Buraq', correct: true },
      { text: 'Qurab', correct: false }
    ]
  },
  {
    question: '??Cu??l de los siguientes no es un atepasado del profeta Muhammad SWS?',
    answers: [
      { text: 'Mudrikah', correct: false },
      { text: 'Hashim', correct: false },
      { text: 'Utba', correct: true },
      { text: 'Qussay', correct: false }
    ]
  },
  {
    question: '??Qu?? sahabiya fue apodada con el nombre de "Al-Batul"?',
    answers: [
      { text: 'Fatima Azahra', correct: true },
      { text: 'Asiha bintu Abu Bakr', correct: false },
      { text: 'Khadija bintu Khuwaylid', correct: false },
      { text: 'Umm Salama', correct: false }
    ]
  },
  {
    question: 'Nombra las 5 primeras Surat del Cor??n',
    answers: [
      { text: 'Al-Fatiha, Al-Baqara, Al-Imran, An-Nissa, Al-Maidah', correct: true },
      { text: 'Al-Fatiha, Al-Baqara, Al-Nass, Al-Falak, Al-Ikhlass', correct: false },
      { text: 'Al-Fatiha, Al-Baqara, Al-Imran, An-Nissa, Al-Kahf', correct: false }
    ]
  },
  {
    question: '??En qu?? Surat del Cor??n es mencionado el profeta Isa AS?',
    answers: [
      { text: 'Al-Anbiya, Al Al-Kahf, Al-Baqara', correct: false },
      { text: 'Al-Baqara, Al-Imran, Maidah', correct: true }
    ]
  },

]