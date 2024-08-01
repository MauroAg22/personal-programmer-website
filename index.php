<!DOCTYPE html>

<?php include "lib/functions.php"; ?>

<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Me llamo Mauro Lucero y este es mi sitio web personal donde podrás conocer información sobre mí, mis proyectos y los servicios que ofrezco como programador y desarrollador web.">

    <!-- Open Graph -->
    <meta property="og:title" content="Mauro Lucero - Programador y Desarrollador Web">
    <meta property="og:type" content="profile">
    <meta property="og:description" content="Visita mi sitio web para conocer más sobre mí, mis proyectos y los servicios que ofrezco como programador y desarrollador web. ¡Contáctame hoy mismo para llevar tu proyecto al siguiente nivel!">
    <meta property="og:url" content="https://www.maurolucero.com.ar/index.php">
    <meta property="og:image" content="https://www.maurolucero.com.ar/img/banner.webp">
    <meta property="og:locale" content="es_ES">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@mauroluceroo">
    <meta name="twitter:title" content="Mauro Lucero - Programador y Desarrollador Web">
    <meta name="twitter:description" content="Visita mi sitio web para conocer más sobre mí, mis proyectos y los servicios que ofrezco como programador y desarrollador web. ¡Contáctame hoy mismo para llevar tu proyecto al siguiente nivel!">
    <meta name="twitter:image" content="https://www.maurolucero.com.ar/img/banner.webp">

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

    <link rel="icon" type="image/webp" href="img/icon-64.webp">
    <title>Mauro Lucero - Programador y Desarrollador Web</title>
</head>

<body>
    <!-- Barra de navegación -->
    <?php include "components/navbar.php" ?>

    <header class="profile-header my-5">
        <h1 class="animation-title main-title custom-font-color-primary">
            <span>¡</span>
            <span>H</span><span>O</span><span>L</span><span>A</span>
            <span>!</span>
        </h1>
        <p class="main-paragraph">Mi nombre es <span style="color: #eb593f;">Mauro</span> y soy programador y desarrollador web.</p>
    </header>

    <main class="container">
        <section class="row row-gap-5 justify-content-center">
            <div class="col-lg-7 col-md-9 order-lg-2">
                <div class="profile-section">
                    <img class="profile-pic" src="img/perfil.webp" alt="Foto de perfil">
                    <a class="download-cv gap-3 d-flex justify-content-center align-items-center" href="pdf/mauro-lucero-cv.pdf" download="mauro-lucero-cv.pdf">
                        <svg class="animate-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>
                        <span>Descargar Curriculum Vitae</span>
                    </a>
                </div>
            </div>
            <div class="col-lg-5 col-md-9 order-lg-1">
                <section class="personal-info">
                    <div>
                        <span class="label-date">NOMBRE</span>
                        <span class="date">Mauro Agustín Lucero</span>
                    </div>
                    <div>
                        <span class="label-date">FECHA DE NACIMIENTO</span>
                        <span class="date">29 - 07 - 1997</span>
                    </div>
                    <div>
                        <span class="label-date">ESPECIALIDAD</span>
                        <span class="date">Programador - Desarrollador Web</span>
                        <!-- <span class="date">Programador de Sistemas</span> -->
                    </div>
                    <div>
                        <span class="label-date">CORREO ELECTRÓNICO</span>
                        <span class="date">
                            <a href="mailto:mauroaglucero@gmail.com">mauroaglucero@gmail.com</a>
                        </span>
                    </div>
                    <div>
                        <span class="label-date">CELULAR</span>
                        <span class="date">
                            <a href="tel:+5492657709769">+54 9 2657 70-9769</a>
                        </span>
                    </div>
                    <div>
                        <span class="label-date">LOCALIDAD</span>
                        <span class="date"><a href="https://maps.app.goo.gl/Sun9MMra97YukqTR7" target="_blank" rel="noopener noreferrer">Villa Mercedes, San Luis, Argentina</a></spn>
                    </div>
                    <div>
                        <span class="label-date">PERFILES</span>
                        <div class="date d-flex gap-4 ms-2">
                            <a href="https://www.linkedin.com/in/mauro-ag-lucero/" target="_blank" rel="noopener noreferrer">
                                <svg class="personal-info-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <title>Linkedin</title>
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                            <a href="https://github.com/MauroAg22/" target="_blank" rel="noopener noreferrer">
                                <svg class="personal-info-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <title>GitHub</title>
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <section class="border-top border-secondary mt-5 pt-5">
            <article>
                <div class="row justify-content-center gap-3">
                    <div class="col-12">
                        <h2 class="text-center custom-font-color-primary mb-0">SOBRE MÍ</h2>
                    </div>
                    <div class="col-11 col-sm-9">
                        <p class="text-center fs-5">
                            ¡Bienvenido a mi sitio web! Soy programador y desarrollador web, actualmente estudiante de Programación Universitaria de Sistemas en la Universidad Nacional de Villa Mercedes. Mi pasión por la tecnología me ha llevado a ser autodidacta, siempre en busca de nuevas herramientas y metodologías para desarrollar sistemas más eficientes y efectivos. Me considero una persona tranquila y muy respetuosa, con un fuerte compromiso hacia la mejora continua y el aprendizaje constante. Además de mi dedicación a la programación, también soy músico; disfruto tocar la guitarra y el piano en mis tiempos libres.
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center gap-3 pt-4">
                    <div class="col-12">
                        <h2 class="text-center custom-font-color-primary mb-0">¿QUÉ PUEDO HACER?</h2>
                    </div>
                    <div class="col-11 col-sm-9">
                        <p class="text-center fs-5">
                            Mi conocimiento y experiencia abarca desde el la creación de sistemas de información hasta el desarrollo de aplicaciones web. En cada proyecto, la creación de cada sistemas se adaptan a las necesidades de mis clientes. Además, mis trabajos tienen un diseño responsivo, garantizando una experiencia óptima tanto en dispositivos móviles como de escritorio. Éste sitio web es un claro ejemplo de un diseño web responsivo.
                        </p>
                    </div>
                </div>
            </article>
        </section>

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