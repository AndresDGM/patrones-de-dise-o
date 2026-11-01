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

/**
 * Representa un carrito que delega el cálculo del descuento en una estrategia.
 */
export class ShoppingCart {
  /** Estrategia que se aplicará al total actual. */
  private strategy: DiscountStrategy;

  /** Precios de los productos agregados al carrito. */
  private readonly items: number[] = [];

  /**
   * Crea un carrito con la estrategia indicada o sin descuento.
   *
   * @param strategy Estrategia inicial del carrito.
   */
  constructor(strategy: DiscountStrategy = new NoDiscount()) {
    this.strategy = strategy;
  }

  /**
   * Cambia la estrategia que usará el carrito.
   *
   * @param strategy Nueva estrategia de descuento.
   * @returns No devuelve ningún valor.
   */
  setStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  /**
   * Agrega el precio de un producto al carrito.
   *
   * @param price Precio del producto.
   * @returns No devuelve ningún valor.
   */
  addItem(price: number): void {
    this.items.push(price);
  }

  /**
   * Calcula el subtotal y aplica la estrategia actual.
   *
   * @returns Total final con la estrategia aplicada.
   */
  checkout(): number {
    const subtotal = this.items.reduce((total, price) => total + price, 0);
    return this.strategy.apply(subtotal);
  }
}

/**
 * Imprime el total calculado por el carrito con el nombre de la estrategia.
 *
 * @param strategyName Nombre visible de la estrategia activa.
 * @param cart Carrito cuyo total se desea mostrar.
 * @returns No devuelve ningún valor; imprime el resultado en consola.
 */
export function printCheckout(strategyName: string, cart: ShoppingCart): void {
  console.log("%c%s: $%s", colors.label, strategyName, cart.checkout());
}

// Ejecución
const cart = new ShoppingCart();
cart.addItem(100000);
cart.addItem(50000);

console.log("%cDescuentos del carrito", colors.title);
cart.setStrategy(new NoDiscount());
printCheckout("Sin descuento", cart);
cart.setStrategy(new StudentDiscount());
printCheckout("Descuento estudiantil", cart);
cart.setStrategy(new BlackFridayDiscount());
printCheckout("Descuento de Black Friday", cart);
