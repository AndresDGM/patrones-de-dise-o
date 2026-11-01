/**
 * ! Patrón State
 * Permite que un objeto cambie su comportamiento cuando cambia su estado
 * interno.
 *
 * * Problema: un reproductor responde de manera diferente a los botones según
 * esté detenido, reproduciendo o pausado.
 * * ¿Por qué este patrón?: cada estado contiene sus propias acciones y evita
 * repetir muchos if/else dentro del reproductor.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

import { colors } from "../../helpers/colors.ts";

/**
 * Define las acciones disponibles para un estado del reproductor.
 */
export interface PlayerState {
  /**
   * Decide qué ocurre al presionar reproducir.
   *
   * @param player Reproductor que ejecuta la acción.
   * @returns No devuelve ningún valor.
   */
  play(player: MusicPlayer): void;

  /**
   * Decide qué ocurre al presionar pausar.
   *
   * @param player Reproductor que ejecuta la acción.
   * @returns No devuelve ningún valor.
   */
  pause(player: MusicPlayer): void;

  /**
   * Decide qué ocurre al presionar detener.
   *
   * @param player Reproductor que ejecuta la acción.
   * @returns No devuelve ningún valor.
   */
  stop(player: MusicPlayer): void;
}

/**
 * Estado de un reproductor detenido.
 */
export class StoppedState implements PlayerState {
  /**
   * Inicia la canción y cambia al estado reproduciendo.
   *
   * @param player Reproductor que iniciará la canción.
   * @returns No devuelve ningún valor.
   */
  play(player: MusicPlayer): void {
    console.log("%cIniciando la canción", colors.value);
    player.setState(new PlayingState());
  }

  /**
   * Informa que una canción detenida no puede pausarse.
   *
   * @param player Reproductor detenido.
   * @returns No devuelve ningún valor.
   */
  pause(player: MusicPlayer): void {
    console.log(
      "%cNo se puede pausar %s: la canción está detenida",
      colors.label,
      player.currentSong,
    );
  }

  /**
   * Informa que la canción ya está detenida.
   *
   * @param player Reproductor detenido.
   * @returns No devuelve ningún valor.
   */
  stop(player: MusicPlayer): void {
    console.log("%cLa canción ya está detenida: %s", colors.label, player.currentSong);
  }
}

/**
 * Estado de un reproductor que está reproduciendo una canción.
 */
export class PlayingState implements PlayerState {
  /**
   * Informa que la canción ya está reproduciéndose.
   *
   * @param player Reproductor que ejecuta la acción.
   * @returns No devuelve ningún valor.
   */
  play(player: MusicPlayer): void {
    console.log(
      "%cLa canción ya se está reproduciendo: %s",
      colors.label,
      player.currentSong,
    );
  }

  /**
   * Pausa la canción y cambia al estado pausado.
   *
   * @param player Reproductor que pausará la canción.
   * @returns No devuelve ningún valor.
   */
  pause(player: MusicPlayer): void {
    console.log("%cPausando la canción", colors.value);
    player.setState(new PausedState());
  }

  /**
   * Detiene la canción y cambia al estado detenido.
   *
   * @param player Reproductor que detendrá la canción.
   * @returns No devuelve ningún valor.
   */
  stop(player: MusicPlayer): void {
    console.log("%cDeteniendo la canción", colors.value);
    player.setState(new StoppedState());
  }
}

/**
 * Estado de un reproductor cuya canción está pausada.
 */
export class PausedState implements PlayerState {
  /**
   * Reanuda la canción y cambia al estado reproduciendo.
   *
   * @param player Reproductor que reanudará la canción.
   * @returns No devuelve ningún valor.
   */
  play(player: MusicPlayer): void {
    console.log("%cReanudando la canción", colors.value);
    player.setState(new PlayingState());
  }

  /**
   * Informa que la canción ya está pausada.
   *
   * @param player Reproductor cuya canción está pausada.
   * @returns No devuelve ningún valor.
   */
  pause(player: MusicPlayer): void {
    console.log("%cLa canción ya está pausada: %s", colors.label, player.currentSong);
  }

  /**
   * Detiene la canción y cambia al estado detenido.
   *
   * @param player Reproductor que detendrá la canción.
   * @returns No devuelve ningún valor.
   */
  stop(player: MusicPlayer): void {
    console.log("%cDeteniendo la canción desde pausa", colors.value);
    player.setState(new StoppedState());
  }
}

/**
 * Reproductor que delega sus botones en el estado actual.
 */
export class MusicPlayer {
  /** Canción actual del reproductor. */
  readonly currentSong: string;

  /** Estado que decide el comportamiento de los botones. */
  private state: PlayerState;

  /**
   * Crea un reproductor detenido.
   *
   * @param currentSong Canción que se reproducirá.
   */
  constructor(currentSong: string) {
    this.currentSong = currentSong;
    this.state = new StoppedState();
  }

  /**
   * Cambia el estado actual del reproductor.
   *
   * @param state Nuevo estado.
   * @returns No devuelve ningún valor.
   */
  setState(state: PlayerState): void {
    this.state = state;
  }

  /**
   * Delega el botón reproducir en el estado actual.
   *
   * @returns No devuelve ningún valor.
   */
  play(): void {
    this.state.play(this);
  }

  /**
   * Delega el botón pausar en el estado actual.
   *
   * @returns No devuelve ningún valor.
   */
  pause(): void {
    this.state.pause(this);
  }

  /**
   * Delega el botón detener en el estado actual.
   *
   * @returns No devuelve ningún valor.
   */
  stop(): void {
    this.state.stop(this);
  }

  /**
   * Obtiene el nombre del estado actual.
   *
   * @returns Nombre de la clase del estado.
   */
  getStateName(): string {
    return this.state.constructor.name;
  }
}
