const app = require('./config/server')


var rotaHome = require('./app/routes/home')
rotaHome(app)
var rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)
var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')
rotaFormularioInclusaoNoticia(app) 
const port = 3000
app.listen(port, () => {
    console.log(`servidor funcionando na porta ${port}`)
})