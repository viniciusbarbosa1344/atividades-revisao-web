let button = document.querySelector('button')
let table = document.querySelector('table')

let isShowing = false

button.addEventListener('click', () => {
    if (isShowing == true) {
        isShowing == false
        table.style.display = 'none'
    }else {
        isShowing == false
        table.style.display = 'block'
    }
})