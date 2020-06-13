function enviar_requisicao_login() {
    let username = document.querySelector("input[name=username]")
    let senha = document.querySelector("input[name=senha]")
    let values = {username: username.value, password: senha.value}
    let json = JSON.stringify(values)
    fetch("http://localhost:80/token/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(res => res.json())
    .then(jsonRes => {
        let tipoDeUsuario = jsonRes["tipo_usuario"]
        console.log(tipoDeUsuario)
    })
    .catch(function(err) { console.error(err); });
}