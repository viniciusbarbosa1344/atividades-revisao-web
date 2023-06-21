var num1 =  document.getElementById('input_n1')
var num2 =  document.getElementById('input_n2')

var SomaBotao = document.getElementById('button_sum')

var result = document.getElementById('result')

function soma() {
    result.innerText = Number(num1.value) + Number(num2.value)
}

SomaBotao.addEventListener('click', soma)