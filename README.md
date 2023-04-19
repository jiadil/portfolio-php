# Portfolio
My responsive personal portfolio site using HTML5, CSS3, SCSS, Docker, JavaScript, Bootstrap, ... 

The site is designed to adapt to various screen sizes and devices, ensuring a seamless user experience. 

The use of SCSS and Bootstrap allowed for efficient and organized styling, while Docker enabled easy deployment and management of the site. 

Additionally, JavaScript was utilized for dynamic functionality and interactivity.

## Local Machine
### Docker Setup
- Download Docker: https://docs.docker.com/desktop/install/mac-install/
- Create the file `docker-compose.yaml` in the main dir, including the code below:
  ```
  version: '3.1'

  services:
    php:
      build: .
      ports:
        - 8089:80
      volumes:
        - ../portfolio:/var/www/html/
      networks:
        - default
  ```

- Create the file `Dockerfile` in the main dir, including the code below:
  ```
  FROM php:7.2-apache
  ```

- Run
  ```
  docker-compose up
  ```

- Tutorial: https://www.youtube.com/watch?v=8SddXBkP200

### Scss setup (compressed v.)
- Run
  ```
  npm init -y
  npm install express
  npm install sass
  ```

- Change the command
  
  ![image](https://user-images.githubusercontent.com/105253900/233218110-134a56e2-101e-47f5-bd50-ad6c1c9d765c.png)
  ```
  "scss": "sass --no-source-map --watch --style=compressed src/scss/style.scss src/css/style.css"
  ```

- Watch scss code!
  ```
  npm run scss
  ```
  ![image](https://user-images.githubusercontent.com/105253900/233218472-e8fa3594-5dd2-41ef-9152-4e217683d5b2.png)


- Tutorial: https://www.youtube.com/watch?app=desktop&v=EsSHjDo0Y3E


### Test
![image](https://user-images.githubusercontent.com/105253900/226490069-fbf2d590-c6a9-45ac-acf6-7e6d64499da6.png)
![image](https://user-images.githubusercontent.com/105253900/226490116-f0ac9abd-e987-4588-87c5-c596c5087fac.png)
