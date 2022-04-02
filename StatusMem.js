const os = require('os')
const { json } = require('stream/consumers')
const log = require ('./logger')
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

log(`${JSON.stringify(status)}\n`);


}, 1000)

