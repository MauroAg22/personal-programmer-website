const tema = document.getElementById("tema");
const btnModoOscuro = document.getElementById('btnModoOscuro');
const nav = document.getElementById('nav');
const bottom = document.getElementById('bottom');
let miModo = parseInt(localStorage.getItem('miModo'));




if (miModo == 1) {
    tema.setAttribute('content', 'dark');
    tema.setAttribute('name', 'color-scheme');
    localStorage.setItem('miModo', 1);


    btnModoOscuro.setAttribute('src', 'img/icon/day.png');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top');
    bottom.setAttribute('class', 'navbar navbar-dark bg-dark');
    document.body.style.color = 'white';
    document.getElementsByClassName('box-05')[0].style.backgroundColor = '#212529';
    document.getElementsByClassName('box-00')[0].style.backgroundColor = '#212529';

    document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
    for (let index = 0; index < document.getElementsByClassName('contenedor-gradiente').length; index++) {
        document.getElementsByClassName('contenedor-gradiente')[index].style.backgroundImage = 'linear-gradient(#212529, #282c30)'
    }


    miModo = parseInt(localStorage.getItem('miModo'))
} else {
    tema.setAttribute('content', '');
    tema.setAttribute('name', '');
    localStorage.setItem('miModo', 0);


    btnModoOscuro.setAttribute('src', 'img/icon/night.png');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light fixed-top');
    bottom.setAttribute('class', 'navbar navbar-light bg-light');
    document.body.style.color = '#0A2647';
    document.getElementsByClassName('box-05')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('box-00')[0].style.backgroundColor = 'white';

    document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';
    document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(45deg, #144272, #0A2647)';
    document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';
    

    for (let index = 0; index < document.getElementsByClassName('contenedor-gradiente').length; index++) {
        document.getElementsByClassName('contenedor-gradiente')[index].style.backgroundImage = 'linear-gradient(white, rgb(233, 233, 233)'
    }


    miModo = parseInt(localStorage.getItem('miModo'))
}

function cambiarModo() {
    switch (miModo) {
        case 0:
            tema.setAttribute('content', 'dark');
            tema.setAttribute('name', 'color-scheme');
            localStorage.setItem('miModo', 1);
            miModo = parseInt(localStorage.getItem('miModo'));


            btnModoOscuro.setAttribute('src', 'img/icon/day.png');
            nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top');
            bottom.setAttribute('class', 'navbar navbar-dark bg-dark');
            document.body.style.color = 'white';
            document.getElementsByClassName('box-05')[0].style.backgroundColor = '#212529';
            document.getElementsByClassName('box-00')[0].style.backgroundColor = '#212529';
            document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
            document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';
            document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(180deg, #0f0f0f, #1a1a1a 40% 60%, #0f0f0f)';

            for (let index = 0; index < document.getElementsByClassName('contenedor-gradiente').length; index++) {
                document.getElementsByClassName('contenedor-gradiente')[index].style.backgroundImage = 'linear-gradient(#212529, #282c30)'
            }
            
            break;

        case 1:
            tema.removeAttribute('content');
            tema.removeAttribute('name');
            localStorage.setItem('miModo', 0);
            miModo = parseInt(localStorage.getItem('miModo'));


            btnModoOscuro.setAttribute('src', 'img/icon/night.png');
            nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light fixed-top');
            bottom.setAttribute('class', 'navbar navbar-light bg-light');
            document.body.style.color = '#0A2647';
            document.getElementsByClassName('box-05')[0].style.backgroundColor = 'white';
            document.getElementsByClassName('box-00')[0].style.backgroundColor = 'white';
            document.getElementsByClassName('box-01')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';
            document.getElementsByClassName('box-02')[0].style.backgroundImage = 'linear-gradient(45deg, #144272, #0A2647)';
            document.getElementsByClassName('pro-principal')[0].style.backgroundImage = 'linear-gradient(30deg, #0A2647, #144272, #0A2647)';

            for (let index = 0; index < document.getElementsByClassName('contenedor-gradiente').length; index++) {
                document.getElementsByClassName('contenedor-gradiente')[index].style.backgroundImage = 'linear-gradient(white, rgb(233, 233, 233)'
            }

            break;
    }

    
}

document.getElementById("btnModoOscuro").addEventListener('click', cambiarModo);





// document.head.outerHTML = "meta"

const meta = document.createElement("meta");
meta.id = modo;



