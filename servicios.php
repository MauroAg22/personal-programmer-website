<?php

$pagActual = basename($_SERVER['PHP_SELF']);

function active($pagActual, $url)
{
    $pagActual = basename($_SERVER['PHP_SELF']);
    echo ($pagActual == $url) ? "active" : "";
}

?>

<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Open Graph -->
    <meta property="og:title" content="Currículum Vitae - Mauro Agustin Lucero">
    <meta property="og:type" content="Currículum Vitae">
    <meta property="og:url" content="https://mauroag22.github.io/curriculum-vitae/index.html">
    <meta property="og:image" content="img/perfil.jpg">

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
    
    <title>Mauro Lucero</title>
</head>

<body>
    <?php include "components/navbar.php" ?>

    <main class="container">
    <section class="row row-gap-5 justify-content-center">
            <div class="col-lg-7 col-md-9 order-lg-2">
                <div class="profile-section">
                    <section class="profile-pic">
                        <img src="img/perfil.jpg" alt="Foto de perfil" srcset="">
                    </section>
                    <a class="a-cv gap-3 d-flex justify-content-center align-items-center" href="pdf/mauro-lucero.cv.pdf" download="mauro-lucero.cv.pdf">
                        <svg class="animate-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
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
                        <span class="date">Desarrollador Web Freelance</span>
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
                        <span class="date">Villa Mercedes, San Luis, Argentina</spn>
                    </div>
                    <div>
                        <span class="label-date">PERFILES</span>
                        <div class="date d-flex gap-4 ms-2">
                            <a href="https://www.linkedin.com/in/mauro-ag-lucero/" target="_blank"
                                rel="noopener noreferrer">
                                <svg class="personal-info-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                            <a href="https://github.com/MauroAg22/" target="_blank"
                                rel="noopener noreferrer">
                                <svg class="personal-info-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="bi bi-github" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section class="border-top border-bottom border-secondary mt-5 pt-4 pb-5">
            <article>
                <div class="row justify-content-center gap-3">
                    <div class="col-12">
                        <h2 class="text-center custom-font-color-primary mb-0">SOBRE MÍ</h2>
                    </div>
                    <div class="col-10 col-sm-9">
                        <p class="text-center fs-5 mb-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sequi minima voluptates
                            impedit,
                            consectetur modi odio quasi accusamus vel id numquam aliquid dolor ex facere. In similique
                            quaerat
                            debitis vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aperiam
                            provident,
                            beatae, qui sed suscipit molestias maiores quaerat pariatur officia rem at! Consectetur ut
                            ullam
                            nisi beatae magni maxime eum.
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
                            <img src="icons/react.svg" alt="ícono react">
                            <span>React</span>
                        </li>
                        <li>
                            <img src="icons/nodejs.svg" alt="ícono node,js">
                            <span>Node.js</span>
                        </li>
                        <li>
                            <img src="icons/tailwindcss.svg" alt="ícono tailwind">
                            <span>Tailwind</span>
                        </li>
                        <li>
                            <img src="icons/expressjs.svg" alt="ícono tailwind">
                            <span>Express.js</span>
                        </li>
                        <li>
                            <img src="icons/typescript.svg" alt="ícono typescript">
                            <span>TypeScript</span>
                        </li>
                        <li>
                            <img src="icons/npm.svg" alt="ícono npm">
                            <span>npm</span>
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
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <footer class="container">
        <div
            class="d-flex flex-wrap justify-content-between align-items-center py-4 mt-5 mb-3 border-top border-secondary">
            <p class="col-md-4 mb-0 text-body-secondary">© 2024 Mauro Agustín Lucero</p>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex gap-3">
                <li>
                    <a href="https://www.facebook.com/mauroluceroo/" target="_blank"
                        rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#212529bf"
                            class="bi bi-facebook" viewBox="0 0 16 16">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/mauroluceroo/" target="_blank"
                        rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#212529bf"
                            class="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path
                                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mauroluceroo/" target="_blank"
                        rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#212529bf"
                            class="bi bi-instagram" viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </footer>

    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
</body>

</html>