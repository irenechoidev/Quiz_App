// correctAnswers 에는 각 문제의 정답을 순서대로 넣어 놓는다
const correctAnswers = ['B', 'A', 'B', 'B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let score = 0
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ]

  // check the answers
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })

  // show the result
  scrollTo(0, 0)
  result.classList.remove('d-none')

  let output = 0
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    if (output === score) {
      clearInterval(timer)
    } else {
      output++
    }
  }, 10)
})
