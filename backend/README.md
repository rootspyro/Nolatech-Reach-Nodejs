# Backend
El backend de esta prueba es un CRUD de usuarios en formato API Restful.

## Stack Tecnológico
El backend fue desarrollado con:
- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com/es/)
- [Typescript](https://www.typescriptlang.org)
- [Swagger](https://swagger.io)
- [Postgres](https://www.postgresql.org)
- [Sequelize](https://sequelize.org)
- [JWT](https://jwt.io)

## Levantar servidor 

1. El primer paso sería ir al directorio de backend e instalar las dependencias.
```
$ cd backend
$ npm i
```

2. Levanta un servidor de postgresql y crea la base de datos. Puedes levantar un servidor de postgres para este proyecto de manera sencilla con docker:
```shell
$ docker run -d --name nolatech -p5432:5432 \
-e POSTGRES_USER=nolatech \
-e POSTGRES_PASSWORD=some_password \
-e POSTGRES_DB=nolatechdb \
postgres:latest
```

3. Puedes ejecutar el script SQL [CREATE_TABLE_USERS.sql](backend/db/queries/CREATE_TABLE_USERS.sql) para crear la tabla de usuarios y el usuario por defecto.
```shell
$ psql -h localhost -U nolatech nolatechdb < ./db/queries/CREATE_TABLE_USERS.sql
```

4. Para crear las variables de entorno puedes copiar el contenido de [.env.model](backend/.env.model) en un archivo `.env` ejecutando el comando:
```shell
$ cp .env.model .env
```

En este archivo es necesario ingresar las credenciales de la base de datos. Siguiendo con la lógica del paso 2:
```shell
# POSTGRES
DB_USER=nolatech
DB_PASSWORD=some_password
DB_HOST=localhost
DB_NAME=nolatechdb
```

También es necesario definir el puerto de escucha del servidor (:3000 por defecto) y la clave secreta para la autenticacion.
```shell
# SERVER
PORT=3000
SECRET=your-secret-key
```

Puedes crear una clave secreta random de 32 bytes con el comando:
```shell
$ openssl rand -base64 32 
# example output: tmaKsiKwnAmAgJ8bHnLl+PlzIm8/iqcl0vefCqo9FVE=
```

5. Finalmente para correr el servidor puedes ejecutar el comando `npm run dev`:

```shell
$ npm run dev
# output:

# > backend@1.0.0 dev
# > nodemon main.ts

# [nodemon] 3.1.4
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching path(s): *.*
# [nodemon] watching extensions: ts,json
# [nodemon] starting `ts-node main.ts`
# server listening on port :3000

```

6. Puedes verificar el status del servidor haciendo una petición al endpoint `/api/v1/health`:
```shell
$ curl http://localhost:3000/api/v1/health
```

Respuesta:
```json
{"success":true,"data":"server is up"}
```

## Documentación

### Swagger
Puedes consultar la documentación de la API accediendo desde el navegador a la URL: [localhost:3000/api/docs](http://localhost:3000/api/docs).

### Postman
Si deseas probar la API con postman puedes importar la colección desde el archivo [postman_collection.json](postman_collection.json).

### Autenticación de usuario
El usuario por defecto del sistema es el siguiente:
- __nombre de usuario:__ admin
- __email:__ admin@example.com
- __contraseña:__ P4ssw0rd#

Puedes obtener el token de autentiación haciendo una petición al endpoint `/auth/login` con las credenciales:
```shell
$ curl -X 'POST' \
  'http://localhost:3000/api/v1/auth/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "user": "admin@example.com",
  "password": "P4ssw0rd#"
}'
```

Respuesta de ejemplo:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOi...",
    "meta": {
      "id": 1,
      "user": "admin",
      "email": "admin@example.com",
      "exp": 1720829491
    }
  }
}
```

Una vez obtenido el token de autentiación puedes hacer peticiones a los endpoints protegidos con el Encabezado HTTP `Authorization: Bearer eyJhbGciOi...`.

### Creación de usuario
Si el usuario admin no esta creado por defecto puedes crear un nuevo usuario haciendo una petición POST a `/users`.
```shell
$ curl -X 'POST' \
  'http://localhost:3000/api/v1/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "admin",
  "email": "admin@example.com",
  "password": "P4ssw0rd#"
}'
```

Respuesta de ejemplo:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "createdAt": "2024-07-12T23:23:12.517Z",
    "updatedAt": "2024-07-12T23:23:12.517Z"
  }
}
```

Es necesario crear una contraseña segura que cumpla los siguientes requisitos:
- Longitud mínima de 8 caracteres.
- Almenos un caractér en minuscula.
- Almenos un caractér en mayuscula.
- Almenos un número.
- Almenos un caractér especial.

De igual manera es importante considerar que tanto el nombre de usuario como el email son únicos en el sistema.

### Listar usuarios
En un principio no hay muchos usuarios en la base de datos, por lo que puedes insertar datos de prueba en la tabla corriendo el script [INSERT_USERS_EXAMPLE_DATA.sql](db/queries/INSERT_USERS_EXAMPLE_DATA.sql).
```shell
$ psql -h localhost -U nolatech nolatechdb < ./db/queries/INSERT_USERS_EXAMPLE_DATA.sql
```
Esto insertará 100 nuevos registros en la tabla de usuarios.

Al listar usuarios se utilizan 2 filtros para la paginación:
- page  (valor por defecto 1).
- count (valor por defecto 10).

Para listar los usuarios puedes ejecutar la siguiente petición HTTP:
```shell
$ curl -X 'GET' \
  'http://localhost:3000/api/v1/users?page=1&count=10' \
  -H 'accept: application/json' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6...'
```
Respuesta de ejemplo:
```json
{
  "success": true,
  "data": {
    "itemsFound": 10,
    "items": [
      {
        "id": 1,
        "username": "admin",
        "email": "admin@example.com",
        "createdAt": "2024-07-12T16:26:47.501Z",
        "updatedAt": "2024-07-12T19:45:14.075Z"
      },
      ...
    ]
  }
}
```

Recuerda que el resto de la documentación puedes encontrarla en [localhost:3000/api/docs](http://localhost:3000/api/docs).
