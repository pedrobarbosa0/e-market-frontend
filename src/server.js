const express = require("express")
const server = express()
const bodyParser = require('body-parser');
const axios = require('axios');


// configurar pasta pública
server.use(express.static("public"))
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



//página inicial
server.get("/", (req, res ) => {
    return res.render("index.html")
})

server.post("/", (req, res ) => {
    
    username = req.body.username
    password = req.body.password

    axios.post("http://localhost:8000/token/", {
        username: username,
        password: password
    }).then(response => {

        let tipo_usuario = response.data["tipo_usuario"]
        let url = "/" + tipo_usuario;

        return res.redirect(url, 302);

    }).catch((error) => {
        if (error.response.status == 401){
            message = "Seu usuário e/ou sua senha está incorreta!"
        }else{
            message = "Ocorreu um erro inexperado. Já estamos trabalhando nisso!"
        }

        return res.render("index.html", {message: message})

    });
})

//dashboards
server.get("/entregador", (req, res ) => {
    return res.render("deliveryman-dashboard.html")
})
server.get("/estabelecimento", (req, res ) => {
    return res.render("estabelecimento-list-pedidos.html")
})
server.get("/cliente", (req, res ) => { 
// TODO: criar template
    return res.render("estabelecimento-list-pedidos.html")
})



// criando outras rotas
server.get("/create-point", (req, res ) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res ) => {
    return res.render("search-results.html")
})
server.get("/create-client", (req, res ) => {
    return res.render("create-client.html")
})

server.post("/savepoint-client", (req, res) => {

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastro Concluído")
        console.log(this)  

        return res.render("create-client.html", { saved: true })
    }
    
    afterInsertData()
})

server.get("/create-deliveryman", (req, res ) => {
    return res.render("create-deliveryman.html")
})
server.post("/savepoint-deliveryman", (req, res) => {

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastro Concluído")
        console.log(this)  

        return res.render("create-deliveryman.html", { saved: true })
    }
    
    afterInsertData()
})

server.get("/create-marketplace", (req, res ) => {
    return res.render("create-marketplace.html")
})

server.post("/savepoint-marketplace", (req, res) => {

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastro Concluído")
        console.log(this)  

        return res.render("create-marketplace.html", { saved: true })
    }
    
    afterInsertData()
})

server.get("/deliveryman-dashboard", (req, res ) => {
    return res.render("deliveryman-dashboard.html")
})
server.get("/deliveryman-profile", (req, res ) => {
    return res.render("deliveryman-profile.html")
})
server.get("/deliveryman-dashboard-history", (req, res ) => {
    return res.render("deliveryman-dashboard-history.html")
})
server.get("/deliveryman-edit", (req, res ) => {
    return res.render("deliveryman-edit.html")
})
server.get("/categorias", (req, res ) => {
    return res.render("categorias.html")
})

// ligar o servidor
server.listen(3001)