# Proyecto integrador "Encontrate"

## Descripción

Realizaremos una página web e-commerce donde venderemos equipamiento de localización moderna, servicios de localización y regitro de actividades. 
La página contará con un menú desplegable con las distintas opciones que brinde la página, carrito de compras, diferentes secciones bien definadas para facilitar la navegación del usuario, fotos claras y definidas, posibilidad de generear un usuario y datos de contacto de la empresa.

Equipo:

Georgina Lumello (Scrum Master)
Lucas Alvarez
# Agostina Di Bello (PIDIO CAMBIO DE GRUPO LA ULTIMA SEMANA  DE MARZO)


### Estado del proyecto = Etapa WireFrame + Boceto

Etapa de definiciones iniciales realizada.
Se realizaron los borradores del wireframe;
Se definio estructura principal de la página,
se definio slogan del mismo;

Herramientas:

Trello = https://trello.com/b/jg4734re/encontrate
Github = https://github.com/Agosdb/Grupo-dos-Encontrate-/projects/1

Pendiente:

Boceto

#### Páginas de referencia 
https://www.decoracion-marinera.es/brujulas_c54970/
https://www.gpsmundo.com/
https://www.garmin.com.ar/
https://www.twonav.com/es/


# sprint n3

en las paginas:
    productEdition
    registerAdministrator

    no se le agregan header, head y footer ya que son de uso interno.

al h1 del index se le agrego un href para poder ir al inicio. pero me quedo subrayado. hay que modificarlo.

Se armaron los 3 partials

se mofico en package.json el archivo de inicio indes.js por app.js

faltan muchos detalles de CSS ya que se ha pisado con el index.css algunas imagenes del resto.
falta cerrar los div, etc. de register y de login

hay que pasar el simbolo de Whatsapp a el footer para que aparezca en toda la pagina.

Se agrega Footer de uso interno para uso de base de datos.

# Sprint 4
Recuerden que para cumplir ese objetivo necesitarán de siete rutas:
1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado
Entregable: sección funcional con listado, detalle, alta, modificación y baja de
productos

 Resumen de entregables
★ Archivo retro.md con el resultado de la retrospectiva.
★ Archivo daily.md con sus opiniones sobre las daylies/weeklies. (Opcional)
★ Tablero de trabajo actualizado.
★ Archivos products.json y users.json con datos de productos y usuarios.
★ Administración completa de productos con:
○ Listado
○ Detalle
○ Creación
○ Edición
○ Eliminación

# Sprint 5

1. Fuente de datos de usuarios:

● Permita el flujo de registro, login y logout de usuarios.
● Permita recordar al usuario para que pueda ingresar sin volverse a loguear.
● Tenga rutas accesibles solo por huéspedes (visitantes sin login).
● Tenga rutas accesible solo por usuarios (que hicieron login).

# Usuarios y middlewares
# Implementar la entidad de usuarios

● Rutas: src/routes/users.js
● Controlador: src/controllers/usersController.js
● Vistas: src/views/users/
● Directorio para imágenes: public/images/users/
● Colección: src/data/users.json

# Entregable: 
        estructura de archivos y directorios de usuarios.

#  Implementar el registro de usuarios

● Deberá incluir los campos mínimos mencionados en el sprint anterior.
● Deberá permitir la subida de una imagen de perfil (con Multer).
● Deberá encriptar la contraseña ingresada por el usuario (con bcrypt.js).
● Deberá guardar los datos enviados en el archivo JSON de usuarios.

# Entregable: 
        formulario funcional de creación de usuarios.

# Implementar el login de usuarios

● Incluya los campos de email y password.
● Verifique la información enviada por el usuario y según el caso:
        ○ Redireccione a la home o a la página de perfil en caso de éxito y muestre
        los datos del usuario en algún lugar del sitio, como el header.
        ○ Redireccione nuevamente al login en caso de error.
# Entregable: 
        formulario funcional de login.

# (Opcional) Implementar la función de recordar al usuario

● Utilizar cookies para guardar esa información en el navegador.
● Implementar un middleware de aplicación que busque la cookie y loguee al
    usuario en caso de que exista y sus datos sean correctos.

# Implementar rutas de huéspedes y de usuarios

En cada caso deberán implementar el comportamiento que corresponda:
    ● Rutas accesibles por cualquiera → sin cambios
    ● Rutas accesibles solo sin login → redirigen al perfil
    ● Rutas accesibles solo con login → redireccionan al login

# > Resumen de entregables

● Archivo retro.md con el resultado de la retrospectiva.
● (Opcional) Archivo daily.md con sus opiniones sobre las dailies/weeklies.
● Tablero de trabajo actualizado.
● Formulario de registro con:
    ○ Los campos mínimos mencionados en el sprint anterior.
    ○ Subida de una imagen de perfil.
    ○ Guardado en JSON con encriptación de contraseña.
● Formulario de login con:
    ○ Campos de email y password.
    ○ (Opcional) Función de recordar al usuario.
● Rutas de huéspedes y usuarios:
    ○ Las de huéspedes deberán redireccionar al perfil si el usuario está logueado.
    ○ Las de usuarios deberán redireccionar al login si el usuario no está logueado.

# Sprint 6

# Penientes;
    ● Finalizar el Sprint 5;
            ● Que levantes usuarios;
            ● Poder cargar articulos;
            ● Poder Cargar Usuarios;
            ● Hacer Funcionar el Login;
    ● En general corregir CSS;
    ● Vistas en celulares, y distintos dispositivos;
# Modificar INDEX, 
    Hacer que muestre procutos por categoría. 

# Bases de datos y Sequelize

# Diagrama de base de datos

    Les proponemos la siguiente estructura, aunque la pueden ajustar a la necesidad de su proyecto. 😉
    ● Usuarios (recuerden ver los campos sugeridos en el sprint 3).
    ● Productos (recuerden ver los campos sugeridos en el sprint 3).
    ● Tablas secundarias (según lo requiera su proyecto).
    ○ Para productos: categorías, marcas, colores, talles, etc.
    ○ (Opcional) Para usuarios: categorías.
    ● (Opcional) Carrito de compras.
    ○ Con detalle de quién hizo la compra, cantidad de ítems y precio total.
    ● (Opcional) Productos de cada carrito de compras.
Les sugerimos utilizar draw.io ya que es fácil de usar y soporta diagramas DER.

https://app.diagrams.net/?libs=general;uml#HAgosdb%2FGrupo-dos-Encontrate-%2Fmaster%2FEncontrateHome%2FUntitled%20Diagram.drawio


# Entregable: 
    Diagrama de entidad-relación de su base de datos en formato PDF.

# Script de estructura
Tomando como referencia el diagrama del punto anterior, tienen que escribir las
sentencias de SQL que crearán las tablas y sus relaciones.
    ● Deberá incluir la creación de la base de datos (create database…).
    ● Deberá incluir la creación de todas las tablas del sitio (create table…).
    ● Deberá incluir los tipos de datos de los campos y sus restricciones (primary keys,
    (not) null, unique, default, etc).
    ● Deberá incluir las relaciones entre las diferentes tablas (foreign keys).
# Entregable: 
    Archivo structure.sql que permita crear la base de datos completa.

# (Opcional) Script de datos

Ya tenemos la estructura, ahora faltan los datos. El script de datos permite que cualquier
desarrollador (o docente 😉) descargue el proyecto, ejecute el script y ya pueda ver el
sitio funcionado sin más pasos.
El script debería:
    ● Poblar la tabla de usuarios.
    ● Poblar la tabla de productos.
    ● Poblar las tablas secundarias (categorías, marcas, colores, talles, etc).
    ● (Opcional) Poblar la tabla de carrito de compras.
    ● (Opcional) Poblar la tabla de productos de carritos de compras.
Una vez definidos los campos de sus tablas, nuevamente pueden utilizar Mockaroo, pero
esta vez para generar el archivo SQL con datos. 😉☝️
# Entregable: 
Archivo con extensión data.sql que permita poblar la base con datos.

# Creación de carpeta Sequelize y archivos de modelos

Mediante la herramienta sequelize-cli deberán crear la carpeta que contenga los
archivos de configuración de Sequelize. Una vez configurado Sequelize, seguirá crear los
archivos de modelos para explicarle cómo es la estructura de la base de datos.
La carpeta database deberá incluir:
    ● Los archivos de configuración para que Sequelize se conecte a la base de datos.
    ● Los archivos de modelos para representar las tablas de:
    ○ Usuarios.
    ○ Productos.
    ○ Tablas secundarias (categorías, marcas, colores, talles, etc).
    ○ (Opcional) Carrito de compras.
    ○ (Opcional) Productos de cada carrito de compras.
    ● Los modelos deben incluir todas las relaciones existentes en la base de datos.
# Entregable: 

Carpeta database que incluya los archivos de configuración y archivos de
modelos junto con sus relaciones.

# ¡CRUD!

Ya es hora de tener un CRUD como la gente. Qué bueno que tenemos a Sequelize de
nuestro lado. Les pedimos que en su sitio se pueda:
    ● Para productos:
        ○ Crear
        ○ Editar
        ○ Eliminar
        ○ Listar
        ○ Ver el detalle
        ○ Buscar8
        ● Para usuarios:
        ○ Crear
        ○ Editar
        ○ Ver el detalle
        ● (Opcional) CRUDs de tablas secundarias.
        ● (Opcional) Agregar paginado a los listados y buscadores.

# Entregable: 

Rutas, controladores y vistas necesarias para que suceda lo detallado previamente utilizando Sequelize para trabajar con la base de datos.

# > Resumen de entregables

    ● Archivo retro.md con el resultado de la retrospectiva.
    ● (Opcional) Archivo daily.md con sus opiniones sobre las dailys/weeklys.
    ● Tablero de trabajo actualizado.
    ● Diagrama de base de datos.
    ● Script de creación de estructura de base de datos con:
    ○ Creación de la base de datos y de todas sus tablas.
    ○ Tipos de datos de los campos y sus restricciones.
    ○ Relaciones entre las diferentes tablas.
    ● (Opcional) Script de datos de base de datos para:
    ○ Tabla de usuarios.
    ○ Tabla de productos.
    ○ Tablas secundarias (categorías, marcas, colores, talles, etc).
    ○ (Opcional) Tabla de carrito de compras y productos de carritos de compras.
    ● Creación de carpeta Sequelize con:
    ○ Archivos de configuración.
    ○ Modelos con sus relaciones.
    ● CRUD
    ○ De productos.
    ○ De usuarios.
    ○ (Opcional) De tablas secundarias



