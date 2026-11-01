/**
 * ! Patrón Builder
 * Permite construir objetos complejos paso a paso, separando la construcción
 * de su representación final.
 *
 * * Problema: crear peticiones HTTP con muchos campos opcionales lleva a
 * constructores con muchos parámetros difíciles de leer y fáciles de equivocar.
 * * ¿Por qué este patrón?: el builder agrupa los campos opcionales en métodos
 * encadenables y produce el objeto final con `build()`.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Representa una petición HTTP con valores por defecto.
 */
export class HttpRequest {
  /** Método HTTP de la petición. */
  method: string;
  /** URL destino de la petición. */
  url: string;
  /** Cabeceras de la petición. */
  headers: Record<string, string>;
  /** Cuerpo opcional de la petición. */
  body?: string;
  /** Tiempo máximo de espera en milisegundos. */
  timeout: number;

  /**
   * Crea una petición HTTP con los valores indicados o por defecto.
   *
   * @param method Método HTTP inicial.
   * @param url URL inicial.
   * @param headers Cabeceras iniciales.
   * @param body Cuerpo inicial.
   * @param timeout Tiempo de espera inicial.
   */
  constructor(
    method = "GET",
    url = "",
    headers: Record<string, string> = {},
    body?: string,
    timeout = 5000,
  ) {
    this.method = method;
    this.url = url;
    this.headers = headers;
    this.body = body;
    this.timeout = timeout;
  }

  /**
   * Imprime la descripción de la petición en consola.
   *
   * @returns No devuelve ningún valor.
   */
  describe(): void {
    console.log("%c%s %s", colors.title, this.method, this.url);
    console.log("%cHeaders:", colors.label, this.headers);
    console.log("%cBody:", colors.label, this.body ?? "(sin cuerpo)");
    console.log("%cTimeout:", colors.label, this.timeout);
  }
}

/**
 * Construye una petición HTTP de forma fluida.
 */
export class HttpRequestBuilder {
  /** Objeto que se está construyendo. */
  private request: HttpRequest;

  /**
   * Crea un builder con una petición vacía por defecto.
   */
  constructor() {
    this.request = new HttpRequest();
  }

  /**
   * Establece el método HTTP.
   *
   * @param method Método HTTP.
   * @returns El mismo builder para encadenar.
   */
  setMethod(method: string): this {
    this.request.method = method;
    return this;
  }

  /**
   * Establece la URL destino.
   *
   * @param url URL destino.
   * @returns El mismo builder para encadenar.
   */
  setUrl(url: string): this {
    this.request.url = url;
    return this;
  }

  /**
   * Agrega o reemplaza una cabecera.
   *
   * @param key Nombre de la cabecera.
   * @param value Valor de la cabecera.
   * @returns El mismo builder para encadenar.
   */
  setHeader(key: string, value: string): this {
    this.request.headers = { ...this.request.headers, [key]: value };
    return this;
  }

  /**
   * Establece el cuerpo de la petición.
   *
   * @param body Cuerpo de la petición.
   * @returns El mismo builder para encadenar.
   */
  setBody(body: string): this {
    this.request.body = body;
    return this;
  }

  /**
   * Establece el tiempo de espera.
   *
   * @param timeout Tiempo en milisegundos.
   * @returns El mismo builder para encadenar.
   */
  setTimeout(timeout: number): this {
    this.request.timeout = timeout;
    return this;
  }

  /**
   * Devuelve la petición construida.
   *
   * @returns La petición HTTP final.
   */
  build(): HttpRequest {
    const built = this.request;
    return built;
  }
}

// Ejecución
const getReq = new HttpRequestBuilder()
  .setMethod("GET")
  .setUrl("https://api.example.com/users")
  .build();

const postReq = new HttpRequestBuilder()
  .setMethod("POST")
  .setUrl("https://api.example.com/users")
  .setHeader("Content-Type", "application/json")
  .setBody(JSON.stringify({ name: "Ana" }))
  .setTimeout(10000)
  .build();

console.log("%cPetición GET", colors.title);
getReq.describe();
console.log("%cPetición POST", colors.title);
postReq.describe();
