# TODO

Este es el proyecto de TODO list hecho en angular con la técnica de XP llamada TDD

## Correr la aplicación

En el terminal ejecutamos `ng serve` para ejecutar el servidor de desarrollo. Nuestra aplicación queda accesible desde la ruta `http://localhost:4200/`. Esta aplicación se auto refrescara.

## Primer paso, creemos el componente board

Corramos  `ng generate component board` para generar el componente donde estará alojado nuestro tablero de tareas.

## Configurando el routing

Para configurar el componente de board como una nueva ruta en la aplicación, vamos al archivo `app-routing.module.ts` y allí encontramos una linea de código similar a esta `const routes: Routes = [];` modifiquemosla de tal manera que quede:

```typescript
    const routes: Routes = [
        {
            path: 'board',
            component: BoardComponent
        }
    ];
```

para que esta configuración funcione correctamente es necesario agregar el import `import { BoardComponent } from './board/board.component';`

## Correr las pruebas

Hasta el momento no hemos escrito una linea de código pero igual las pruebas que están por defecto deben estar funcionando corriendo el comando `ng test`

## Paso 1

https://github.com/luisfelipediaz/TODO/tree/Step1

