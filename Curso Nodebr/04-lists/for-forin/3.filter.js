const {obterPokemon} = require('./service')

async function main(){
    try {
        const {
            results
        } = await obterPokemon('')

        const familiar = results.filter(function (item){
            const result = item.name.toLowerCase().indexOf('pikachu') === -1
        })

        const names = familiaPikachu.map((pokemon)=> pokemon.name)
        console.log(names)
        
    } catch (error) {
        
    }
}