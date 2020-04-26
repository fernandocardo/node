// class NotImplementedException extends Error{
//     constructor(){
//         super('Not Implemented Exception')
//     }
// }

// class ICrud {
//     create(item){
//         throw new NotImplementedException()
//     }
//     read(item){
//         throw new NotImplementedException()
//     }
//     update(item){
//         throw new NotImplementedException()
//     }
//     delete(item){
//         throw new NotImplementedException()
//     }
// }

// class MongoDB extends ICrud{
//     constructor() {
//         super()
//     }

//     create(item) {
//         console.log('item foi salvo em Mongo DB')
//     }
// }

// class Postgress extends ICrud{
//     constructor() {
//         super()
//     }

//     create(item) {
//         console.log('item foi salvo em Postgress')
//     }
// }

// class ContextStrategy{
//     constructor(strategy){
//         this._database = strategy
//     }

//     create(item){
//         return this._database.create(item)
//     }

//     read(item){
//         return this._database.read(item)
//     }

//     update(id,item){
//         return this._database.update(id,item)
//     }

//     delete(item){
//         return this._database.delete(id)
//     }

// }

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()


const contextPostgress = new ContextStrategy(new Postgress())
contextPostgress.create()

contextMongo().read()