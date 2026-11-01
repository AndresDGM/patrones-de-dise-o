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

/**
 * Agrega queso a una arepa.
 */
export class CheeseDecorator extends ArepaDecorator {
  /**
   * Crea el decorador de queso.
   *
   * @param arepa Arepa a la que se agregará queso.
   */
  constructor(arepa: Arepa) {
    super(arepa);
  }

  /**
   * Agrega queso a la descripción existente.
   *
   * @returns La descripción con queso.
   */
  override getDescription(): string {
    return `${this.arepa.getDescription()} con queso`;
  }

  /**
   * Suma el precio del queso al precio existente.
   *
   * @returns El precio con queso.
   */
  override getPrice(): number {
    return this.arepa.getPrice() + 2000;
  }
}

/**
 * Agrega huevo a una arepa.
 */
export class EggDecorator extends ArepaDecorator {
  /**
   * Crea el decorador de huevo.
   *
   * @param arepa Arepa a la que se agregará huevo.
   */
  constructor(arepa: Arepa) {
    super(arepa);
  }

  /**
   * Agrega huevo a la descripción existente.
   *
   * @returns La descripción con huevo.
   */
  override getDescription(): string {
    return `${this.arepa.getDescription()} con huevo`;
  }

  /**
   * Suma el precio del huevo al precio existente.
   *
   * @returns El precio con huevo.
   */
  override getPrice(): number {
    return this.arepa.getPrice() + 1500;
  }
}

/**
 * Agrega carne a una arepa.
 */
export class MeatDecorator extends ArepaDecorator {
  /**
   * Crea el decorador de carne.
   *
   * @param arepa Arepa a la que se agregará carne.
   */
  constructor(arepa: Arepa) {
    super(arepa);
  }

  /**
   * Agrega carne a la descripción existente.
   *
   * @returns La descripción con carne.
   */
  override getDescription(): string {
    return `${this.arepa.getDescription()} con carne`;
  }

  /**
   * Suma el precio de la carne al precio existente.
   *
   * @returns El precio con carne.
   */
  override getPrice(): number {
    return this.arepa.getPrice() + 3500;
  }
}

/**
 * Imprime una arepa decorada con su descripción y precio final.
 *
 * @param orderName Nombre usado para identificar el pedido.
 * @param arepa Arepa que puede tener uno o varios decoradores.
 * @returns No devuelve ningún valor; imprime el pedido en consola.
 */
export function printOrder(orderName: string, arepa: Arepa): void {
  console.log("%c%s", colors.label, orderName);
  console.log("  Descripción: %s", arepa.getDescription());
  console.log("  Precio total: $%s", arepa.getPrice());
}

// Ejecución
const cheeseArepa = new CheeseDecorator(
  new BasicArepa("Arepa de maíz", 6000),
);
const cheeseAndEggArepa = new EggDecorator(cheeseArepa);
const completeArepa = new MeatDecorator(cheeseAndEggArepa);

console.log("%cPedidos de la arepería", colors.title);
printOrder("Pedido 1", cheeseArepa);
printOrder("Pedido 2", cheeseAndEggArepa);
printOrder("Pedido 3", completeArepa);
