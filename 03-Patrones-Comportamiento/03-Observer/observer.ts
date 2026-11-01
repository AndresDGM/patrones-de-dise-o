/**
 * ! Patrón Observer
 * Permite avisar automáticamente a varios objetos cuando cambia el estado
 * de un objeto observado.
 *
 * * Problema: varios fans quieren enterarse de la venta de boletas por medios
 * distintos sin que la taquilla conozca los detalles de cada medio.
 * * ¿Por qué este patrón?: Observer conecta la taquilla con sus suscriptores
 * sin obligar a los fans a preguntar constantemente por nuevas boletas.
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Define el comportamiento de un suscriptor.
 */
export interface Observer {
  /**
   * Recibe la actualización de la taquilla.
   *
   * @param concert Nombre del concierto.
   * @param tickets Cantidad de boletas disponibles.
   * @returns No devuelve ningún valor.
   */
  update(concert: string, tickets: number): void;
}

/**
 * Define las operaciones de un objeto observable.
 */
export interface Subject {
  /**
   * Suscribe un observador.
   *
   * @param observer Observador que recibirá los avisos.
   * @returns No devuelve ningún valor.
   */
  subscribe(observer: Observer): void;

  /**
   * Retira un observador.
   *
   * @param observer Observador que dejará de recibir avisos.
   * @returns No devuelve ningún valor.
   */
  unsubscribe(observer: Observer): void;

  /**
   * Notifica a todos los observadores suscritos.
   *
   * @returns No devuelve ningún valor.
   */
  notify(): void;
}

/**
 * Suscriptor que recibe avisos por correo electrónico.
 */
export class EmailSubscriber implements Observer {
  /** Nombre del fan. */
  readonly name: string;

  /**
   * Crea un suscriptor de correo.
   *
   * @param name Nombre del fan.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Muestra el aviso enviado por correo.
   *
   * @param concert Nombre del concierto.
   * @param tickets Cantidad de boletas disponibles.
   * @returns No devuelve ningún valor.
   */
  update(concert: string, tickets: number): void {
    console.log(
      "%cCorreo para %s: %s boletas para %s",
      colors.value,
      this.name,
      tickets,
      concert,
    );
  }
}

/**
 * Suscriptor que recibe avisos por mensaje de texto.
 */
export class SmsSubscriber implements Observer {
  /** Nombre del fan. */
  readonly name: string;

  /**
   * Crea un suscriptor de SMS.
   *
   * @param name Nombre del fan.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Muestra el aviso enviado por SMS.
   *
   * @param concert Nombre del concierto.
   * @param tickets Cantidad de boletas disponibles.
   * @returns No devuelve ningún valor.
   */
  update(concert: string, tickets: number): void {
    console.log(
      "%cSMS para %s: %s boletas para %s",
      colors.label,
      this.name,
      tickets,
      concert,
    );
  }
}

/**
 * Suscriptor que recibe avisos dentro de una aplicación.
 */
export class AppSubscriber implements Observer {
  /** Nombre del fan. */
  readonly name: string;

  /**
   * Crea un suscriptor de aplicación.
   *
   * @param name Nombre del fan.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Muestra el aviso enviado por la aplicación.
   *
   * @param concert Nombre del concierto.
   * @param tickets Cantidad de boletas disponibles.
   * @returns No devuelve ningún valor.
   */
  update(concert: string, tickets: number): void {
    console.log(
      "%cApp para %s: %s boletas para %s",
      colors.title,
      this.name,
      tickets,
      concert,
    );
  }
}
