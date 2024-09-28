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

