
//const fatorial = require ('./fatorial')
import {fatorial} from './fatorial'
import * as yargs from 'yargs'

const argumentos = yargs
        .demandOption('num')
        .argv

const num = argumentos.num
console.log(`o fatorial de ${num} é igual a ${fatorial(num)}`)