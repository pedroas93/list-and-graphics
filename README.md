This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Ajustar codigo:

const ul = document.querySelector('ul')

function setColumn (column) {
  return new Promise(resolve => {
  	ul.innerHTML += `<li>${column}<li>`
    setTimeout(resolve, Math.random() * 1000)
    });
}



const columns = [
  'Columna SKT_ID',
  'Columna Amount',
  'Columna Getway',
  'Columna Date',
  'Columna Issuer',
  'Columna User_id']

async function showColumns() {
  for(let col = 0; col < columns.length; col++){
    await setColumn(columns[col]);
  }
}

showColumns()

## 4. Cuestionario
1. ¿Porque no debería usar la libreria JQuery, si estoy usando ReactJS?
R= Porque Jquery modifica directamente el DOM, este problema persiste con cualquier libreria que modifique el DOM directamente como vanilla, mientras React mantiene una version virtual DOM y luego la monta al DOM real.

2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?
R= en primer lugar las clases confunden a los desarrolladores, porque las clases siguen siendo funciones en React, por otro lado el lenguaje de maquina transpila mejor el codigo de funciones que de clases, tambien se debe tener en cuenta la re-utilización de los componenetes, con funciones se mantiene la filosofia de atomicidad.

3. ¿Que es un archivo JSX?
R=es la sintaxis usada por react.

4. ¿Que diferencia hay entre una function y una arrow function de Javascript?
R=un arrow function es una funcion affi, esto significa que es una funcion de procesamiento directo, es decir se ejecutan al declararlas, las funciones normales se ejecutan al llamarlas.

5. ¿Que es Redux y cómo nos ayuda en los proyectos?
R= Redux es una arquitectura que ayuda a gestionar los estados de la aplicación, redux es transversal a la aplicación.

6. ¿Que nos permite hacer la siguiente declaración?
R= permite enviar dos parametros y sumarlos, solo cuando el primero exista.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
