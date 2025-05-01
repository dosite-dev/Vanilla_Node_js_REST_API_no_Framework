const products = require('../data/product')
 const findAll =() =>{
    return new Promise((resolve,reject)=>{
        resolve(products)

    })
 }

 module.exports = {
    findAll
 }