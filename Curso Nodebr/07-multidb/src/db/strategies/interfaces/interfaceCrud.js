class NotImplementedException extends Error{
    constructor(){
        super('Not Implemented Exception')
    }
}

class ICrud {
    create(item){
        throw new NotImplementedException()
    }
    read(item){
        throw new NotImplementedException()
    }
    update(item){
        throw new NotImplementedException()
    }
    delete(item){
        throw new NotImplementedException()
    }
    isConnected(){
        throw new NotImplementedException()
    }
}

module.exports = ICrud