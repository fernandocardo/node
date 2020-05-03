const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/users',async(req,res)=>{
    
    const {email} = req.body;
    try {

        const users = await User.find()

        return res.send({users})
    } catch (error) {
        return res.status(404).send({error: 'Clientes não encontrados',error})
    }
})


router.get('/users/:id',async(req,res)=>{
    
    const {email} = req.body;
    try {
        const user = await User.findById(req.params.id.toString())
        return res.send({user})
    } catch (error) {
        return res.status(404).send({error: 'Cliente não encontrado',error})
    }
})

router.delete('/users/:id',async(req,res)=>{
    
    const {email} = req.body;
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).send({ message: `usuário id:${req.params.id} foi deletado`})
    } catch (error) {
        return res.status(404).send({error: 'Cliente não encontrado',error})
    }
})

module.exports = app => app.use('/', router)