const http = require('http')
const products = require('./data/product.js')
const PORT = process.env.PORT || 5000
const server = http.createServer((req,res) => {
    if(req.url === '/api/products' && req.method === 'GET'){
   res.writeHead(200,{'Content-Type':'application/json'})
   res.end(JSON.stringify(products))
}
else{
    res.writeHead(404,{'Content-Type':'application/json'})
   res.end(JSON.stringify({message:'Router not found'}))
}
})


server.listen(PORT,() =>{
    console.log(`server is listening on port ${PORT}`)
})