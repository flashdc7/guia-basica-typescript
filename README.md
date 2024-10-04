# Typescript

## Instalación Typescript
<ol>
   <li><a href="https://www.typescriptlang.org/download/">Typescript</a></li>
   <li>Instalamos de manera global <code>sudo npm install -g typescript</code></li>
   <li>corremos en la terminal <code>tsc --version</code></li>
</ol>

## Instalaciones Plugins

<ol>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar">Activitus Bar</a> - VS Code</li> 
   <li><a href="https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter">TypeScript Importer</a> - VS Code</li> 
   <li><a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">Material Icon Theme</a> - VS Code</li> 
   <li><a href="https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc">SON Viewer Pro</a> - Chrome</li> 
</ol>

## Documentación 

https://www.typescriptlang.org/docs/handbook/intro.html

## Inicializar Typescript

<ol>
   <li>Desde la consola navegamos a la raiz del proyecto</li>
   <li>Corremos el siguiente comando <code>tsc --init</code></li>
</ol>

## Compilar archivo ts
<ol>
   <li>Desde la consola navegamos a la raiz del proyecto</li>
   <li>Si ya inicializamos typescript corremos el siguiente comando <code>tsc</code></li>
   <li>De lo contrario corremos el siguiente comando <code>tsc nombre_archivo.ts</code></li>
</ol>

## Modo Observador - Watch Mode
<ol>
   <li>Desde la consola navegamos a la raiz del proyecto</li>
   <li>Corremos el siguiente comando <code>tsc -w</code> o <code>tsc --watch</code></li>
</ol>

## Función anonima autoinvocada

<code> ( ()=>{
   cuerpo de la función anonima
} ) () </code>

Las funciones anonimas ayudan a encapsular el script y no generar conflicto con otras importaciones en las cuales exista una variable con el mismo nombre.

## tsconfig.json

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

#### Mapear nuestro .ts

<ol>
   <li>sourceMap con valor true</li>
   <li>Activando esta opción nos ayuda en la consola del navagador para mapear nuestro archivo .ts en lugar del .js para la depuración</li>
</ol>

#### Remover comentarios de nuestro .js al transpilar

<ol>
   <li>removeComments con valor true</li>
   <li>Activando esta opción eliminamos los comentarios unicamente en el .js al momento de transpilar</li>
</ol>

#### Excluir carpetas o archivos

<ol>
   <li>Agregamos de la siguiente linea al final del json</li>
   <li><code>"exclude": [ "archivo_a_excluir.ts", "carpeta_a_excluir" ]</code></li>
</ol>

#### Incluir carpetas o archivos

<ol>
   <li>Agregamos de la siguiente linea al final del json</li>
   <li><code>"include": [ "archivo_a_incluir.ts", "carpeta_a_incluir" ]</code></li>
</ol>

#### Dictar archivo de salida

<ol>
   <li>Primero cambiamos <code>"module": "AMD",</code></li>
   <li>Después dictamos nuestro archivo de salida en este ej usamos main.js <code>"outFile": "./main.js",</code></li>
   <li>Si tenemos la opción activada de include debemos mencionar que archivos queremos transpilar de lo contrario tomara todos los archivos que tengamos en nuestro proyecto</li>
</ol>