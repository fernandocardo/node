const service = require('./service')

async function main(){
    try {
        const  result = await service.obterPokemon('')
        const names = []
        //usando FOR
        console.time('for')
        for(let i=0;i<=result.results.length -1;i++){
            const pokemon = result.results[i]
            names.push(pokemon.name)
        }
        console.timeEnd('for')

        //Usando FOR IN
        console.time('forin')
        for(let i in result.results){
            const pokemon = result.results[i]
            names.push(pokemon.name)
        }        
        console.timeEnd('forin')

        //usando FOR oF
        console.time('forof')
        for(pokemon of result.results){
            names.push(pokemon.name)
        }
        console.timeEnd('forof')

        console.log('names',names)
    } catch (error) {
        console.error('erro interno',error)
    }
}


main()