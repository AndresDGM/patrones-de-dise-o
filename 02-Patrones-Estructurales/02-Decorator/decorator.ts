/**
 * ! Patrón Decorator
 * Permite agregar responsabilidades a un objeto envolviéndolo con otros
 * objetos que mantienen la misma interfaz.
 *
 * * Problema: una arepería vende arepas con adiciones combinables y crear una
 * subclase para cada combinación sería inmantenible.
 * * ¿Por qué este patrón?: los decoradores permiten combinar adiciones en
 * tiempo de ejecución sin crear una clase por cada pedido posible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Define las operaciones comunes de una arepa y sus adiciones.
 */
export interface Arepa {
  /**
   * Obtiene la descripción del pedido.
   *
   * @returns La descripción de la arepa.
   */
  getDescription(): string;

  /**
   * Obtiene el precio total del pedido.
   *
   * @returns El precio de la arepa.
   */
  getPrice(): number;
}

/**
 * Representa una arepa sin adiciones.
 */
export class BasicArepa implements Arepa {
  /** Descripción de la arepa básica. */
  private readonly description: string;

  /** Precio base de la arepa. */
  private readonly price: number;

  /**
   * Crea una arepa básica con su descripción y precio inicial.
   *
   * @param description Texto que identifica la arepa.
   * @param price Precio base de la arepa.
   */
  constructor(description: string, price: number) {
    this.description = description;
    this.price = price;
  }

  /**
   * Devuelve la descripción de la arepa básica.
   *
   * @returns La descripción original.
   */
  getDescription(): string {
    return this.description;
  }

  /**
   * Devuelve el precio base de la arepa.
   *
   * @returns El precio base.
   */
  getPrice(): number {
    return this.price;
  }
}

/**
 * Base de los decoradores que delega las operaciones en una arepa envuelta.
 */
export abstract class ArepaDecorator implements Arepa {
  /** Arepa que recibe las nuevas responsabilidades. */
  protected readonly arepa: Arepa;

  /**
   * Crea un decorador para una arepa existente.
   *
   * @param arepa Arepa que será envuelta.
   */
  constructor(arepa: Arepa) {
    this.arepa = arepa;
  }

  /**
   * Delega la descripción en la arepa envuelta.
   *
   * @returns La descripción de la arepa envuelta.
   */
  getDescription(): string {
    return this.arepa.getDescription();
  }

  /**
   * Delega el precio en la arepa envuelta.
   *
   * @returns El precio de la arepa envuelta.
   */
  getPrice(): number {
    return this.arepa.getPrice();
  }
}
