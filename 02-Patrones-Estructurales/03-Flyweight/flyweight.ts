/**
 * ! Patrón Flyweight
 * Comparte el estado que se repite entre muchos objetos para ahorrar memoria.
 *
 * * Problema: un bosque con miles de árboles repite el nombre, color y textura
 * de cada especie en todos los árboles.
 * * ¿Por qué este patrón?: Flyweight guarda los datos de cada especie una sola
 * vez y deja en cada árbol únicamente su posición.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Contiene los datos compartidos por árboles de una misma especie.
 */
export class TreeType {
  /** Nombre de la especie. */
  readonly name: string;

  /** Color usado al dibujar la especie. */
  readonly color: string;

  /** Textura compartida de la especie. */
  readonly texture: string;

  /**
   * Crea un tipo de árbol.
   *
   * @param name Nombre de la especie.
   * @param color Color de la especie.
   * @param texture Textura de la especie.
   */
  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  /**
   * Dibuja un árbol de este tipo en una posición.
   *
   * @param x Posición horizontal.
   * @param y Posición vertical.
   * @returns No devuelve ningún valor.
   */
  draw(x: number, y: number): void {
    console.log(
      "%cÁrbol %s en (%s, %s), textura: %s",
      this.color,
      this.name,
      x,
      y,
      this.texture,
    );
  }
}

/**
 * Reutiliza los tipos de árbol que tienen los mismos datos compartidos.
 */
export class TreeTypeFactory {
  /** Tipos creados y guardados para reutilizarlos. */
  private readonly treeTypes = new Map<string, TreeType>();

  /**
   * Busca un tipo existente o crea uno nuevo.
   *
   * @param name Nombre de la especie.
   * @param color Color de la especie.
   * @param texture Textura de la especie.
   * @returns El tipo de árbol compartido.
   */
  getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`;
    const treeType = this.treeTypes.get(key);

    if (treeType) {
      return treeType;
    }

    const newTreeType = new TreeType(name, color, texture);
    this.treeTypes.set(key, newTreeType);
    return newTreeType;
  }

  /**
   * Cuenta cuántos tipos compartidos existen.
   *
   * @returns Cantidad de tipos de árbol creados.
   */
  getCount(): number {
    return this.treeTypes.size;
  }
}

/**
 * Representa un árbol concreto con posición y tipo compartido.
 */
export class Tree {
  /** Posición horizontal del árbol. */
  readonly x: number;

  /** Posición vertical del árbol. */
  readonly y: number;

  /** Tipo compartido del árbol. */
  readonly treeType: TreeType;

  /**
   * Crea un árbol.
   *
   * @param x Posición horizontal.
   * @param y Posición vertical.
   * @param treeType Tipo compartido del árbol.
   */
  constructor(x: number, y: number, treeType: TreeType) {
    this.x = x;
    this.y = y;
    this.treeType = treeType;
  }

  /**
   * Delega el dibujo en el tipo compartido.
   *
   * @returns No devuelve ningún valor.
   */
  draw(): void {
    this.treeType.draw(this.x, this.y);
  }
}

/**
 * Mantiene los árboles del bosque y los planta usando la fábrica.
 */
export class Forest {
  /** Árboles plantados en el bosque. */
  private readonly trees: Tree[] = [];

  /** Fábrica que reutiliza los tipos de árbol. */
  private readonly treeTypeFactory: TreeTypeFactory;

  /**
   * Crea un bosque.
   *
   * @param treeTypeFactory Fábrica de tipos compartidos.
   */
  constructor(treeTypeFactory = new TreeTypeFactory()) {
    this.treeTypeFactory = treeTypeFactory;
  }

  /**
   * Planta un árbol en el bosque.
   *
   * @param x Posición horizontal.
   * @param y Posición vertical.
   * @param name Nombre de la especie.
   * @param color Color de la especie.
   * @param texture Textura de la especie.
   * @returns No devuelve ningún valor.
   */
  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string,
  ): void {
    const treeType = this.treeTypeFactory.getTreeType(name, color, texture);
    this.trees.push(new Tree(x, y, treeType));
  }

  /**
   * Dibuja los árboles del bosque.
   *
   * @param limit Cantidad máxima de árboles que se dibujarán.
   * @returns No devuelve ningún valor.
   */
  draw(limit = this.trees.length): void {
    for (const tree of this.trees.slice(0, limit)) {
      tree.draw();
    }
  }

  /**
   * Cuenta los árboles plantados.
   *
   * @returns Cantidad de árboles del bosque.
   */
  getTreeCount(): number {
    return this.trees.length;
  }

  /**
   * Cuenta los tipos compartidos creados por el bosque.
   *
   * @returns Cantidad de tipos únicos.
   */
  getTreeTypeCount(): number {
    return this.treeTypeFactory.getCount();
  }
}
