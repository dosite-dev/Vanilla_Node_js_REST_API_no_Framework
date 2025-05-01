const product = require('../models/productsModels')

const getAllProducts  =  async (req,res)=>{
    try {
        const products = await product.findAll()

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
        
    } 
    catch (error) {
        console.log(error)
    }

}
module.exports={
    getAllProducts
}