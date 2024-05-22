const tema = document.getElementById("tema");
const btnModoOscuro = document.getElementById('btnModoOscuro');
const nav = document.getElementById('nav');
const bottom = document.getElementById('bottom');
const box05 = document.getElementsByClassName('box-05');
const box00 = document.getElementsByClassName('box-00');
const contenedorGradiente = document.getElementsByClassName('contenedor-gradiente');

let miModo = parseInt(localStorage.getItem('miModo'));

let darkColor = '#222';
let lightColor = '#fff';
let fontColor = '#0A2647';

function modoOscuro() {
    tema.setAttribute('content', 'dark');
    tema.setAttribute('name', 'color-scheme');
    localStorage.setItem('miModo', 1);
    btnModoOscuro.setAttribute('src', 'img/icon/day.png');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark');
    bottom.setAttribute('class', 'navbar navbar-dark bg-dark');
    document.body.style.color = 'white';
    box05[0].style.backgroundColor = darkColor;
    box00[0].style.backgroundColor = darkColor;

    //* Super dark
    // document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    // document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    // document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';

    for (let index = 0; index < contenedorGradiente.length; index++) {
        contenedorGradiente[index].style.backgroundImage = 'none'
        contenedorGradiente[index].style.backgroundColor = darkColor
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
    document.body.style.color = fontColor;
    box05[0].style.backgroundColor = lightColor;
    box00[0].style.backgroundColor = lightColor;

    //* Super dark
    // document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';
    // document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(45deg, #144272, #0A2647)';
    // document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';
    
    for (let index = 0; index < contenedorGradiente.length; index++) {
        contenedorGradiente[index].style.backgroundColor = 'none'
        contenedorGradiente[index].style.backgroundImage = 'linear-gradient(' + lightColor + ', rgb(233, 233, 233)'
    }
    miModo = parseInt(localStorage.getItem('miModo'))
}

//* Estalece el modo de la página respecto al localstorage al cargar el sitio web
miModo == 1 ? modoOscuro() : modoClaro();

//* Función para cambiar de modo
function cambiarModo() {
    miModo ? modoClaro() : modoOscuro();
}

//* Evento click para realizar el cambio de modo
document.getElementById("btnModoOscuro").addEventListener('click', cambiarModo);

