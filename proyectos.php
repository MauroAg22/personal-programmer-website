<!DOCTYPE html>

<?php include "lib/functions.php"; ?>

<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Me llamo Mauro Lucero y esta es una sección de sitio web personal donde podrás conocer mis proyectos como programador y desarrollador web.">

    <!-- Open Graph -->
    <meta property="og:title" content="Portafolio de Proyectos">
    <meta property="og:type" content="portfolio">
    <meta property="og:description" content="Explora la selección de mis proyectos de desarrollo web y conoce mis trabajos.">
    <meta property="og:url" content="https://www.maurolucero.com.ar/proyectos.php">
    <meta property="og:image" content="https://www.maurolucero.com.ar/img/temporal-perfil.webp">
    <meta property="og:locale" content="es_ES">
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@mauroluceroo">
    <meta name="twitter:title" content="Portafolio de Proyectos">
    <meta name="twitter:description" content="Explora la selección de mis proyectos de desarrollo web y conoce mis trabajos.">
    <meta name="twitter:image" content="https://www.maurolucero.com.ar/img/temporal-perfil.webp">

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Madimi+One&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet">

    <!-- Mis estilos -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animation.css">
    <link rel="stylesheet" href="css/habilidades.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/projects.css">
    
    <link rel="icon" type="image/webp" href="img/icon-64.webp">
    <title>Mauro Lucero - Portafolio de Proyectos</title>
</head>

<body>
    <!-- Barra de navegación -->
    <?php include "components/navbar.php" ?>

    <header class="projects-header d-flex justify-content-center align-content-center gap-2">
        <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
            </svg>
        </div>
        <h1 class="d-flex justify-content-center align-items-center display-1 m-0">
            PROYECTOS
        </h1>
    </header>

    <main class="container">
        <section class="d-flex flex-column row-gap-5 px-3">
            <!-- <h2 class="col-12">Título b</h2> -->

            <div class="projects-font-custom row d-flex justify-content-center column-gap-5 row-gap-4">
                <div class="col-12 col-md-8 col-xl-5 p-0">
                    <img class="rounded-4 shadow" width="100%" src="img/projects/curriculum-vitae.webp" alt="Imagen ilustrativa del sitio web de mi curriculum vitae">
                </div>
                <div class="col-12 col-md-8 col-xl-5 d-flex flex-column justify-content-between p-0">
                    <div>
                        <h3 class="title-project">Porfolio web - Primera versión</h3>
                        <ul class="ul-projects">
                            <li class="item-code-project">
                                <img src="icons/html.svg" alt="HTML ícono">
                                <span>HTML</span>
                            </li>
                            <li class="item-code-project">
                                <img src="icons/css.svg" alt="CSS ícono">
                                <span>CSS</span>
                            </li>
                            <li class="item-code-project">
                                <img src="icons/js.svg" alt="JavaScript ícono">
                                <span>JavaScript</span>
                            </li>
                        </ul>
                    </div>
                    <p class="description-project">
                        Proyecto final para finalizar el curso "Primeros pasos del desarrollo frontend" en Argentina Programa 4.0. En este proyecto se plazma mi curriculum vitae en formato de sitio web.
                    </p>
                    <footer class="d-flex gap-4 flex-wrap">
                        <a class="link-project" href="#">
                            <?php include "icons/github-2.svg"; ?>
                            <span>Código</span>
                        </a>
                        <a class="link-project" href="projects/curriculum-vitae/" target="_blank" rel="noopener noreferrer">
                            <?php include "icons/preview.svg"; ?>
                            <span>Visitar</span>
                        </a>
                        <a class="link-project" href="https://api.profesional.ticmas.io/v1/certificates-download/f842fa8b-618f-4c79-9a8d-1d7dc7e52cc6---pdf">
                            <?php include "icons/box-arrow-up-right.svg"; ?>
                            <span>Credenciales</span>
                        </a>
                    </footer>
                </div>
            </div>

            <div class="projects-font-custom row d-flex justify-content-center column-gap-5 row-gap-4">
                <div class="col-12 col-md-8 col-xl-5 p-0">
                    <img class="rounded-4 shadow" width="100%" src="img/projects/toke-pop.webp" alt="Imagen ilustrativa de mi video juego web hecho con JavaScript">
                </div>
                <div class="col-12 col-md-8 col-xl-5 d-flex flex-column justify-content-between p-0">
                    <div>
                        <h3 class="title-project">Videojuego hecho con JavaScript</h3>
                        <ul class="ul-projects">
                            <li class="item-code-project">
                                <img src="icons/html.svg" alt="HTML ícono">
                                <span>HTML</span>
                            </li>
                            <li class="item-code-project">
                                <img src="icons/css.svg" alt="CSS ícono">
                                <span>CSS</span>
                            </li>
                            <li class="item-code-project">
                                <img src="icons/js.svg" alt="JavaScript ícono">
                                <span>JavaScript</span>
                            </li>
                        </ul>
                    </div>
                    <p class="description-project">
                        Este fue mi primer proyecto hecho con HTML, CSS y JavaScript. Fue presentado como final para aprobar una materia en la universidad. Mi primer contacto con el desarrollo web. Pensado solamente para ordenadores.
                    </p>
                    <footer class="d-flex gap-4 flex-wrap">
                        <a class="link-project" href="#">
                            <?php include "icons/github-2.svg"; ?>
                            <span>Código</span>
                        </a>
                        <a class="link-project" href="projects/toke-pop/" target="_blank" rel="noopener noreferrer">
                            <?php include "icons/preview.svg"; ?>
                            <span>Visitar</span>
                        </a>
                    </footer>
                </div>
            </div>
        </section>

    </main>

    <!-- Pie de pagina -->
    <?php include "components/footer.php" ?>

    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
</body>

</html>