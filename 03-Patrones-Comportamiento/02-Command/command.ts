/**
 * ! Patrón Command
 * Encapsula una solicitud como un objeto, permitiendo parametrizar clientes,
 * encolar o registrar solicitudes y deshacer operaciones.
 *
 * * Problema: un editor de texto necesita deshacer acciones; si cada acción
 * se ejecuta directamente, no queda registro para revertirla.
 * * ¿Por qué este patrón?: cada acción se convierte en un comando con
 * `execute` y `undo`, y un invocador mantiene el historial.
 *
 * https://refactoring.guru/es/design-patterns/command
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Define la interfaz común para los comandos.
 */
export interface Command {
  /**
   * Ejecuta la acción.
   *
   * @returns No devuelve ningún valor.
   */
  execute(): void;

  /**
   * Revierte la acción.
   *
   * @returns No devuelve ningún valor.
   */
  undo(): void;
}

/**
 * Receptor que mantiene el contenido de texto.
 */
export class TextEditor {
  /** Contenido actual del editor. */
  content: string = "";

  /**
   * Escribe texto al final del contenido.
   *
   * @param text Texto a agregar.
   * @returns No devuelve ningún valor.
   */
  write(text: string): void {
    this.content += text;
  }

  /**
   * Borra los últimos `count` caracteres.
   *
   * @param count Cantidad de caracteres a borrar.
   * @returns No devuelve ningún valor.
   */
  deleteLast(count: number): void {
    this.content = this.content.slice(0, -count);
  }

  /**
   * Muestra el contenido actual.
   *
   * @returns No devuelve ningún valor.
   */
  show(): void {
    console.log("%cContenido: %s", colors.value, this.content);
  }
}

/**
 * Comando para escribir texto.
 */
export class WriteCommand implements Command {
  /** Editor sobre el que actúa. */
  private readonly editor: TextEditor;
  /** Texto a escribir. */
  private readonly text: string;

  /**
   * Crea el comando de escritura.
   *
   * @param editor Editor destino.
   * @param text Texto a escribir.
   */
  constructor(editor: TextEditor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  /**
   * Ejecuta la escritura.
   *
   * @returns No devuelve ningún valor.
   */
  execute(): void {
    this.editor.write(this.text);
  }

  /**
   * Revierte borrando el texto escrito.
   *
   * @returns No devuelve ningún valor.
   */
  undo(): void {
    this.editor.deleteLast(this.text.length);
  }
}

/**
 * Comando para borrar texto.
 */
export class DeleteCommand implements Command {
  /** Editor sobre el que actúa. */
  private readonly editor: TextEditor;
  /** Cantidad de caracteres a borrar. */
  private readonly count: number;
  /** Texto borrado, guardado para revertir. */
  private deleted: string = "";

  /**
   * Crea el comando de borrado.
   *
   * @param editor Editor destino.
   * @param count Cantidad de caracteres a borrar.
   */
  constructor(editor: TextEditor, count: number) {
    this.editor = editor;
    this.count = count;
  }

  /**
   * Ejecuta el borrado guardando el texto eliminado.
   *
   * @returns No devuelve ningún valor.
   */
  execute(): void {
    this.deleted = this.editor.content.slice(-this.count);
    this.editor.deleteLast(this.count);
  }

  /**
   * Revierte restaurando el texto borrado.
   *
   * @returns No devuelve ningún valor.
   */
  undo(): void {
    this.editor.write(this.deleted);
  }
}

/**
 * Invocador que mantiene el historial de comandos.
 */
export class EditorInvoker {
  /** Historial de comandos ejecutados. */
  private readonly history: Command[] = [];

  /**
   * Ejecuta un comando y lo agrega al historial.
   *
   * @param command Comando a ejecutar.
   * @returns No devuelve ningún valor.
   */
  run(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  /**
   * Deshace el último comando ejecutado.
   *
   * @returns No devuelve ningún valor.
   */
  undo(): void {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

// Ejecución
const editor = new TextEditor();
const invoker = new EditorInvoker();

invoker.run(new WriteCommand(editor, "Hola"));
editor.show();
invoker.run(new WriteCommand(editor, " "));
editor.show();
invoker.run(new WriteCommand(editor, "mundo"));
editor.show();
invoker.run(new DeleteCommand(editor, 5));
editor.show();
invoker.undo();
editor.show();
invoker.undo();
editor.show();
