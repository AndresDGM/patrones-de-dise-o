/**
 * ! Patrón Abstract Factory
 * Proporciona una interfaz para crear familias de objetos relacionados sin
 * especificar sus clases concretas.
 *
 * * Problema: una aplicación de consola soporta tema claro y oscuro; los
 * componentes de un tema no deben mezclarse con los del otro.
 * * ¿Por qué este patrón?: cada fábrica produce una familia completa de
 * componentes coherentes con un mismo tema.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Define el comportamiento de un botón.
 */
export interface Button {
  /**
   * Renderiza el botón.
   *
   * @returns Texto que representa el botón.
   */
  render(): string;
}

/**
 * Define el comportamiento de una alerta.
 */
export interface Alert {
  /**
   * Renderiza la alerta con un mensaje.
   *
   * @param message Mensaje a mostrar.
   * @returns Texto que representa la alerta.
   */
  render(message: string): string;
}

/**
 * Botón del tema claro.
 */
export class LightButton implements Button {
  /**
   * Renderiza un botón claro.
   *
   * @returns Texto del botón claro.
   */
  render(): string {
    return "[CLARO] Botón";
  }
}

/**
 * Alerta del tema claro.
 */
export class LightAlert implements Alert {
  /**
   * Renderiza una alerta clara.
   *
   * @param message Mensaje a mostrar.
   * @returns Texto de la alerta clara.
   */
  render(message: string): string {
    return `[CLARO] Alerta: ${message}`;
  }
}

/**
 * Botón del tema oscuro.
 */
export class DarkButton implements Button {
  /**
   * Renderiza un botón oscuro.
   *
   * @returns Texto del botón oscuro.
   */
  render(): string {
    return "[OSCURO] Botón";
  }
}

/**
 * Alerta del tema oscuro.
 */
export class DarkAlert implements Alert {
  /**
   * Renderiza una alerta oscura.
   *
   * @param message Mensaje a mostrar.
   * @returns Texto de la alerta oscura.
   */
  render(message: string): string {
    return `[OSCURO] Alerta: ${message}`;
  }
}

/**
 * Define la creación de una familia de componentes de un tema.
 */
export interface ThemeFactory {
  /**
   * Crea un botón del tema.
   *
   * @returns Un botón del tema.
   */
  createButton(): Button;

  /**
   * Crea una alerta del tema.
   *
   * @returns Una alerta del tema.
   */
  createAlert(): Alert;
}

/**
 * Fábrica de componentes del tema claro.
 */
export class LightThemeFactory implements ThemeFactory {
  /**
   * Crea un botón claro.
   *
   * @returns Botón claro.
   */
  createButton(): Button {
    return new LightButton();
  }

  /**
   * Crea una alerta clara.
   *
   * @returns Alerta clara.
   */
  createAlert(): Alert {
    return new LightAlert();
  }
}

/**
 * Fábrica de componentes del tema oscuro.
 */
export class DarkThemeFactory implements ThemeFactory {
  /**
   * Crea un botón oscuro.
   *
   * @returns Botón oscuro.
   */
  createButton(): Button {
    return new DarkButton();
  }

  /**
   * Crea una alerta oscura.
   *
   * @returns Alerta oscura.
   */
  createAlert(): Alert {
    return new DarkAlert();
  }
}

/**
 * Renderiza una pantalla usando solo las interfaces de producto.
 *
 * @param factory Fábrica del tema a utilizar.
 * @returns No devuelve ningún valor; imprime en consola.
 */
export function renderScreen(factory: ThemeFactory): void {
  const button = factory.createButton();
  const alert = factory.createAlert();
  console.log("%c%s", colors.value, button.render());
  console.log("%c%s", colors.value, alert.render("Operación completada"));
}

// Ejecución
console.log("%cTema claro", colors.title);
renderScreen(new LightThemeFactory());
console.log("%cTema oscuro", colors.title);
renderScreen(new DarkThemeFactory());
