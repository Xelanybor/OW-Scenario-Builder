import { z } from "zod";

import { Hero } from "./Heroes";
import { Map } from "./Maps";

export const Player = z.object({
    hero: Hero,
    ultCharge: z.number().int().gte(0).lte(100),
    position: z.object({
        x: z.number().int(),
        y: z.number().int(),
        z: z.number().int(),
    }),
});

export type Player = z.infer<typeof Player>;

export const Team = z.object({
    players: z.array(z.nullable(Player)).length(5),
});

export type Team = z.infer<typeof Team>;

export const Scenario = z.object({
    map: Map,
    point: z.coerce.number().int().gte(0).lte(2),
    teams: z.array(Team),
});

export type Scenario = z.infer<typeof Scenario>;

export const ScenarioString = z.string().transform((str) => {
    try {
        return JSON.parse(str);
    } catch (e) {
        throw new Error('Invalid JSON');
    }
}).pipe(Scenario).transform((scenario) => JSON.stringify(scenario));

export type ScenarioString = z.infer<typeof ScenarioString>;

export const ScenarioMetadata = z.object({
    name: z.string().min(1).max(255),
    ownerID: z.number(),
    createdAt: z.string().datetime().transform((str) => new Date(str)),
    lastEdited: z.string().datetime().transform((str) => new Date(str)),
    scenarioData: ScenarioString,
});

export type ScenarioMetadata = z.infer<typeof ScenarioMetadata>;