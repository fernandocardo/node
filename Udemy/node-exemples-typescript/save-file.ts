// //const fs = require('fs')
// import * as fs from 'fs'
// import * as yargs from 'yargs'

// const argumentos = yargs
//         .alias('a','arquivo')
//         .alias('c','conteudo')
//         .demandOption('arquivo')
//         .demandOption('conteudo')
//         .argv

// const arquivo = argumentos.arquivo
// const conteudo = argumentos.conteudo

// fs.writeFile(arquivo,conteudo, (error)=>{
//     if(error) throw error
    
//     console.log(`Arquivo ${arquivo} foi salvo com sucesso.`)
// })
import * as fs from 'fs'
import * as yargs from 'yargs'

const argv = yargs
      .alias('f', 'filename')
      .alias('c', 'content')
      .demandOption('filename')
      .demandOption('content')
      .argv

fs.writeFile((argv.filename).toString(), argv.content, (error)=>{
    if(error) throw error
    console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`)
})
