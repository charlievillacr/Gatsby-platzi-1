/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/** Layout en Gatsby

Los Layouts son componentes que nos ayudan a presentar un mismo estilo visual en todas las páginas de nuestra aplicación. Envulelven el contenido de nuestra página para mostrar, además del contenido, otros componentes como el Menú, Footer, entre otros.
​
Por defecto, debemos importar nuestro componente Layout desde todos los archivos de nuestras páginas, de otra forma solo veremos el contenido de la página sin los componentes que configuramos en el Layout.
​
Afortunadamente, Gatsby nos permite configurar componentes que envuelvan todas nuestras páginas al momento de hacer render en el navegador. Para esto debemos configurar la opción exports.wrapRootElement del archivo gatsby-browser.js: **/

const React = require('react')
const Layout = require('./src/components/layout').default

exports.wrapRootElement = ({ element }) => <Layout>{element}</Layout>
