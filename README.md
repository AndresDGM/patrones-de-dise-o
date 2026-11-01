# Taller de Patrones de Diseño

Ejercicios sencillos de patrones de diseño implementados con TypeScript y Deno
para la asignatura de Arquitectura de Software de la UCEVA.

## Integrantes

<!-- completar integrantes -->

## Requisitos

- [Deno](https://deno.com/) 2.x o una versión compatible.

## Cómo ejecutar un ejercicio

Desde la raíz del repositorio, ejecuta el archivo de patrón con Deno:

```bash
deno run 02-Patrones-Estructurales/01-Adapter/adapter.ts
```

También puedes validar un archivo con:

```bash
deno check ruta/al/archivo.ts
```

## Patrones utilizados

| Patrón    | Categoría      | Rama        | Descripción                                                                                                  |
| --------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| Adapter   | Estructural    | `adapter`   | Adapta `Intl.NumberFormat` para mostrar precios en pesos colombianos sin acoplar el cliente a la API nativa. |
| Decorator | Estructural    | `decorator` | Combina adiciones de queso, huevo y carne en arepas sin crear una subclase para cada combinación.            |
| Strategy  | Comportamiento | `strategy`  | Cambia en tiempo de ejecución entre ningún descuento, descuento estudiantil y descuento de Black Friday.     |
| Abstract Factory | Creacional | `Abstract_Factory` | Crea familias de componentes de tema claro y oscuro sin mezclarlos. |
