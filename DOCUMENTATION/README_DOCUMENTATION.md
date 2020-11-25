## DOCUMENTACION DEL PROYECTO

## ESTRUCTURA DE CARPETAS

```
dasdas
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
|    |
|    ├─> /public        (Carpeta que contiene los archivos publicos globales del index.html y los .ico)
|    |
|    |
|    |
|    |
|    |
|    ├─> /src           (Carpeta que contiene los archivos publicos globales del index.html y los .ico)
|         |    
|         ├─> /actions (actions del store)
|         |
|         ├─> /components    (Carpeta que contiene los componentes de React)
|         |       |
|         |       ├─> /AdminPanel
|         |       ├─> /AdminUsers
|         |       ├─> /Carrousel
|         |       ├─> /Cart
|         |       ├─> /Catalog
|         |       ├─> /Categorias
|         |       ├─> /ConfirmationDialaog
|         |       ├─> /CreateUser
|         |       ├─> /Footer
|         |       ├─> /FormCategory
|         |       ├─> /FormProduct
|         |       ├─> /GridListProducts
|         |       ├─> /Login
|         |       ├─> /Navbar
|         |       ├─> /Order
|         |       ├─> /PaymentBanner
|         |       ├─> /ProductCard
|         |       ├─> /ProductDetail
|         |       ├─> /ResetPassword
|         |       ├─> /SearchBar
|         |       ├─> /Stars
|         |       ├─> /Stock
|         |       ├─> /UploadImageButton
|         |       ├─> /UserLogged
|         |   
|         |
|         |
|         ├─> /store    (Store Redux)
|         |
|         ├─> /reducers (Reducers)
|
├──> /DOCUMENTATION
|      ├─> /README_DOCUMENTATION.md (ARCHIVO QUE CONTIENE LA DOCUMENTACION DEL PROYECTO)
|      |
```


# ESTRUCTURA DE LA DB
![ER](https://user-images.githubusercontent.com/68040158/98191080-37fcc580-1ef7-11eb-8966-e3620b3541dd.jpeg)



# RUTAS DEL FRONT
```
RUTAS PUBLICAS

FIX ROUTES
**localhost:3000/**               -> HOME
localhost:3000/user/create    -> Form De Registro de usuario
localhost:3000/user/login     -> Form Login
localhost:3000/user/cart      -> Carrito de compras

DYNAMIC RUTES:
localhost:3000/:name_category           -> Ruta filtrada por Nombre Categoria  
localhost:3000/products/category/:id    -> Ruta filtrada por ID-Number de Categoria
localhost:3000/products/:id             -> Ruta filtrada por ID-Number de Producto


RUTAS UserLogged-LOCK

localhost:3000/user/:ID/cart          -> Carrito de compras de USUARIO ESPECIFICO
localhost:3000/user/:ID/panel         -> Panel de usuario
localhost:3000/user/:ID/review        -> Panel para dejar las review

RUTAS DE AdminLogged-LOCK

localhost:3000/admin/                    -> RUTA DE PANEL DE ADMIN

localhost:3000/admin/createCategory      -> RUTA DE CREACION DE CATEGORIAS
localhost:3000/admin/editCategory        -> RUTA DE LISTA DE EDICION DE Categoria
localhost:3000/admin/editCategory/:name  -> RUTA DE CAMBIO DE DATOS EDICION CATEGORIA

localhost:3000/admin/createProduct       -> RUTA DE CREACION DE FORM-PRODUCTO
localhost:3000/admin/products/edit       -> RUTA DE GRILLA DE EDICION DE PRODUCTOS
localhost:3000/admin/products/edit/:ID'  -> RUTA DE EDICION DE UN PRODUCTO EN PARTICULAR

localhost:3000/admin/users/              -> RUTA DE TABLA DE USUARIOS
localhost:3000/admin/users/:ID           -> RUTA PARA EDITAR INFO USUARIO

localhost:3000/admin/orders/             -> RUTA DE TABLA DE ORDENES

```
# RUTAS DEL BACK

```
localhost:3001/


```

# SEEDERS - PRECARGA DE DATOS EN LA BASE DE DATOS

```
Instalar sequelize-cli en el back:
npm install --save-dev sequelize-cli

Editar la carpeta config.json con los datos de su postgres:

En api/src/config/config.json:
________________________________________________

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
____________________________________________________

Para correr todos los seeders ejecutar este comando parado en /api/src:
npx sequelize-cli db:seed:all

Para quitar los seeders:
npx sequelize-cli db:seed:undo:all


```
[Documentacion](https://sequelize.org/master/manual/migrations.html#running-seeds)


#PASSPORT: PROTECCIÓN DE RUTAS

```
FRONT END:
El fetch tiene que ir con credenciales, ejemplo: fetch('http://localhost:3001/products', {credentials: 'include'})

BACK END:
Se tiene que poner como segundo parametro de la ruta la funcion de autorizacion, las funciones van en passport.js
Ejemplo: server.post("/", isAdmin, (req,res) => {...})
```
