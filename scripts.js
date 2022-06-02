const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/v1/clientes/json', true);
request.onload = function() {

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(cliente => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = cliente.nome;

            const p = document.createElement('p');
            //p.innerHTML = 'Código' + cliente.codigo;
            p.innerHTML = `<b>Código:</b> ${cliente.codigo} <br>
            <b>Data de Nascimento:</b> ${cliente.data_nascimento} <br/>
            <b>Sexo:</b> ${cliente.sexo == 'M' ? 'Masculino' : 'Feminino'} <br/>
            <b>Visitas:</b> ${cliente.quantidade_visitas} <br>`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);

        })
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Ops, algo de errado aconteceu!`;
        app.appendChild(errorMessage);
    }
};

request.send();