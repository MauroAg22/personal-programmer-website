<nav class="navbar custom-navbar navbar-dark bg-dark outfit-font">
        <div class="container-fluid gap-0">
            <a class="navbar-brand custom-font-size-navbar" <?php ariaCurrent("index.php") ?> href="https://www.maurolucero.com.ar/">Mauro Lucero Web Developer</a>
            <button class="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header pb-0">
                    <h5 class="offcanvas-title custom-offcanvas-title ps-2" id="offcanvasDarkNavbarLabel">Menú</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 custom-navbar-ul">
                        <li class="">
                            <a class="nav-link <?php active("index.php") ?>" <?php ariaCurrent("index.php") ?> href="https://www.maurolucero.com.ar/"><?php ($pagActual == "index.php") ? include "icons/caret-right-fill.svg" : include "icons/caret-right.svg" ?><span>Perfil</span></a>
                        </li>
                        <li class="">
                            <a class="nav-link <?php active("servicios.php") ?>" <?php ariaCurrent("servicios.php") ?> href="servicios.php"><?php ($pagActual == "servicios.php") ? include "icons/caret-right-fill.svg" : include "icons/caret-right.svg" ?><span>Servicios</span></a>
                        </li>
                        <li class="">
                            <a class="nav-link <?php active("proyectos.php") ?>" <?php ariaCurrent("proyectos.php") ?> href="proyectos.php"><?php ($pagActual == "proyectos.php") ? include "icons/caret-right-fill.svg" : include "icons/caret-right.svg" ?><span>Proyectos</span></a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> -->
                    </ul>
                    <!-- <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-success" type="submit">Search</button>
                    </form> -->
                </div>
            </div>
        </div>
    </nav>