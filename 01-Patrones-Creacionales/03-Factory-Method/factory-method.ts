/**
 * ! Patrón Factory Method
 * Permite crear objetos sin especificar la clase exacta del objeto que se
 * creará, delegando esa decisión en las subclases.
 *
 * * Problema: una aplicación de domicilios entrega en moto o bicicleta según
 * la ciudad y crear vehículos directamente acopla el código a cada clase.
 * * ¿Por qué este patrón?: Factory Method encapsula la creación del vehículo
 * en cada servicio y mantiene común la planificación del domicilio.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Define la operación común de cualquier vehículo de entrega.
 */
export interface Vehicle {
  /**
   * Entrega un pedido.
   *
   * @param order Pedido que se debe entregar.
   * @returns No devuelve ningún valor; imprime la entrega en consola.
   */
  deliver(order: string): void;
}

/**
 * Vehículo concreto que realiza entregas en motocicleta.
 */
export class Motorcycle implements Vehicle {
  /**
   * Entrega un pedido usando una motocicleta.
   *
   * @param order Pedido que se debe entregar.
   * @returns No devuelve ningún valor; imprime la entrega en consola.
   */
  deliver(order: string): void {
    console.log("Entregando pedido en %cMoto: %s", colors.label, order);
  }
}

/**
 * Vehículo concreto que realiza entregas en bicicleta.
 */
export class Bicycle implements Vehicle {
  /**
   * Entrega un pedido usando una bicicleta.
   *
   * @param order Pedido que se debe entregar.
   * @returns No devuelve ningún valor; imprime la entrega en consola.
   */
  deliver(order: string): void {
    console.log("Entregando pedido en %cBicicleta: %s", colors.value, order);
  }
}
