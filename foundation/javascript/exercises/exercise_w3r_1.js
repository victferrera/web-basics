// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let date = new Date()

console.log(`Today is: ${days[date.getDay()]}`)

let currentTime = formatTime(date)

console.log(`Current time is: ${currentTime}`)

function formatTime(date) {
    let currentHour = date.getHours()
    let currentMinute = date.getMinutes()
    let currentSeconds = date.getSeconds()

    // calcular se o dia está depois do meio dia ou não
    // 00:00 até 11:59 é AM, 12:00 até 00:00 é PM
    let prepand = (currentHour >= 12) ? 'PM' : 'AM'

    // converter a hora para o sistema de 12 horas
    // se a hora atual for maior que 12, remover 12 horas, sobrando a hora atual a partir do meio dia
    currentHour = (currentHour >= 12) ? currentHour - 12 : currentHour

    // lidar com casos especiais quando a hora é 00:00:00
    // caso a hora for 00:00:00 verificar se é meia noite ou meio dia
    if(currentHour === 0 && prepand === 'PM') {
        if(currentMinute == 0 && second == 0) {
            currentHour = 12
            prepand = 'Noon'
        }
        else {
            currentHour = 12
        }
    }


    if(currentHour === 0 && prepand === 'AM') {
        if(currentMinute == 0 && second == 0) {
            currentHour = 12
            prepand = 'Midnight'
        }
        else {
            currentHour = 12
        }
    }

    return `${currentHour}${prepand} : ${currentMinute} : ${currentSeconds}`
}