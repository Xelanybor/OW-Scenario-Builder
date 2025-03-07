export enum SupportHero {
    Ana = 'Ana',
    Baptiste = 'Baptiste',
    Brigitte = 'Brigitte',
    Illari = 'Illari',
    Juno = 'Juno',
    Kiriko = 'Kiriko',
    Lifeweaver = 'Lifeweaver',
    Lucio = 'Lúcio',
    Mercy = 'Mercy',
    Moira = 'Moira',
    Zenyatta = 'Zenyatta',
}

export enum DamageHero {
    Ashe = 'Ashe',
    Bastion = 'Bastion',
    Cassidy = 'Cassidy',
    Echo = 'Echo',
    Genji = 'Genji',
    Hanzo = 'Hanzo',
    Junkrat = 'Junkrat',
    Mei = 'Mei',
    Pharah = 'Pharah',
    Reaper = 'Reaper',
    Sojourn = 'Sojourn',
    Soldier76 = 'Soldier: 76',
    Sombra = 'Sombra',
    Symmetra = 'Symmetra',
    Torbjorn = 'Torbjörn',
    Tracer = 'Tracer',
    Venture = 'Venture',
    Widowmaker = 'Widowmaker',
}

export enum TankHero {
    Dva = 'D.Va',
    Doomfist = 'Doomfist',
    Hazard = 'Hazard',
    JunkerQueen = 'Junker Queen',
    Mauga = 'Mauga',
    Orisa = 'Orisa',
    Ramattra = 'Ramattra',
    Reinhardt = 'Reinhardt',
    Roadhog = 'Roadhog',
    Sigma = 'Sigma',
    Winston = 'Winston',
    WreckingBall = 'Wrecking Ball',
    Zarya = 'Zarya',
}

export type Hero = SupportHero | DamageHero | TankHero;

function getValue(hero: Hero) {
    return hero.valueOf();
}