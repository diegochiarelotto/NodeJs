const os = require('os')

setInterval(() => {

const { freemem, totalmem} = os
const mem =  parseInt(freemem() / 1024 / 1024)
const total = parseInt(totalmem() / 1024 / 1024)
const percerts = parseInt((mem/total) * 100)

const status = {
    Livre:`${mem} MB`,
    Total: `${total} MB`,
    Usando:`${percerts} %`
}

console.clear()
console.log("== Status do Memória ==")
console.table(status)


}, 1000)

