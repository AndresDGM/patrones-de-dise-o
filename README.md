# Taller de Patrones de Diseño de Software

![Deno](https://img.shields.io/badge/Deno-2.x-black?logo=deno)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)

Repositorio base para el desarrollo del **Taller de Patrones de Diseño** en la asignatura de **Arquitectura de Software**, perteneciente a la Facultad de Ingeniería de la **Unidad Central del Valle del Cauca (UCEVA)**.

---

## Información Institucional

* **Institución:** Unidad Central del Valle del Cauca (UCEVA)
* **Facultad:** Facultad de Ingeniería
* **Asignatura:** Arquitectura de Software
* **Docente:** Ing. Jesús David Mejía Vergara
* **Entorno de Ejecución:** [Deno](https://deno.com/) con TypeScript

---

## Integrantes del Grupo

> *Requisito de entrega: Trabajo en grupos de 2 a 4 estudiantes.*

| Nombre Completo | Código Estudiantil | Correo Institucional |
| :--- | :---: | :--- |
| Andrés Guevara | 230231022 | andres.guevara03@uceva.edu.co |
| Nicolás Gutiérrez | 230231029 | nicolas.gutierrez01@uceva.edu.co |
| Javier Morán | 230231043 | javier.moran02@uceva.edu.co |

---

## Descripción del Taller

El objetivo de este taller es fortalecer la capacidad de análisis, diseño y solución de problemas mediante la aplicación práctica de patrones de diseño de software.

A través de **10 ejercicios prácticos**, se investigan y modelan escenarios del mundo real donde la aplicación de patrones permite construir arquitecturas más **mantenibles, reutilizables y escalables**, justificando las decisiones técnicas y documentando correctamente las soluciones implementadas.

### Requisitos por Cada Archivo de Patrón

Cada ejercicio debe desarrollarse en un **archivo independiente** y debe incluir comentarios en el código explicando:
1. **¿Qué hace el patrón?**
2. **¿Qué problema se está resolviendo?**
3. **¿Por qué ese patrón es adecuado para solucionar dicho problema?**
4. **Ejemplo funcional y básico** aplicando el patrón de diseño.

---

## Selección de Patrones (10 en Total)

El taller exige el desarrollo de **10 patrones**, distribuidos de la siguiente manera:
* **4 Obligatorios:** Builder, Adapter, Flyweight y Observer.
* **6 Adicionales elegidos por el grupo:**
  * 2 Creacionales adicionales.
  * 1 Estructural adicional.
  * 3 De comportamiento adicionales.

| # | Patrón | Tipo | Estado | Archivo sugerido | Breve Descripción del Problema / Ejercicio |
| :-: | :--- | :---: | :---: | :--- | :--- |
| 1 | **Builder** | Creacional | **Obligatorio** | `src/creacional/builder.ts` | *(Completar con la descripción del caso investigado)* |
| 2 | *[Creacional adicional 1]* | Creacional | Adicional | `src/creacional/` | *(Completar)* |
| 3 | *[Creacional adicional 2]* | Creacional | Adicional | `src/creacional/` | *(Completar)* |
| 4 | **Adapter** | Estructural | **Obligatorio** | `src/estructural/adapter.ts` | *(Completar con la descripción del caso investigado)* |
| 5 | **Flyweight** | Estructural | **Obligatorio** | `src/estructural/flyweight.ts` | *(Completar con la descripción del caso investigado)* |
| 6 | *[Estructural adicional]* | Estructural | Adicional | `src/estructural/` | *(Completar)* |
| 7 | **Observer** | Comportamiento | **Obligatorio** | `src/comportamiento/observer.ts` | *(Completar con la descripción del caso investigado)* |
| 8 | *[Comportamiento adicional 1]* | Comportamiento | Adicional | `src/comportamiento/` | *(Completar)* |
| 9 | *[Comportamiento adicional 2]* | Comportamiento | Adicional | `src/comportamiento/` | *(Completar)* |
| 10 | *[Comportamiento adicional 3]* | Comportamiento | Adicional | `src/comportamiento/` | *(Completar)* |

---

## Estructura del Repositorio

```text
patrones-de-diseno/
├── .gitignore                   # Archivos y carpetas ignorados por Git
├── deno.json                    # Archivo de configuración de Deno
├── README.md                    # Documentación del taller
└── src/
    ├── creacional/              # Patrones Creacionales (Builder + 2 adicionales)
    ├── estructural/             # Patrones Estructurales (Adapter, Flyweight + 1 adicional)
    └── comportamiento/          # Patrones de Comportamiento (Observer + 3 adicionales)
```

---

## Instalación y Ejecución con Deno

### 1. Instalación de Deno

Si no tienes Deno instalado:

* **Linux / macOS:**
  ```bash
  curl -fsSL https://deno.land/install.sh | sh
  ```
* **Windows (PowerShell):**
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
deno run src/creacional/builder.ts
```

Para ejecutar en modo observador (se reinicia automáticamente con cada cambio guardado):
```bash
deno run --watch src/creacional/builder.ts
```

---

## Criterios de Evaluación

1. **Correcta implementación** del patrón de diseño.
2. **Relación adecuada** entre el problema planteado y el patrón utilizado.
3. **Claridad** en la explicación y documentación dentro del código.
4. **Organización** del repositorio y del código.
5. **Buenas prácticas** de programación (código claro, organizado e indentado).
6. **Trabajo colaborativo** y cumplimiento de los requisitos establecidos.

