/**
 * ! Patrón Strategy
 * Permite definir una familia de algoritmos intercambiables y elegir cuál
 * usar sin cambiar el objeto que los ejecuta.
 *
 * * Problema: el carrito aplica descuentos distintos según el tipo de cliente
 * y un if/else gigante crecería con cada promoción nueva.
 * * ¿Por qué este patrón?: cada descuento queda aislado en una estrategia y
 * el carrito puede cambiarla en tiempo de ejecución.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Define la operación común para todas las estrategias de descuento.
 */
export interface DiscountStrategy {
  /**
   * Aplica el descuento correspondiente a un total.
   *
   * @param total Total antes del descuento.
   * @returns Total después de aplicar la estrategia.
   */
  apply(total: number): number;
}

/**
 * Mantiene el total sin aplicar ningún descuento.
 */
export class NoDiscount implements DiscountStrategy {
  /**
   * Devuelve el total sin modificaciones.
   *
   * @param total Total de la compra.
   * @returns El mismo total recibido.
   */
  apply(total: number): number {
    return total;
  }
}

/**
 * Aplica un descuento del diez por ciento para estudiantes.
 */
export class StudentDiscount implements DiscountStrategy {
  /**
   * Reduce el total en un diez por ciento.
   *
   * @param total Total de la compra.
   * @returns El total con descuento estudiantil.
   */
  apply(total: number): number {
    return total * 0.9;
  }
}

/**
 * Aplica un descuento del treinta por ciento durante Black Friday.
 */
export class BlackFridayDiscount implements DiscountStrategy {
  /**
   * Reduce el total en un treinta por ciento.
   *
   * @param total Total de la compra.
   * @returns El total con descuento de Black Friday.
   */
  apply(total: number): number {
    return total * 0.7;
  }
}
