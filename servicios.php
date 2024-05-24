<!DOCTYPE html>

<?php

$pagActual = basename($_SERVER['PHP_SELF']);

function active($pagActual, $url)
{
    $pagActual = basename($_SERVER['PHP_SELF']);
    echo ($pagActual == $url) ? "active" : "";
}

?>

<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Open Graph -->
    <meta property="og:title" content="Servicios de Desarrollo Web Freelance">
    <meta property="og:type" content="service">
    <meta property="og:description" content="Este es mi sitio web personal. Soy desarrollador web freelance y ofresco mi servicio como programador de sistemas de información y sitios web.">
    <meta property="og:url" content="https://maurounvime.000webhostapp.com/personal-programmer-website/servicios.php">
    <meta property="og:image" content="https://maurounvime.000webhostapp.com/personal-programmer-website/img/demo-380x280.jpg">
    <meta property="og:locale" content="es_ES">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@mauroluceroo">
    <meta name="twitter:title" content="Servicios de Desarrollo Web Freelance">
    <meta name="twitter:description" content="Soy desarrollador web freelance y ofresco mi servicio como programador de sistemas web personalizados y sitios web. ¡Contáctame para discutir tu proyecto!">
    <meta name="twitter:image" content="https://maurounvime.000webhostapp.com/img/profile.jpg">

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Madimi+One&family=Outfit:wght@100..900&display=swap" rel="stylesheet">

    <!-- Mis estilos -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animation.css">
    <link rel="stylesheet" href="css/habilidades.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/services-header.css">

    <title>Servicios de Desarrollo Web Freelance</title>
</head>

<body>
    <!-- Barra de navegación -->
    <?php include "components/navbar.php" ?>

    <header class="services-header">
        <h1>
            SISTEMAS Y DESARROLLOS WEB A MEDIDA
        </h1>
        <p>
            Brindando variedad de soluciones innovadoras para hacer realidad su proyecto, sistema o sitio web.
        </p>
    </header>

    <main class="container">

        <div class="row mt-5 pb-2 border-bottom border-secondary">
            <div class="col-12 col-md-6 mb-5">
                <div class="d-flex flex-column align-items-center text-center">
                    <img src="icons/desing-web.avif" alt="ícono de diseño web y movil">
                    <h2 class="my-3">Diseño Web y Móvil</h2>
                    <p class="my-0 fs-5 col-11 col-md-12">Desarrollo sitios web con diseño adaptable utilizando CSS y Bootstrap, asegurando una experiencia óptima en todas las plataformas. Esta estrategia garantiza que el sitio sea accesible para una amplia audiencia, lo que permite alcanzar a más visitantes en diversos dispositivos.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-5">
                <div class="d-flex flex-column align-items-center text-center">
                    <img src="icons/programmer.avif" alt="ícono de diseño web y movil">
                    <h2 class="my-3">Programador Web</h2>
                    <p class="my-0 fs-5 col-11 col-md-12">Me especializo en la creación de sitios web, utilizando HTML, CSS, y JavaScript para el frontend, y PHP para el backend. Además, integro bases de datos relacionales MySQL para garantizar un funcionamiento eficiente y confiable. Código bien estructurado y documentado, lo que asegura la escalabilidad y legibilidad del proyecto.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-5">
                <div class="d-flex flex-column align-items-center text-center">
                    <img src="icons/hosting.avif" alt="ícono de diseño web y movil">
                    <h2 class="my-3">Alojamiento Web</h2>
                    <p class="my-0 fs-5 col-11 col-md-12">Alojamiento <a class="host-link link-underline link-underline-opacity-0" href="https://www.hostinger.com.ar/" target="_blank" rel="noopener noreferrer">Hostinger</a>. Tu sitio web veloz y seguro alojado en la plataforma líder en hospedaje web. Con servidores de alta velocidad, robusta infraestructura y rendimiento óptimo para tu sitio web. Tus datos protegidos en todo momento. Disfruta de un servicio confiable y escalable que impulsa tu presencia en internet.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 mb-5">
                <div class="d-flex flex-column align-items-center text-center">
                    <img src="icons/system-analysis-90.avif" alt="ícono de diseño web y movil">
                    <h2 class="my-3">Sistemas de Información</h2>
                    <p class="my-0 fs-5 col-11 col-md-12">Desarrollo sistemas personalizados que se ajustan perfectamente a requerimientos y objetivos específicos de cada proyecto. Desde la concepción inicial hasta la implementación y mantenimiento, con un enfoque centrado en ti, creo sistemas confiables y escalables que se adaptan a cada necesidad específica.</p>
                </div>
            </div>
        </div>

        <section id="habilidades">

            <h2>HABILIDADES</h2>

            <!-------------------------------------------------------------------------------------------------------->

            <div class="animar-borde">
                <div class="frontend">
                    <h3>Frontend</h3>
                    <ul>
                        <li>
                            <img src="icons/html.svg" alt="ícono html">
                            <span>HTML</span>
                        </li>
                        <li>
                            <img src="icons/css.svg" alt="ícono css">
                            <span>CSS</span>
                        </li>
                        <li>
                            <img src="icons/js.svg" alt="ícono javascript">
                            <span>JavaScript</span>
                        </li>
                        <li>
                            <img src="icons/bootstrap.svg" alt="ícono bootstrap">
                            <span>Bootstrap</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-------------------------------------------------------------------------------------------------------->

            <div class="animar-borde">
                <div class="backend">
                    <h3>Backend</h3>
                    <ul>
                        <li>
                            <img src="icons/php.svg" alt="ícono php">
                            <span>PHP</span>
                        </li>
                        <li>
                            <img src="icons/mysql.svg" alt="ícono MySql">
                            <span>MySql</span>
                        </li>
                        <li>
                            <img src="icons/apache.svg" alt="ícono apache">
                            <span>Apache</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-------------------------------------------------------------------------------------------------------->

            <div class="animar-borde">
                <div class="herramientas">
                    <h3>Herramientas</h3>
                    <ul>
                        <li>
                            <img src="icons/git.svg" alt="ícono git">
                            <span>Git</span>
                        </li>
                        <li>
                            <img src="icons/github.svg" alt="ícono github">
                            <span>GitHub</span>
                        </li>
                        <li>
                            <img src="icons/terminal.svg" alt="ícono terminal">
                            <span>Terminal</span>
                        </li>
                        <li>
                            <img src="icons/vscode.svg" alt="ícono visual studio code">
                            <span>VSCode</span>
                        </li>
                        <li>
                            <img src="icons/MySQL-Workbench-logo.webp" alt="Ícono MySql Workbench">
                            <span>MySql Workbench</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-------------------------------------------------------------------------------------------------------->

            <div class="animar-borde">
                <div class="aprendiendo">
                    <h3>Aprendiendo</h3>
                    <ul>
                        <li>
                            <img src="icons/nodejs.svg" alt="ícono node,js">
                            <span>Node.js</span>
                        </li>
                        <li>
                            <img src="icons/npm.svg" alt="ícono npm">
                            <span>npm</span>
                        </li>
                        <li>
                            <img src="icons/react.svg" alt="ícono react">
                            <span>React</span>
                        </li>
                        <li>
                            <img src="icons/typescript.svg" alt="ícono typescript">
                            <span>TypeScript</span>
                        </li>
                        <li>
                            <img src="icons/expressjs.svg" alt="ícono tailwind">
                            <span>Express.js</span>
                        </li>
                        <li>
                            <img src="icons/laravel.svg" alt="ícono laravel">
                            <span>Laravel</span>
                        </li>
                        <li>
                            <img src="icons/docker.svg" alt="ícono docker">
                            <span>Docker</span>
                        </li>
                        <li>
                            <img src="icons/mongodb.svg" alt="ícono mongodb">
                            <span>MongoDB</span>
                        </li>
                        <li>
                            <img src="icons/postgresql.svg" alt="ícono postgresql">
                            <span>PostgreSQL</span>
                        </li>
                        <li>
                            <img src="icons/prisma.svg" alt="ícono prisma">
                            <span>Prisma</span>
                        </li>
                        <li>
                            <img src="icons/railway.svg" alt="ícono railway">
                            <span>Tailway</span>
                        </li>
                        <!-- <li>
                            <img src="icons/tailwindcss.svg" alt="ícono tailwind">
                            <span>Tailwind</span>
                        </li> -->
                    </ul>
                </div>
            </div>
        </section>

    </main>

    <!-- Pie de pagina -->
    <?php include "components/footer.php" ?>

    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>

</html>