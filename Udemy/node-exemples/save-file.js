const fs = require('fs')

const argumentos = require('yargs')
        .alias('a','arquivo')
        .alias('c','conteudo')
        .demandOption('arquivo')
        .demandOption('conteudo')
        .argv

const arquivo = argumentos.arquivo
const conteudo = argumentos.conteudo

fs.writeFile(arquivo,conteudo, (error)=>{
    if(error) throw error
    
    console.log(`Arquivo ${arquivo} foi salvo com sucesso.`)
})