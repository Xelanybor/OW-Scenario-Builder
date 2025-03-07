import { z } from 'zod';

export const DiscordID = z.string().regex(/^\d{17,19}$/);
export const Username = z.string().min(1).max(255);
export const ScenarioName = z.string().min(1).max(255);

// Re-export the zod schema used to define types
import { Hero, SupportHero, DamageHero, TankHero } from '../types/Heroes';
export { Hero, TankHero, DamageHero, SupportHero };

import { Map, ControlMap, EscortMap, FlashpointMap, HybridMap, PushMap, ClashMap } from '../types/Maps';
export { Map, ControlMap, EscortMap, FlashpointMap, HybridMap, PushMap, ClashMap };