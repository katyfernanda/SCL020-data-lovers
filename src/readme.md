# definicion del producto clara e informativa

Rick y Morty es una seria animada para adultos. En este proyecto buscamos que los fans de la serie que sean mayores de 18 años, puedan acceder a información relevante de sus personajes favoritos como nombres, especie, genero, episodio en el que aparece, etc. Esta busqueda puede hacerse mediante una "busqueda por nombre" o seleccionando a travez de "Status" (que personajes están vivos, muertos o se desconoce su estado), "Species" (ya que la serie cuenta con humanos, alienigenas, robots, etc), "origin Planet" (el planeta de origen de cada personaje). Además cuenta con hipervinculos al pie de pagina para poder acceder a mas informacion de la serie.

# Historias de usuario

Para completar el proyecto, llevamos a cabo mas de 14 historias de usuario con sus respectivos criterios de aceptacion, de las cuales detallamos las mas trasendentales a continuación:

1.- Como usuaria quiero que al ingresar a la primera vista, exista un filtro por edad, ya que la serie va dirigida a adultos.
CA: 
a) que exista una pregunta
b) que existan opciones de respuesta (opción 1, si.... opción 2 no)

2.- Como usuaria espero que al escoger la opción de menor de edad, me direccione al buscador de google y me avisen mediante un alert.
CA:
a) Tiene que existir una alerta
b) Debe existir un botón que me direccione a google
c) El botón debe ser claro en la respuesta del usuario (que es menor de edad)

3.- Como usuaria espero que al escoger la opción de mayor de edad, me direccione a la segunda vista.
CA:
a) Debe existir una segunda vista
b) El botón de yes (si soy mayor de edad) me va a ocultar la pregunta anterior y me mostrará la segunda vista.

4.- Como usuario cuando selecciono que si soy mayor de edad espero poder buscar un personaje por su nombre completo
CA:
a) Debe existir un párrafo que indique donde puedo buscar por nombre
b) Debe existir un recuadro donde el usuario ingrese el nombre a buscar.
c) Debe existir un botón buscar, para que ejecute la acción de buscar por el nombre ingresado

5.- Como usuario, cuando elijo un personaje pueda ver su imagen y datos principales
CA:
a) Debo poder ver todos los datos del personaje buscado.
b) Los datos que se mostrarán son:
b.1.- Imagen
b.2.- Especie
b.3.- genero
b.4.- Origen
b.5.- Porcentaje de apariciones (cantidad de episodios)

6.- Como usuario quiero que al hacer una segunda selección, no me muestre la selección anterior
CA:
a) Debe existir mas de un selector
b) Al seleccionar una segunda opción, la selección anterior debe reiniciarse (volver a su estado original)

NOTA: Esta historia de usuario es igual para cada selector (3 veces)<br/>
7.- Como usuario en la segunda vista, poder ver todos los estados de los personajes que salen en la serie, para poder seleccionar uno
CA: 
a) La selección me debe llevar a un listado de todos los personajes que tengan el estado seleccionado
b) El listado de "todos los personajes que tienen ese estado", deben ser hipervínculos que me lleven a la información del personaje particular.

8.- Como usuario, necesito siempre poder volver a al buscador
CA:
a) Generar un boton de cierre para las diferentes busquedas.
b) Este boton debe existir en todas las vistas que existan como consecuencia a la búsqueda

NOTA: Esta historia de usuario es igual para cada selector (3 veces)<br/>
9.- Como usuario, quiero que el listado de seres de ese planeta, me direccione a su ficha de informacion
CA: 
a) El listado de personajes, deben ser hipervínculos que me lleven a la información del personaje particular.

10.-Como usuario, quiero poder acceder a algún juego para descargar relacionado a la serie
CA:
a) Debe existir un texto que indique que podemos ir a descargar/jugar a otra pag.
b) Un link que nos lleve a ese juego/descarga
c) Este link debe existir en todas las vistas al pie de pag.

11.- Como usuario quiero poder acceder de forma rápida a la pag de fb e instagram de club de fans de la serie
CA:
a) Un icono de FB que nos direccione a la pag de FB de fans
b) Un icono de Instagram que nos direccione a la pag de fans en Instagram

# Prototipo de Baja Fidelidad

Trabajamos el prototipo de baja fidelidad en linea para proyectar las ideas que teníamos y comenzar a generar las historias de usuario

Haz click <A HREF="https://jamboard.google.com/d/1lHILrCQkzP8QvDUE2cQzSkybnS9O9EQH-tFtwjjdxAY/viewer?ts=6266acf6&f=0">  aquí </A> para ver el prototipo en tu navegador. 

# Prototipo de Alta Fidelidad

El prototipo de alta fidelidad lo trabajamos en figma y tambien trabajamos la version movil (como queriamos que quedara con responsive). Aquí ya contamos con una idea mas detallada de lo que se queriamos lograr y los filtros que usariamos para manejar la data, comenzamos trabajando una paleta de colores, pero recibimos feedback en cuanto a esto y lo cambiamos por por la paleta de colores que dejamos hasta presentar el trabajo completo.

Esta es la imagen de nuestra primera paleta de colores.<br/>

"<img src ="https://github.com/camicamposc/SCL020-data-lovers/blob/main/src/image/Paleta%20de%20colores.jpg?raw=true" width = "450" height = "450" alt = "Paleta de colores">" <br/>

Haz click <A HREF="https://www.figma.com/file/oFftNozv3DQPw7vSDt2CIz/Untitled?node-id=0%3A1">  aquí </A> para ver el prototipo final en tu navegador. 

# lista de problematicas detectados en test

Trabajamos minuciosamente en el codigo y en los test, no detectamos ningun inconveniente trasendental.