import { z } from 'zod';

export const Gamemode = z.enum([
    'Control',
    'Escort',
    'Flashpoint',
    'Hybrid',
    'Push',
    'Clash',
]);

export type Gamemode = z.infer<typeof Gamemode>;

export const Map = z.enum([
    'Antarctic Peninsula',
    'Busan',
    'Ilios',
    'Lijiang Tower',
    'Nepal',
    'Oasis',
    'Samoa',
    'Circuit Royal',
    'Dorado',
    'Havana',
    'Junkertown',
    'Rialto',
    'Route 66',
    'Shambali Monastery',
    'Watchpoint: Gibraltar',
    'New Junk City',
    'Suravasa',
    'Blizzard World',
    'Eichenwalde',
    'Hollywood',
    'King\'s Row',
    'Midtown',
    'Numbani',
    'Paraíso',
    'Colosseo',
    'Esperança',
    'New Queen Street',
    'Runasapi',
    'Hanaoka',
    'Throne of Anubis',
]);

export type Map = z.infer<typeof Map>;

export const ControlMap = Map.extract([
    'Antarctic Peninsula',
    'Busan',
    'Ilios',
    'Lijiang Tower',
    'Nepal',
    'Oasis',
    'Samoa',
]);

export type ControlMap = z.infer<typeof ControlMap>;

export const EscortMap = Map.extract([
    'Circuit Royal',
    'Dorado',
    'Havana',
    'Junkertown',
    'Rialto',
    'Route 66',
    'Shambali Monastery',
    'Watchpoint: Gibraltar',
]);

export type EscortMap = z.infer<typeof EscortMap>;

export const FlashpointMap = Map.extract([
    'New Junk City',
    'Suravasa',
]);

export type FlashpointMap = z.infer<typeof FlashpointMap>;

export const HybridMap = Map.extract([
    'Blizzard World',
    'Eichenwalde',
    'Hollywood',
    'King\'s Row',
    'Midtown',
    'Numbani',
    'Paraíso',
]);

export type HybridMap = z.infer<typeof HybridMap>;

export const PushMap = Map.extract([
    'Colosseo',
    'Esperança',
    'New Queen Street',
    'Runasapi',
]);

export type PushMap = z.infer<typeof PushMap>;

export const ClashMap = Map.extract([
    'Hanaoka',
    'Throne of Anubis',
]);

export type ClashMap = z.infer<typeof ClashMap>;

export const GamemodeAvailableMaps: Record<Gamemode, Map[]> = {
    'Control': ControlMap.options,
    'Escort': EscortMap.options,
    'Flashpoint': FlashpointMap.options,
    'Hybrid': HybridMap.options,
    'Push': PushMap.options,
    'Clash': ClashMap.options,
};