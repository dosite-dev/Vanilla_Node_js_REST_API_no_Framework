const http = require('http')
const {getAllProducts,getProduct,createProduct,updateProduct} = require('./controllers/productsControllers')
const PORT = process.env.PORT || 5000
const server = http.createServer((req,res) => {
    if(req.url === '/api/products' && req.method === 'GET'){
        getAllProducts(req,res)
   
}
else if(req.url.match('/api/products/([0-9])+') && req.method ==='GET'){
    const id = req.url.split("/")[3]
    getProduct(req,res,id)

}
else if(req.url === '/api/products/add' && req.method === 'POST'){
    createProduct(req,res)
}
else if(req.url.match('/api/products/update/([0-9])+') && req.method ==='PUT'){
    const id = req.url.split("/")[4]
    console.log(id)
    updateProduct(req,res,id)

}
else{
    res.writeHead(404,{'Content-Type':'application/json'})
   res.end(JSON.stringify({message:'Router not found'}))
}
})


server.listen(PORT,() =>{
    console.log(`server is listening on port ${PORT}`)
})