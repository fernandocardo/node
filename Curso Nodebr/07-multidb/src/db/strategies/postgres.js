const ICrud = require('./interfaces/interfaceCrud')

class Postgress extends ICrud{
    constructor() {
        super()
    }

    create(item) {
        console.log('item foi salvo em Postgress')
    }
}

module.exports = Postgress