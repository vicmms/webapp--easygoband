## Prueba Técnica - Desarrollador Frontend 2022

### Razonamiento del problema

Básicamente el problema planteado es mostrar al usuario un listado de cervezas obtenidas de la API https://api.punkapi.com/v2/ de manera paginada y de que sea intuitiva. Se agregaron además algunas funciones extra como lo son la vista individual de cada cerveza, un slider con cervezas sugeridas, imagen para indicar que no hay resultados y la opción para cambiar la vista del listado de cervezas.
Se agregaron los siguientes paquetes adicionales a los especificados en la prueba

- axios: Para las peticiones HTTP
- vue-router: Para configurar y acceder a las rutas del sitio
- vuex-map-fields: Esta librería nos ayuda a manejar de una manera sencilla los campos declarados en el Vuex Store

Al realizar la paginación surgió el problema de no poder mostrar el total de registros que provee la API, por lo que se agregó la función `getTotalBeers` para estar calculando el numero de registros y mostrarlo en la paginación

Debido a que la aplicación es pequeña no fue necesario modularizar el proyecto.

### Preguntas

- **¿Has aplicado los principios SOLID?**

  Para la realización de este mini proyecto se ha aplicado principalmente el principio ¨Single Responsability¨ enfocados en los componentes.

- ** ¿Cuánto tiempo has estado pensando y escribiendo tests del código? Si
  hubieras tenido mucho más tiempo... ¿qué habrías añadido? Si no has
  realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo?**

  El tiempo dedicado a pensar y realizar test fue alrededor de dos horas, debido a que la API que se estaba implementando no proporcionaba cierta información o funciones necesarias para el desarrollo, por ejemplo el total de registros que existen en la consulta, por lo que parte de este tiempo se designó a resolver estos problemas y probar su funcionamiento usando el paradigma TDD.
  De haber contado con más tiempo se podría haber realizado test de componentes y unitarios con las herramientas de testing de vue.

- **¿Cómo mejorarías la API que has usado?**

  Considero que la API utilizada tiene buen desarrollo, pero podría complementarse muy bien implementando opciones para ordenamiento, poder realizar peticiones post para alguna petición desde un formulario por ejemplo y que la paginación incluya la información del total de registros.

- **¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa
  conclusión?**

  Si, esta API soporta peticiones CORS. Utilizando cURL accedemos a los request headers donde podemos ver la configuración CORS del servidor como lo es el access-control-allow-origin: \* que nos indica que no se tiene ninguna restricción a dominios y el access-control-allow-methods que nos indica los métodos permitidos desde los dominios cruzados.

- **¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna
  vez has tenido que hacerlo?**

  Para rastrear problemas de rendimiento se considerarian 3 posibles origenes: server, backend y frontend. Para rastrear primero se debería revisar que el servidor no sea el causante de este bajo rendimiento, ya sea por que tiene pocos recursos disponibles o que esté experimentando algún problema, posterior a eso si se está realizando alguna petición se debe revisar que las consultas no están demorando mucho en traer la información
  En lo personal ya me ha tocado resolver problemas de rendimiento en backend y frontend.
  No he utilizado alguna de las muchas herramientas que hay para el testeo de rendimiento ya que eran problemas en las consultas, en donde utilicé la sentencia SQL EXPLAIN para rastrear el origen del bajo rendimiento en la consulta para después optimizarla.

- **Descríbete a ti mismo en formato JSON.**

    {
      "name":"Victor Manuel Morales Sauz",
      "age":"25",
      "height": {
        "value": 1.8,
        "unit": "meters"
      },
      "weight":{
        "value": 83,
        "unit": "kilograms"
      },
      "gender":"Male",
      "hobbies": ["swimming", "soccer", "videogames", "traveling"],
      "programming_knowledge":{
        "frontend": {
          "languages": ["HTML", "CSS", "JavaScript"],
          "frameworks": ["VueJs", "ReactJs", "BootstrapCss", "TailwindCss", "Vuetify"]
        },
      "backend": {
          "languages": ["PHP", "JAVA", "NodeJs"],
          "frameworks": ["Laravel", "Express"]
        }
      },
      "collage_degree":"Systems Engineering",
      "about":"I am a motivated programmer, who likes challenges and continuous learning, excited to participate in new projects.",
  }