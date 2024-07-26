<?php

$pagActual = basename($_SERVER['PHP_SELF']);

function active($url)
{
    global $pagActual;
    echo ($pagActual == $url) ? 'active' : '';
}

function ariaCurrent($url) {
    global $pagActual;
    echo ($pagActual == $url) ? 'aria-current="page"' : '';
}