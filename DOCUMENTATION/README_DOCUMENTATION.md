## DOCUMENTACION DEL PROYECTO

## ESTRUCTURA DE CARPETAS

```

/ ecommerce ft06g10

├───>  /api                  (contiene todas las archivos del back)
|     |
|      ├───> /node_modules  (contiene las librerias del back generadas por el package.json)
|      |
|      ├───> /src            (Source Folder Contiene los archivos desarrollados por el equipo de desarrollo)
|      |     ├───> /models      (Carpeta Contiene las estructura de las tablas de la DB)
|      |     ├───> /routes      (Establece las rutas del backend)
|      |
|      ├───> /tests          (Carpeta que contiene los tests)
|            ├───> /models      (Carpeta que contiene tests sobre el Modelo de la DB)
|            ├───> /routes      (Carpeta que contiene tests sobre las rutas del back)
|
|
├──>  /client           (Carpeta que contiene todos los archivos del Front-end)
|    ├─> /node_modules  (Carpeta que contiene las librerias del front generadas por el package.json)
|    |
|    ├─> /public        (Carpeta que contiene los archivos publicos globales del index.html y los .ico)
|    |
|    ├─> /src           (Carpeta que contiene los archivos publicos globales del index.html y los .ico)
|         |       
|         ├─> /components    (Carpeta que contiene los componentes de React)
|                 ├─> /Catalog
|                 ├─> /Categorias
|                 ├─> /FormCategory
|                 ├─> /ProductCard
|                 ├─> /ProductDetail

├──> /DOCUMENTATION
  ├─> /README_DOCUMENTATION.md (ARCHIVO QUE CONTIENE LA DOCUMENTACION DEL PROYECTO)

```



# ESTRUCTURA DE LA DB
![ER](https://user-images.githubusercontent.com/68040158/98191080-37fcc580-1ef7-11eb-8966-e3620b3541dd.jpeg)




# RUTAS DEL FRONT
```
localhost:3000/     ->  HOME
localhost:3000/

```
# RUTAS DEL BACK

```
localhost:3001/     -> Nos re


```

# SEEDERS

```
Instalar sequelize-cli en el back:
npm install --save-dev sequelize-cli

Editar la carpeta config.json con los datos de su postgres:

En api/src/config/config.json:
```
{
  "development": {
    "username": "tu user de postgres",
    "password": "tu pw",
    "database": "development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "tu user de postgres",
    "password": "tu pw",
    "database": "development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "tu user de postgres",
    "password": "tu pw",
    "database": "development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

Para correr todos los seeders ejecutar este comando parado en /api/src:
npx sequelize-cli db:seed:all

Para quitar los seeders:
npx sequelize-cli db:seed:undo:all


```

[Más comandos](https://sequelize.org/master/manual/migrations.html#running-seeds)
