const axios = require('axios')
const URL ='https://pokeapi.co/api/v2/pokemon'

async function obterPokemon(nome) {
    const url = `${URL}/${nome}`
    const response = await axios.get(url)
    return response.data
}

// obterPokemon('pikachu')
// .then( function (resultado){
//     console.log('resultado',resultado)
// })
// .catch(function (error){
//     console.log('DEU RUIM', error)
// } )
module.exports = {
    obterPokemon
}