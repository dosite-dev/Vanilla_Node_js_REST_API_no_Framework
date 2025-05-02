const Product = require('../models/productsModels')

const {getPostsData} =require('../utilis')

// @desc get all products
// @route  GET/api/products
const getAllProducts  =  async (req,res)=>{
    try {
        const products = await Product.findAll()

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
        
    } 
    catch (error) {
        console.log(error)
    }

}
// @desc get single product
// @route  GET/api/product/:id
const getProduct  =  async (req,res,id)=>{
    try {
        const product = await Product.findById(id)
        if(!product){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:"Route not Found"}))

        }
        else{
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(product))

        }

       
        
    } 
    catch (error) {
        console.log(error)
    }

}

// @desc get all products
// @route  POST/api/products/add
const createProduct  =  async (req,res)=>{
    try {
        const body = await getPostsData(req)
        const {title,description,price} = JSON.parse(body)
        const product ={
            title,
            description,
            price

        }
        const newProduct  =  await Product .create(product)

        res.writeHead(201,{'Content-Type':'application/json'})
        res.end(JSON.stringify(newProduct))
        
    } 
    catch (error) {
        console.log(error)
    }

}
module.exports={
    getAllProducts,
    getProduct,
    createProduct
}