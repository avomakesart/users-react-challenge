# Getting Started 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# React Challenge - _Instructions_

- Remplaza los datos de prueba, realizando un fetch request a: https://reqres.in/api/users
    - Tenemos que mostrar 4 usuarios en total.
    - Los datos que se tienen que reemplazar son: avatar, nombre, apellido y email.
    - Nota: existe un util en la carpeta *api*, el cual usa axios y tiene la ruta predeterminada del api.
- Paginacion: actualmente en el result del api tenemos un valor llamado `total` el cual tiene un valor de `12`, esto significa que tenemos `12` objetos de usuarios, por otro lado tenemos un valor llamado `total_pages` el cueal tiene un valor de `3`, ya que mostramos 4 usuarios por pagina, en total son 3 paginas con 4 usuarios cada una.
    - Implementa la funcion en los botones donde:
      - El boton `next users` te lleve a la pagina siguiente y muestre los 4 usuarios de la pagina en cuestion, pero si estas en la ultima pagina `3` el boton no haga nada y se muestre una alerta avisando que no hay mas usuarios.
      - El boton `prev users` te lleve a la pagina anterior y muestre los 4 usuarios anteriores, pero si estas en la pagina `1` el boton no haga nada.

- Extra points: Crear un custom hook, donde reuses la logica del fetch request de los usuarios, y la paginacion y haz uso de el donde previamente se realizo el request.
    - Use case: const { users, prevPage, nextPage } = useUsers();
- Extra points: aumenta el test coverage de la aplicación.
- Extra points: modifica los estilos a tu gusto.
-  ✨Magic ✨