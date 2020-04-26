const fatorial = require ('./fatorial')
const argumentos = require('yargs')
        .demandOption('num')
        .argv

const num = argumentos.num
console.log(`o fatorial de ${num} é igual a ${fatorial(num)}`)