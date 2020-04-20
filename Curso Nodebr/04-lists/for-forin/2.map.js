const service = require('./service')
async function main(){
    try {
        const results = await service.obterPokemon('')
        //const names =[]
        // results.results.forEach(function(item){
        //     names.push(item.name)
        // })
        // const names = results.results.map(function (pokemon){
        //     return pokemon.name
        // })
        const names = results.results.map((pokemon)=>pokemon.name)
        console.log('names',names)
        
    } catch (error) {
        console.error('Deu RUIM',error)
    }
}
main()