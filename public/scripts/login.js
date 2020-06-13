function enviar_requisicao_login() {
    let username = document.querySelector("input[name=username]")
    let senha = document.querySelector("input[name=senha]")
    let data = JSON.stringify({username: username.value, password: senha.value})

    fetch("http://localhost:8000/token/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }).then(function(response) {
        if (response.status == 200){
            return response.json();
        }else if(response.status == 401){
            alert("Seu nome de usuário e/ou sua senha está incorreta!");
        }else{
            throw new Error('Exception message');
        }
    }).then(function(data) {

        let access_token = data["access"];
        let tipo_usuario = data["tipo_usuario"];

        localStorage.setItem("token", access_token);

        window.location.href = "localhost:3001/" + tipo_usuario;

    }).catch(function() {
        console.log("Ocorreu um erro!");
    });
}