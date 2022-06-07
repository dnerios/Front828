window.addEventListener("load", function() {
    
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        sendData();
    })

    function sendData() {
        
        var data = {};
        for (var i = 0; i < form.length; i++) {
            var input = form[i];
            if (input.name) {
                data[input.name] = input.value;
            }
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/v1/clientes", true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        xhr.send(JSON.stringify(data));

        xhr.onload = function(event) {
            var cliente = JSON.parse(event.target.responseText);

            alert('Bem-vindo, ' + cliente.nome + '!');
        }

        xhr.addEventListener("error", function(event){
            alert('Opa! Algo de errado não está certo... ' + event.target.responseText)
        })

    }
});