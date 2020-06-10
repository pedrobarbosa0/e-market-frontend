const express = require("express")
const server = express()

// configurar pasta pública
server.use(express.static("public"))


// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



//configurar caminhos da minha aplicação
//página inicial
server.get("/", (req, res ) => {
    return res.render("index.html")
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
server.get("/deliveryman-dashboard-history", (req, res ) => {
    return res.render("deliveryman-dashboard-history.html")
})
server.get("/deliveryman-dashboard-edit", (req, res ) => {
    return res.render("deliveryman-dashboard-edit.html")
})


// ligar o servidor
server.listen(3001)