# Prueba Técnica Monoma

Este repositorio corresponde con la prueba tecnica para frontend developer en Monoma, la cual sera documentada a continuación:

#### Enlace en produccion:

https://monoma-test-theta.vercel.app/

#### Datos de acceso a la app:

```json
{
    "email": "email@example.com",
    "password": "pruebamonoma"
}
```

## Configuración del proyecto:

####Tecnologias Usadas

-   React + Typescript + Vite
-   React Router V6
-   React Hook Forms
-   React Toastify
-   Styled Components
-   Tailwind
-   Redux Toolkit + RTK Query
-   Cypress

#### Scripts

PInstalación de dependencias:

```bash
npm install
```

Proyecto en modo dev:

```bash
npm run dev
```

Testing con Cypress (el proyecto debe estar levantado en modo de desarrollo):

```bash
npm run test
```

## Estructura de archivos del proyecto:

A continuación estan las rutas a los archivos clave en el proyecto:

##### Testing:

    	cypress -> e2e

##### Paginas

    	src -> pages

##### Componentes

    	src -> components

##### Styled Components

    	src -> styles

##### Manejo de estados y peticiones http (RTK Query)

    	 src -> app

##### Manejo de Rutas

    	src -> router

## Pantallas Creadas:

Se crearón un total de 4 pantallas (Login, Dashboard, Detalles del Pokemon y Detalles del Usuario):

#### Login:

Pantalla inicial, que recibe al usuario si no existe un token o un usuario guardado en el localStorage, en caso de existir sera dirigido automaticamente al dashboard.

##### Ruta:

https://monoma-test-theta.vercel.app/auth/login

##### Caracteristicas:

-   Formulario creado con React Hook Forms para optimizar el rendimiento y facilitar la legibilidad y validaciones en el mismo.
-   El campo email valida que sea un email correcto y que el campo no este vacio.
-   El campo Contraseña valida que la contraseña tenga entre 8 y 12 caracteres y que el campo no este vacio.
-   En caso de ingresar las credenciales incorrectas se desplegara un toast para informarle al usuario la situacion, caso contrario se despliega el toast de bienvenida.
-   Los datos de validan en una realizando un POST a una API creada con JSON Server la cual se encuentra desplegada.
-   Los datos despues de validados se guardan en el localStorage para persistencia y se guardan en un slice de redux para controlar el estado y las flags dentro de la aplicación.

#### Dashboard:

Pantalla donde se despliegan las tarjetas de los pokemons, el footer de la paginación y el header con las opciones del menú.
#####Ruta:
https://monoma-test-theta.vercel.app/pokemons

##### Caracteristicas:

-   Se hace la peticion al endpoint de los pokemons por medio de RTK Query, transformando la respuesta obtenida para traer la informacion detallada de cada pokemon y asi lograr renderizar las tarjetas.
-   La paginación se controla por un estado que maneja el offset, el cual al cambiar hace la peticion correspondiente y trae la data deseada.
-   Las peticiones se guardan en cache por 30 segundos, ya que traer y transformar los datos de cada pokemon es un proceso que costoso para el consumo de recursos.

#### Pantalla de detalle de cada pokemon:

Pantalla donde se despliegan el detalle de cada pokemon, para acceder a esta pantalla los datos y el token del usuario deben estar establecidos tanto en el estado global, como en el localStorage, caso contrario se hara el proceso de logout.
#####Ruta:
https://monoma-test-theta.vercel.app/pokemon/{id o nombre del pokemon}

##### Caracteristicas:

-   Se hace la peticion al endpoint del pokemon por medio de RTK Query. Se podia hacer el drill de las props desde el dashboard, pero preferi hacer la peticion para hacer el cache de la data y para que el usuario pudiera acceder a la data de los pokemons que ya tenga identificados sin necesidad de recorrer el listado general de nuevo.

#### Pantalla de detalle del usuario:

Pantalla donde se despliegan el detalle del usuario, para acceder a esta pantalla los datos y el token del usuario deben estar establecidos tanto en el estado global, como en el localStorage, caso contrario se hara el proceso de logout.
#####Ruta:
https://monoma-test-theta.vercel.app/user

##### Caracteristicas:

-   Se hace renderizan los datos obtenidos en el proceso del login del usuario.
