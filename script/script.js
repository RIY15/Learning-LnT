const display = document.querySelector('.display')
const key = document.querySelectorAll('input')
const operator = ['+', '*', '-', '/', '*','=']
let result = ''

const calculate = (value) => {
    if (value === 'C') result = ''
    else if (value === 'DE') result = result.toString().slice(0, -1)
    else if ((value === '0' && result === '') || (value === '00' && result === '') || (operator.includes(value) && result === '')) return
    else if (value === '=' && result != '') result = eval(result.replace('%', '/100'))
    else result += value
    display.value = result
}

key.forEach(
    (button) => button.addEventListener('click', (e)=> calculate(e.target.dataset.value)
))