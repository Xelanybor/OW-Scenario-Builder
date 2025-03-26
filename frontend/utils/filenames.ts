import { Hero } from "@/types/Heroes";
import { Map } from "@/types/Maps";

/**
 * Returns the variation of the given hero's name that is used in the image filenames. This is necessary because some heroes have special characters in their names that are not allowed in filenames or are just a pain to type on a standard keyboard.
 * 
 * e.g. `Soldier: 76` -> `Soldier76`
 * @param hero name of the hero
 * @returns the hero's name as it appears in image filenames
 */
export function getHeroImageName(hero: Hero): string {
    switch (hero) {
        case 'D.Va':
            return 'DVa';
        case 'Lúcio':
            return 'Lucio';
        case 'Soldier: 76':
            return 'Soldier76';
        case 'Torbjörn':
            return 'Torbjorn';
        default:
            return hero;
    }
}

export function getMapImageName(map: Map): string {
    switch (map) {
        case 'King\'s Row':
            return 'KingsRow';
        case 'Watchpoint: Gibraltar':
            return 'WatchpointGibraltar';
        case 'Paraíso':
            return 'Paraiso';
        case 'Esperança':
            return 'Esperanca';
        default:
            return map;
    }
}