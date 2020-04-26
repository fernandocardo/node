const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud{
    constructor() {
        super()
    }

    create(item) {
        console.log('item foi salvo em Mongo DB')
    }
}

module.exports = MongoDB