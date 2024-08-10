// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date()

let day = date.getDate()
let year = date.getFullYear()
let month = date.getMonth() + 1 // mês começa na posição 0

if (day < 10) day = '0' + day
if (month < 10) month = '0' + month

console.log(`${day}/${month}/${year}`)
console.log(`${day}-${month}-${year}`)