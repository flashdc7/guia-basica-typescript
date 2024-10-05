# Typescript

## Instalación Typescript
1. [Typescript](https://www.typescriptlang.org/download/)
2. Instalamos de manera global `sudo npm install -g typescript`
3. corremos en la terminal `tsc --version`


## Instalaciones Plugins

> 1. [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar) - VS Code
> 2. [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter) - VS Code
> 3. [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - VS Code
> 4. [SON Viewer Pro](https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc) - Chrome



## Documentación 

https://www.typescriptlang.org/docs/handbook/intro.html



## Inicializar Typescript

> 1. Desde la consola navegamos a la raiz del proyecto
> 2. Corremos el siguiente comando `tsc --init`



## Compilar archivo ts

> 1. Desde la consola navegamos a la raiz del proyecto
> 2. Si ya inicializamos typescript corremos el siguiente comando `tsc`
> 3. De lo contrario corremos el siguiente comando `tsc nombre_archivo.ts`



## Modo Observador - Watch Mode

> 1. Desde la consola navegamos a la raiz del proyecto
> 2. Corremos el siguiente comando `tsc -w` o `tsc --watch`



## Función anonima autoinvocada

` ( ()=>{
   cuerpo de la función anonima
} ) () `

Las funciones anonimas ayudan a encapsular el script y no generar conflicto con otras importaciones en las cuales exista una variable con el mismo nombre.



## tsconfig.json

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html



#### Mapear nuestro .ts

> 1. sourceMap con valor true
> 2. Activando esta opción nos ayuda en la consola del navagador para mapear nuestro archivo .ts en lugar del .js para la depuración



#### Remover comentarios de nuestro .js al transpilar

> 1. removeComments con valor true
> 2. Activando esta opción eliminamos los comentarios unicamente en el .js al momento de transpilar



#### Excluir carpetas o archivos

> 1. Agregamos de la siguiente linea al final del json
> 2. `"exclude": [ "archivo_a_excluir.ts", "carpeta_a_excluir" ]`



#### Incluir carpetas o archivos

> 1. Agregamos de la siguiente linea al final del json
> 2. `"include": [ "archivo_a_incluir.ts", "carpeta_a_incluir" ]`



#### Dictar archivo de salida

>1. Primero cambiamos `"module": "AMD",`
>2. Después dictamos nuestro archivo de salida en este ej usamos main.js `"outFile": "./main.js",`
>3. Si tenemos la opción activada de include debemos mencionar que archivos queremos transpilar de lo contrario tomara todos los archivos que tengamos en nuestro proyecto


