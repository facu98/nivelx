# DOCUMENTACION DEL PROYECTO

## ESTRUCTURA DE CARPETAS
==========================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── docs                    # Documentation files (alternatively `doc`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md

> Use short lowercase names at least for the top-level files and folders except
> `LICENSE`, `README.md`

### Source files
/  (Raiz del proyecto)
├──── >  /api                  (contiene todas las archivos del back)
|    |
|    ├─----> /node_modules  (contiene las librerias del back generadas por el package.json)
|    |
|    ├─--> /src            (Source Folder Contiene los archivos desarrollados por el equipo de desarrollo)
|    |     ├─--> /models      (Carpeta Contiene las estructura de las tablas de la DB)
|    |     ├─--->/routes      (Establece las rutas del backend)
|    |
|    |-->/tests          (Carpeta que contiene los tests)
|            ├─--> /models      (Carpeta que contiene tests sobre el Modelo de la DB)
|            ├─--> /routes      (Carpeta que contiene tests sobre las rutas del back)
|
|
├─-->  /client          (Carpeta que contiene todos los archivos del front)
|    ├─> /node_modules  (Carpeta que contiene las librerias del front generadas por el package.json)
|    ├─> /public        (Carpeta que contiene los archivos publicos globales del index.html y los .ico)
|    ├─> /components    (Carpeta que contiene los componentes de React)
|
├─--> /DOCUMENTATION
  ├─-> /README_DOCUMENTATION.md (ARCHIVO QUE CONTIENE LA DOCUMENTACION DEL PROYECTO)


# ESTRUCTURA DE LA DB
![ER](https://user-images.githubusercontent.com/68040158/98191080-37fcc580-1ef7-11eb-8966-e3620b3541dd.jpeg)
