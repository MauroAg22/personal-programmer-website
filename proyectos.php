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
    <meta property="og:image" content="https://www.maurolucero.com.ar/img/banner.webp">
    <meta property="og:locale" content="es_ES">
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@mauroluceroo">
    <meta name="twitter:title" content="Portafolio de Proyectos">
    <meta name="twitter:description" content="Explora la selección de mis proyectos de desarrollo web y conoce mis trabajos.">
    <meta name="twitter:image" content="https://www.maurolucero.com.ar/img/banner.webp">

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
            <?php include "icons/code-slash.svg"; ?>
        </div>
        <h1 class="d-flex justify-content-center align-items-center display-1 m-0">
            PROYECTOS
        </h1>
    </header>

    <main class="container">
        <section class="d-flex flex-column row-gap-5 px-3">
            <div class="projects-font-custom row d-flex justify-content-center column-gap-5 row-gap-4">
                <div class="col-12 col-md-8 col-xl-5 p-0">
                    <img class="rounded-4 shadow" width="100%" src="img/projects/clinic-system.webp" alt="Imagen ilustrativa del sitio web de mi curriculum vitae">
                </div>
                <div class="col-12 col-md-8 col-xl-5 d-flex flex-column justify-content-between p-0">
                    <div>
                        <h2 class="title-project">Clinic System</h2>
                        <ul class="ul-projects">
                            <li class="item-code-project">
                                <img src="icons/php.svg" alt="HTML ícono">
                                <span>PHP</span>
                            </li>
                            <li class="item-code-project">
                                <img src="icons/mysql.svg" alt="MySQL ícono">
                                <span>MySQL</span>
                            </li>
                            <li class="item-code-project">
                                <img src="icons/bootstrap.svg" alt="Bootstrap ícono">
                                <span>Bootstrap</span>
                            </li>
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
                        Gestión de clínicas, hospitales y centros médicos; áreas médicas, especialidades de médicos, pacientes y consultas realizadas por los pacientes. Aún se encuentra en desarrollo.
                    </p>
                    <footer class="d-flex gap-4 flex-wrap">
                        <a class="link-project" href="https://github.com/MauroAg22/clinic-system" target="_blank" rel="noopener noreferrer">
                            <?php include "icons/github-2.svg"; ?>
                            <span>Código</span>
                        </a>
                        <a class="link-project" href="projects/clinic-system/" target="_blank" rel="noopener noreferrer">
                            <?php include "icons/preview.svg"; ?>
                            <span>Visitar</span>
                        </a>
                        <a class="link-project" href="projects/clinic-system/documents/database/clinic-system-documentation.pdf" target="_blank">
                            <?php include "icons/file-earmark-text.svg"; ?>
                            <span>Documentación</span>
                        </a>
                    </footer>
                </div>
            </div>

            <div class="projects-font-custom row d-flex justify-content-center column-gap-5 row-gap-4">
                <div class="col-12 col-md-8 col-xl-5 p-0">
                    <img class="rounded-4 shadow" width="100%" src="img/projects/curriculum-vitae.webp" alt="Imagen ilustrativa del sitio web de mi curriculum vitae">
                </div>
                <div class="col-12 col-md-8 col-xl-5 d-flex flex-column justify-content-between p-0">
                    <div>
                        <h2 class="title-project">Porfolio web - Primera versión</h2>
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
                            <li class="item-code-project">
                                <img src="icons/bootstrap.svg" alt="Bootstrap ícono">
                                <span>Bootstrap</span>
                            </li>
                        </ul>
                    </div>
                    <p class="description-project">
                        Proyecto final para finalizar el curso "Primeros pasos del desarrollo frontend" en Argentina Programa 4.0. En este proyecto se plazma mi curriculum vitae en formato de sitio web.
                    </p>
                    <footer class="d-flex gap-4 flex-wrap">
                        <a class="link-project" href="https://github.com/MauroAg22/curriculum-web" target="_blank" rel="noopener noreferrer">
                            <?php include "icons/github-2.svg"; ?>
                            <span>Código</span>
                        </a>
                        <a class="link-project" href="projects/curriculum-web/" target="_blank" rel="noopener noreferrer">
                            <?php include "icons/preview.svg"; ?>
                            <span>Visitar</span>
                        </a>
                        <a class="link-project" href="https://api.profesional.ticmas.io/v1/certificates-download/f842fa8b-618f-4c79-9a8d-1d7dc7e52cc6.pdf">
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
                        <h2 class="title-project">Videojuego hecho con JavaScript</h2>
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
                        <a class="link-project" href="https://github.com/MauroAg22/toke-pop" target="_blank" rel="noopener noreferrer">
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