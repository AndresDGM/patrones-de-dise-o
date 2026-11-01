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
