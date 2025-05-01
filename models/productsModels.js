
const products = require('../data/product')
const {v11: uuidv11} = require('uuid')

const {writeDataToFile} = require('./utilis')

 const findAll =() =>{
    return new Promise((resolve,reject)=>{
        resolve(products)

    })
 }
 const findById =(id) =>{
    return new Promise((resolve,reject)=>{
        const product = products.find((p) => p.id === Number(id))
        resolve(product)

    })
 }
 const create =(product) =>{
    return new Promise((resolve,reject)=>{
        const newProduct ={id: uuidv11,...product}
        products.push(newProduct)
        writeDataToFile('./data/product.js',products)
        resolve(newProduct)

    })
 }

 module.exports = {
    findAll,
    findById,
    create
 }