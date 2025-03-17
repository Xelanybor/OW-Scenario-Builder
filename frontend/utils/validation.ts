import { z } from 'zod';

export const DiscordID = z.string().regex(/^\d{17,19}$/);
export const Username = z.string().min(1).max(255);

// Re-export the zod schema used to define types
import { Hero, SupportHero, DamageHero, TankHero } from '../types/Heroes';
export { Hero, TankHero, DamageHero, SupportHero };

import { Map, ControlMap, EscortMap, FlashpointMap, HybridMap, PushMap, ClashMap } from '../types/Maps';
export { Map, ControlMap, EscortMap, FlashpointMap, HybridMap, PushMap, ClashMap };

export const Scenario = z.object({
    map: Map,
    point: z.coerce.number().int().gte(0).lte(2),
    teams: z.array(z.object({
        players: z.array(z.object({
            hero: Hero,
            ultCharge: z.number().int().gte(0).lte(100),
            position: z.object({
                x: z.number().int(),
                y: z.number().int(),
                z: z.number().int(),
            }),
        })),
    })),
});

export const ScenarioString = z.string().transform((str) => {
    try {
        return JSON.parse(str);
    } catch (e) {
        throw new Error('Invalid JSON');
    }
}).pipe(Scenario).transform((scenario) => JSON.stringify(scenario));

export const ScenarioMetadata = z.object({
    name: z.string().min(1).max(255),
    ownerID: z.number(),
    createdAt: z.string().datetime().transform((str) => new Date(str)),
    lastEdited: z.string().datetime().transform((str) => new Date(str)),
    scenarioData: ScenarioString,
});