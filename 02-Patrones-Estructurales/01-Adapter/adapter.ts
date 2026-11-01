/**
 * ! Patrón Adapter
 * Permite que una clase con una interfaz incompatible pueda usarse mediante
 * una interfaz que el resto de la aplicación ya conoce.
 *
 * * Problema: la tienda necesita mostrar precios en pesos colombianos sin
 * depender directamente de la API nativa de formato de números.
 * * ¿Por qué este patrón?: el adaptador aísla la API de formato y permite
 * cambiarla sin modificar el código cliente.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

/**
 * Define la operación de formato que necesita la tienda.
 */
export interface CurrencyFormatter {
  /**
   * Convierte un valor numérico en un precio legible.
   *
   * @param amount Monto que se desea formatear.
   * @returns El monto convertido en texto.
   */
  format(amount: number): string;
}

/**
 * Adapta Intl.NumberFormat a la interfaz CurrencyFormatter.
 */
export class IntlCurrencyAdapter implements CurrencyFormatter {
  /** Formateador nativo configurado para pesos colombianos. */
  private readonly formatter: Intl.NumberFormat;

  /**
   * Crea el adaptador con el formato monetario de Colombia.
   */
  constructor() {
    this.formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    });
  }

  /**
   * Delega el formato en la instancia de Intl.NumberFormat.
   *
   * @param amount Monto que se desea formatear.
   * @returns El monto formateado en pesos colombianos.
   */
  format(amount: number): string {
    return this.formatter.format(amount);
  }
}
