# Nolatech: Frontend

## Stack Tecnológico
- [React](https://es.react.dev)
- [Tailwindcss](https://tailwindcss.com)
- [Typescript](https://www.typescriptlang.org)

## Levantar servidor

1. El primer paso sería ir al directorio de frontend e instalar las dependencias.
```shell
$ cd frontend
$ npm install
```

2. Es necesario declarar la url del host de la API como variable de entorno. Puedes compiar el contenido de [.env.model](.env.model) en un archivo `.env` ejecutando el comando:
```shell
$ cp .env.model .env
```
Por defecto el archivo tiene el siguiente valor:
```shell
VITE_API_HOST=http://localhost:3000/api/v1
```

__IMPORTANTE__:Para saber como levantar la API puedes consultar la documentación del [backend](../backend/README.md).


3. Finalmente para correr el servidor puedes ejecutar el comando `npm run dev`:
```shell
$ npm run dev

# output:
#  VITE v5.3.3  ready in 275 ms

#  ➜  Local:   http://localhost:8080/
#  ➜  Network: use --host to expose
#  ➜  press h + enter to show help

```

4. El servidor escuchar por defecto en el puerto `8080`.

## Uso de la web.

Se ha realizado el maquetado de un sitio web en React en base a un diseño brindado previamente. A este se le han agregado las siguientes functionalidades segun se solicitó en los detalles de la prueba:
- Crear un usuario.
- Iniciar sesión en la web.

El resto de funcionalidades de la API pueden ser consultados en la documentación del [backend](../backend/README.md).

## Screenshots
![image](https://github.com/user-attachments/assets/615eab52-6838-4d70-b4be-29233abf3a1e)
![image](https://github.com/user-attachments/assets/8e04564d-fa91-4932-bd73-3010b2f3171b)
![image](https://github.com/user-attachments/assets/3a267edd-c062-4e16-ac39-97e1a0feef62)



