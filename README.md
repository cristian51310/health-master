# Health Master
<img src="./public/logo.png" alt="texto alternativo" width="200" height="200">

## Tecnologias usadas

### Client
- React
- ReactPDF (Generacion de pdfs)
- Tailwind
- Formik (validacion de formularios)
- Yup (manejo de errores en formularios)

### Server
- MongoDB
- Express
- Apollo Server (Servidor de graphQL)
- GraphQL (Lenguaje de consultas)
- Bcrypt (encriptacion de contraseñas)
- JWT (Utilizado para las sesiones)

## Como iniciar la aplicacion

### 1. Clonar el repositorio
```bash
git clone https://github.com/cristian51310/health-master.git
```

### 2. Modificar la conexion a la BD
  - modificar el archivo db.js para cambiar la ruta de la base de datos mongoDB
  ```
health-master
    └── public
    └── server
        └── db.js
    └── src
```

### 3. Instala los paquetes
- Instala los paquetes en las carpetas raiz y server
```bash
npm install
```

### 4. Iniciar los servidores
- navega a la carpeta server
```bash
cd server
```
- inicia el servidor
```bash
npm run dev
```

### 5. Iniciar el cliente
- Ubicate en la carpeta raiz e inicia el servidor
```bash
npm run dev
```