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