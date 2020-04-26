const users =[
    {id:'1', name:'Peter Parker', email:'peter@marvel.com'},
    {id:'2', name:'Bruce Wayne', email:'bruce@dc.com.br'}
]

export class User{
    static findAll(): Promise<any[]>{
        return Promise.resolve(users)
    }

    static findById(id: string): Promise<any>{
        return new Promise<any>(resolve=>{
            const filtered = users.filter(user=>user.id=== id)
            let user = undefined

            if(filtered.length>0){
                user = filtered[0]
            }
            resolve(user)
        })
    }
}