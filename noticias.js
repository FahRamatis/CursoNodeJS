var http = require('http')

var server = http.createServer(function(req,res){
    var categoria = req.url
    if(categoria === '/tecnologia'){
        return res.end('<html><body>Noticias de Tecnologia</body></html>')
    } else if (categoria === '/moda') {
        return res.end('<html><body>Noticias de Moda</body></html>')
    } else if (categoria === '/beleza') {
        return res.end('<html><body>Noticias de Beleza</body></html>')
    } else {
        return res.end('<html><body>Portal de Noticias</body></html>')
    }
});
let port = 3000
server.listen(port, function(){console.log(`funcionando na porta ${port}`)})

