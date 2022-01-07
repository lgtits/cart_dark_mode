import './scss/main.scss'
console.log('JS loaded!')

const stepControl = document.getElementById('step-control')
const btnControl = document.querySelector('.control-panel')
const steps = stepControl.querySelectorAll('.step')
const formParts = document.querySelectorAll('.part')
const nextBtn = btnControl.querySelector('.next-step')
const prevBtn = btnControl.querySelector('.last-step')

let step = 0

function handleBtnControlClicked(e){
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.next-step') && e.target.innerHTML === '下一步 →'){
    const nextStep = steps[step + 1]
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step +=1
    console.log(step)
  } else if(e.target.matches('.last-step')){
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -=1
    console.log(step)
  }
  setBtnDisabled()
}
function setBtnDisabled() {
  if (step === 0) {
    prevBtn.classList.add('d-none')
    nextBtn.classList.add('first-next-step')
  } else {
    nextBtn.classList.remove('first-next-step')
    prevBtn.classList.remove('d-none')
  }

  if (step === 2) {
    nextBtn.innerHTML = '送出申請'
  } else {
    nextBtn.innerHTML = '下一步 →'
  }
}


btnControl.addEventListener('click', handleBtnControlClicked)