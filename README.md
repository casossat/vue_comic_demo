
# :ledger: vue_comic_demo
Aplicación vue_comic_demo, Prueba técnica desarrollador Frontend.

<summary><h2> 🛠Tecnologías y paquetes utilizados</h2></summary>

 * **Less**
 * **Vue CLI**
 * **Typescript**
 * **Ant-Design-Vue**
 * **Google-fonts-webpack-plugin**

<summary><h2> 🛠️ Configuracion del proyecto, http-server</h2></summary>
<details>

  Para ejecutar la app desde el codigo fuente se deben tener instaladas las siguientes dependencias:

  - NPM
  - NodeJS >= 8.0
  - http-server

  - Clonar el proyecto del repositorio de git
  
  ```shell 
      git clone https://github.com/casossat/vue_comic_demo.git
  ```
  
  Entramos a la carpeta del proyecto instalado

  ```shell 
      cd ~/vue_comic_demo/
  ```

  Dentro de la carpeta del proyecto, ejecutamos el siguiente comando para construir el *build* de la aplicación

  ```shell 
      npm run build
  ```

  Al terminar de generarse el *build* de la aplicación, corremos el servidor con *http-server* la carpeta generada

  ```shell 
      http-server ./dist/
  ```

  <summary><h2> 🛠️ Configuracion del proyecto, código fuente</h2></summary>

  Para ejecutar la app desde el codigo fuente se deben tener instaladas las siguientes dependencias:

  - NPM
  - NodeJS >= 8.0

  - Clonar el proyecto del repositorio de git
  
  ```shell 
      git clone https://github.com/casossat/vue_comic_demo.git
  ```
   
  Dentro de la carpeta del proyecto, instalamos las dependencias

  ```shell 
      cd ~/vue_comic_demo/
      npm install
  ```

  Ejecutamos la aplicación

  ```shell 
      npm run serve
  ```