const products = require('../data/product')
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

 module.exports = {
    findAll,
    findById
 }