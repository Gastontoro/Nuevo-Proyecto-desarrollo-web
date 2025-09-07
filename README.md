# 🚀 Proyecto CRUD con React y Firebase

Una aplicación web simple para gestionar un inventario de productos y un formulario de contacto. Permite crear, leer, actualizar y eliminar registros (CRUD), conectándose a una base de datos en tiempo real de Firebase Firestore.

## ✨ Características

- **Gestión de Productos:** Sistema completo para añadir, ver, editar y eliminar productos.
- **Formulario de Contacto:** Panel para recibir, ver y eliminar mensajes de contacto.
- **Base de Datos en Tiempo Real:** Integración con Firebase Firestore.
- **Notificaciones:** Feedback instantáneo para el usuario (éxito/error) usando `react-hot-toast`.
- **Componentes Reutilizables:** Estructura modular con componentes para tarjetas de producto, listas y formularios.
- **Spinner de Carga:** Mejora la experiencia de usuario indicando cuándo se están cargando los datos.

## 🔧 Tecnologías Utilizadas

- **Frontend:** [React.js](https://reactjs.org/)
- **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
- **Manejo de Formularios:** [React Hook Form](https://react-hook-form.com/)
- **Base de Datos:** [Google Firebase (Firestore)](https://firebase.google.com/)
- **Notificaciones:** [React Hot Toast](https://react-hot-toast.com/)

---

## ⚙️ Guía de Instalación y Configuración Local

Sigue estos pasos para levantar el proyecto en tu máquina local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Una cuenta de [Firebase](https://firebase.google.com/) con un proyecto ya creado.

### Pasos

1.  **Clonar el repositorio**
    Abre tu terminal y clona este proyecto.

    ```bash
    git clone [https://github.com/rodal95/desarrollo-web-semip-isdm.git](https://github.com/rodal95/desarrollo-web-semip-isdm.git)
    cd tu-repositorio
    ```

2.  **Instalar dependencias**
    Este comando instalará todas las librerías necesarias para que el proyecto funcione.

    ```bash
    npm install
    ```
    *(O `yarn install` si usas yarn)*

3.  **Configurar las Variables de Entorno**
    Este es el paso más importante para conectar la aplicación con **tu** base de datos de Firebase.

    a. Crea un archivo llamado `.env` en la raíz del proyecto.

    b. Copia y pega el siguiente contenido en tu archivo `.env`.

    ```env
    # Reemplaza los valores con las credenciales de tu proyecto de Firebase
    # Puedes encontrarlas en:
    # Consola de Firebase > Configuración del proyecto > Tus apps > Configuración del SDK

    REACT_APP_FIREBASE_API_KEY="AIzaSy...rest_of_your_key"
    REACT_APP_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
    REACT_APP_FIREBASE_PROJECT_ID="your-project-id"
    REACT_APP_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID="1234567890"
    REACT_APP_FIREBASE_APP_ID="1:1234567890:web:abcdef123456"
    ```

    c. **Importante:** Reemplaza cada valor (`"AIzaSy..."`, `"your-project-id"`, etc.) con las credenciales reales de tu proyecto que encontrarás en la consola de Firebase.

4.  **Iniciar el servidor de desarrollo**
    Una vez configurado, puedes iniciar la aplicación.

    ```bash
    npm start
    ```
    La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000).

---

## ☁️ Despliegue en Vercel (con Deploy Automático)

Vercel es una plataforma ideal para desplegar proyectos de React. Se integra con tu cuenta de GitHub y despliega automáticamente cada cambio que subas.

### Prerrequisitos para el Despliegue

1.  Tu proyecto debe estar subido a un repositorio de **GitHub**.
2.  Debes tener una cuenta en **Vercel** (puedes registrarte gratis con tu cuenta de GitHub).

### Pasos para el Despliegue

1.  **Sube tu proyecto a GitHub**
    Si aún no lo has hecho, crea un nuevo repositorio en GitHub y sube tu código. Asegúrate de que tu archivo `.gitignore` incluya la línea `.env` para no exponer tus claves.

    ```bash
    # (Si es la primera vez que lo subes)
    git remote add origin [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    git push -u origin main
    ```

2.  **Importa tu Proyecto en Vercel**
    - Inicia sesión en [Vercel](https://vercel.com/).
    - En tu Dashboard, haz clic en **"Add New..."** y selecciona **"Project"**.
    - Busca el repositorio de tu proyecto en la lista y haz clic en **"Import"**.

3.  **Configura el Proyecto**
    Vercel autodetectará que es un proyecto de Create React App. La configuración por defecto es casi perfecta, pero **debes configurar las variables de entorno**.

    - **Framework Preset:** Debe ser "Create React App".
    - **Build and Output Settings:** Déjalo como está.
    - **Environment Variables:** ¡Este es el paso más importante!
        - Abre la sección **"Environment Variables"**.
        - Copia cada una de las claves y valores de tu archivo `.env` local y pégalas aquí. Por ejemplo:
            - **Name:** `REACT_APP_FIREBASE_API_KEY`
            - **Value:** `AIzaSy...rest_of_your_key`
        - Repite el proceso para todas las variables de tu archivo `.env`.

        ![Vercel Environment Variables](https://i.imgur.com/KqT8n6S.png)

4.  **Despliega**
    - Una vez que hayas agregado todas las variables de entorno, haz clic en el botón **"Deploy"**.
    - Vercel comenzará a construir tu proyecto. En uno o dos minutos, ¡tu sitio estará online!
    - Al finalizar, Vercel te dará la URL pública de tu aplicación.

### 🚀 Deploy Automático

A partir de ahora, cada vez que hagas un `git push` a la rama principal (`main`) de tu repositorio en GitHub, **Vercel detectará el cambio y automáticamente hará un nuevo deploy** con la versión más reciente de tu código. ¡No necesitas hacer nada más!

---

## 📜 Scripts Disponibles

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción en la carpeta `build`.
- `npm test`: Ejecuta las pruebas (si están configuradas).