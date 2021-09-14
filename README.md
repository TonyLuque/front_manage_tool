# Asiganción de dotación

En este repositorio encontras un proyecto de React, que consiste en un módulo para la asignicaión de dotación de una empresa.

El proyecto consta de 3 pantallas, inicio, login y registro.

La pantalla de inicio se encuentra divida en tres secciones. siendo de izquierda a derecha, busqueda del dispositivo por su serial, busqueda del usuario por email y asignación del dispositvo a traves de su serial y el id del usuario.

+ **Busqueda del dispositivo**:  Contiene un input y dos botones, el boton de **Todos** devuelve todos los dispositivos asignados, el de busqueda activa la busqueda basada en el id del input, si encuentra un dispositivo muestra una card en la parte de abajo con su información.

+ **Busqueda del usurio**: Contiene un input y dos botones, el de **Crear** redirigira a una pantalla para crear un nuevo usuario para poder asignarle un dispositivo, de busqueda devolvera la información del usuario si este existe.

+ **Asignación del dispositivo**: Contiene dos input y un boton, uno para ingresar el serial del dispositivo y el otra para el id del usuario que se obtoniene mediante la busqueda por email, el boton activa el guardado de los datos.

# Como ejecutarlo

+ Clona el repositorio
+ Instala las dependecias `npm install`
+ Ejecuta `npm run start`

# Nota:

Esta es la parte de Frontend del proyecto, para usar la aplicación deberas tener un backend, puedes usar la parte del Backend del proyecto [aquí](https://github.com/TonyLuque/backend_manage_tool)
