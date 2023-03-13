const tema = document.getElementById("tema");
const btnModoOscuro = document.getElementById('btnModoOscuro');
const nav = document.getElementById('nav');
const bottom = document.getElementById('bottom');
const box05 = document.getElementsByClassName('box-05');
const box00 = document.getElementsByClassName('box-00');
const contenedorGradiente = document.getElementsByClassName('contenedor-gradiente');
let miModo = parseInt(localStorage.getItem('miModo'));

function modoOscuro() {
    tema.setAttribute('content', 'dark');
    tema.setAttribute('name', 'color-scheme');
    localStorage.setItem('miModo', 1);
    btnModoOscuro.setAttribute('src', 'img/icon/day.png');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark');
    bottom.setAttribute('class', 'navbar navbar-dark bg-dark');
    document.body.style.color = 'white';
    box05[0].style.backgroundColor = '#212529';
    box00[0].style.backgroundColor = '#212529';
    // document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    // document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    // document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    for (let index = 0; index < contenedorGradiente.length; index++) {
        contenedorGradiente[index].style.backgroundImage = 'none'
        contenedorGradiente[index].style.backgroundColor = '#212529'
    }
    miModo = parseInt(localStorage.getItem('miModo'));
}

function modoClaro() {
    tema.setAttribute('content', '');
    tema.setAttribute('name', '');
    localStorage.setItem('miModo', 0);
    btnModoOscuro.setAttribute('src', 'img/icon/night.png');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');
    bottom.setAttribute('class', 'navbar navbar-light bg-light');
    document.body.style.color = '#0A2647';
    box05[0].style.backgroundColor = 'white';
    box00[0].style.backgroundColor = 'white';
    // document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';
    // document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(45deg, #144272, #0A2647)';
    // document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';
    for (let index = 0; index < contenedorGradiente.length; index++) {
        contenedorGradiente[index].style.backgroundColor = 'none'
        contenedorGradiente[index].style.backgroundImage = 'linear-gradient(white, rgb(233, 233, 233)'
    }
    miModo = parseInt(localStorage.getItem('miModo'))
}


if (miModo == 1) {
    modoOscuro();
} else {
    modoClaro();
}


function cambiarModo() {
    switch (miModo) {
        case 0:
            modoOscuro();
            break;
        case 1:
            modoClaro();
            break;
    }
}

document.getElementById("btnModoOscuro").addEventListener('click', cambiarModo);

