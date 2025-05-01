const http = require('http')
const {getAllProducts} = require('./controllers/productsControllers')
const PORT = process.env.PORT || 5000
const server = http.createServer((req,res) => {
    if(req.url === '/api/products' && req.method === 'GET'){
        getAllProducts(req,res)
   
}
else{
    res.writeHead(404,{'Content-Type':'application/json'})
   res.end(JSON.stringify({message:'Router not found'}))
}
})


server.listen(PORT,() =>{
    console.log(`server is listening on port ${PORT}`)
})