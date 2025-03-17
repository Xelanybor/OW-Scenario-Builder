import { z } from 'zod';

export const Hero = z.enum([
    'Ana',
    'Ashe',
    'Baptiste',
    'Bastion',
    'Brigitte',
    'Cassidy',
    'D.Va',
    'Doomfist',
    'Echo',
    'Genji',
    'Hanzo',
    'Hazard',
    'Illari',
    'Junker Queen',
    'Junkrat',
    'Juno',
    'Kiriko',
    'Lifeweaver',
    'Lúcio',
    'Mauga',
    'Mei',
    'Mercy',
    'Moira',
    'Orisa',
    'Pharah',
    'Ramattra',
    'Reaper',
    'Reinhardt',
    'Roadhog',
    'Sigma',
    'Sojourn',
    'Soldier: 76',
    'Sombra',
    'Symmetra',
    'Torbjörn',
    'Tracer',
    'Venture',
    'Widowmaker',
    'Winston',
    'Wrecking Ball',
    'Zarya',
    'Zenyatta',
])

export type Hero = z.infer<typeof Hero>;

export const SupportHero = Hero.extract([
    'Ana',
    'Baptiste',
    'Brigitte',
    'Illari',
    'Juno',
    'Kiriko',
    'Lifeweaver',
    'Lúcio',
    'Mercy',
    'Moira',
    'Zenyatta',
])

export type SupportHero = z.infer<typeof SupportHero>;

export const DamageHero = Hero.extract([
    'Ashe',
    'Bastion',
    'Cassidy',
    'Echo',
    'Genji',
    'Hanzo',
    'Junkrat',
    'Mei',
    'Pharah',
    'Reaper',
    'Sojourn',
    'Soldier: 76',
    'Sombra',
    'Symmetra',
    'Torbjörn',
    'Tracer',
    'Venture',
    'Widowmaker',
])

export type DamageHero = z.infer<typeof DamageHero>;

export const TankHero = Hero.extract([
    'D.Va',
    'Doomfist',
    'Hazard',
    'Junker Queen',
    'Mauga',
    'Orisa',
    'Ramattra',
    'Reinhardt',
    'Roadhog',
    'Sigma',
    'Winston',
    'Wrecking Ball',
    'Zarya',
])

export type TankHero = z.infer<typeof TankHero>;