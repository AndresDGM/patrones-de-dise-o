# Taller de Patrones de Diseño de Software

![Deno](https://img.shields.io/badge/Deno-2.x-black?logo=deno)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)

Repositorio base para el desarrollo del **Taller de Patrones de Diseño** en la
asignatura de **Arquitectura de Software**, perteneciente a la Facultad de
Ingeniería de la **Unidad Central del Valle del Cauca (UCEVA)**.

---

## Información Institucional

- **Institución:** Unidad Central del Valle del Cauca (UCEVA)
- **Facultad:** Facultad de Ingeniería
- **Asignatura:** Arquitectura de Software
- **Docente:** Ing. Jesús David Mejía Vergara
- **Entorno de Ejecución:** [Deno](https://deno.com/) con TypeScript

---

## Integrantes del Grupo

> _Requisito de entrega: Trabajo en grupos de 2 a 4 estudiantes._

| Nombre Completo   | Código Estudiantil | Correo Institucional             |
| :---------------- | :----------------: | :------------------------------- |
| Andrés Guevara    |     230231022      | andres.guevara03@uceva.edu.co    |
| Nicolás Gutiérrez |     230231029      | nicolas.gutierrez01@uceva.edu.co |
| Javier Morán      |     230231043      | javier.moran02@uceva.edu.co      |

---

## Descripción del Taller

El objetivo de este taller es fortalecer la capacidad de análisis, diseño y
solución de problemas mediante la aplicación práctica de patrones de diseño de
software.

A través de **10 ejercicios prácticos**, se modelan escenarios del mundo real
donde la aplicación de patrones permite construir soluciones más **mantenibles,
reutilizables y escalables**, justificando las decisiones técnicas y
documentando correctamente las implementaciones.

### Requisitos por Cada Archivo de Patrón

Cada ejercicio se desarrolla en un **archivo independiente** e incluye
comentarios que explican:

1. **¿Qué hace el patrón?**
2. **¿Qué problema se está resolviendo?**
3. **¿Por qué ese patrón es adecuado?**
4. **Ejemplo funcional y básico** aplicado al patrón.

---

## Selección de Patrones (10 en Total)

|  #  | Patrón               |      Tipo      |     Estado      | Archivo                                                            | Descripción                                                                                  |
| :-: | :------------------- | :------------: | :-------------: | :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
|  1  | **Builder**          |   Creacional   | **Obligatorio** | `01-Patrones-Creacionales/01-Builder/builder.ts`                   | Construye peticiones HTTP con campos opcionales mediante métodos encadenables.               |
|  2  | **Abstract Factory** |   Creacional   |    Adicional    | `01-Patrones-Creacionales/02-Abstract-Factory/abstract-factory.ts` | Crea familias de componentes de tema claro y oscuro sin mezclarlos.                          |
|  3  | **Factory Method**   |   Creacional   |    Adicional    | `01-Patrones-Creacionales/03-Factory-Method/factory-method.ts`     | Permite que cada servicio cree el vehículo adecuado para entregar un pedido según la ciudad. |
|  4  | **Adapter**          |  Estructural   | **Obligatorio** | `02-Patrones-Estructurales/01-Adapter/adapter.ts`                  | Adapta `Intl.NumberFormat` para mostrar precios en pesos colombianos.                        |
|  5  | **Flyweight**        |  Estructural   | **Obligatorio** | `02-Patrones-Estructurales/03-Flyweight/flyweight.ts`              | Comparte los datos de las especies de árboles para reducir objetos repetidos.                |
|  6  | **Decorator**        |  Estructural   |    Adicional    | `02-Patrones-Estructurales/02-Decorator/decorator.ts`              | Combina adiciones de arepas sin crear una subclase para cada combinación.                    |
|  7  | **Observer**         | Comportamiento | **Obligatorio** | `03-Patrones-Comportamiento/03-Observer/observer.ts`               | Notifica a los fans cuando se liberan boletas por diferentes medios.                         |
|  8  | **Strategy**         | Comportamiento |    Adicional    | `03-Patrones-Comportamiento/01-Strategy/strategy.ts`               | Cambia en tiempo de ejecución entre distintas estrategias de descuento.                      |
|  9  | **Command**          | Comportamiento |    Adicional    | `03-Patrones-Comportamiento/02-Command/command.ts`                 | Encapsula acciones de un editor de texto para permitir deshacer.                             |
| 10  | **State**            | Comportamiento |    Adicional    | `03-Patrones-Comportamiento/04-State/state.ts`                     | Encapsula las respuestas de un reproductor según su estado actual.                           |

---

## Estructura del Repositorio

```text
patrones-de-diseno/
├── .gitignore
├── deno.json
├── README.md
├── helpers/
│   └── colors.ts
├── 01-Patrones-Creacionales/
│   ├── 01-Builder/
│   ├── 02-Abstract-Factory/
│   └── 03-Factory-Method/
├── 02-Patrones-Estructurales/
│   ├── 01-Adapter/
│   ├── 02-Decorator/
│   └── 03-Flyweight/
└── 03-Patrones-Comportamiento/
    ├── 01-Strategy/
    ├── 02-Command/
    ├── 03-Observer/
    └── 04-State/
```

---

## Instalación y Ejecución con Deno

### 1. Instalación de Deno

Si no tienes Deno instalado:

- **Linux / macOS:**
  ```bash
  curl -fsSL https://deno.land/install.sh | sh
  ```
- **Windows (PowerShell):**
  ```powershell
  irm https://deno.land/install.ps1 | iex
  ```

Verificar instalación:

```bash
deno --version
```

### 2. Ejecución de un ejercicio

Para ejecutar cualquier archivo de forma directa:

```bash
deno run 01-Patrones-Creacionales/03-Factory-Method/factory-method.ts
```

Para validar un archivo:

```bash
deno check ruta/al/archivo.ts
```

---

## Criterios de Evaluación

1. **Correcta implementación** del patrón de diseño.
2. **Relación adecuada** entre el problema planteado y el patrón utilizado.
3. **Claridad** en la explicación y documentación dentro del código.
4. **Organización** del repositorio y del código.
5. **Buenas prácticas** de programación.
6. **Trabajo colaborativo** y cumplimiento de los requisitos establecidos.
