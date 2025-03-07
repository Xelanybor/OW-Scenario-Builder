export enum ControlMap {
    AntarcticPeninsula = 'Antarctic Peninsula',
    Busan = 'Busan',
    Ilios = 'Ilios',
    LijiangTower = 'Lijiang Tower',
    Nepal = 'Nepal',
    Oasis = 'Oasis',
    Samoa = 'Samoa',
}

export enum EscortMap {
    CircuitRoyal = 'Circuit Royal',
    Dorado = 'Dorado',
    Havana = 'Havana',
    Junkertown = 'Junkertown',
    Rialto = 'Rialto',
    Route66 = 'Route 66',
    ShambaliMonastery = 'Shambali Monastery',
    WatchpointGibraltar = 'Watchpoint: Gibraltar',
}

export enum FlashpointMap {
    NewJunkCity = 'New Junk City',
    Suravasa = 'Suravasa',
}

export enum HybridMap {
    BlizzardWorld = 'Blizzard World',
    Eichenwalde = 'Eichenwalde',
    Hollywood = 'Hollywood',
    KingsRow = 'King\'s Row',
    Midtown = 'Midtown',
    Numbani = 'Numbani',
    Paraiso = 'Paraíso',
}

export enum PushMap {
    Colosseo = 'Colosseo',
    Esperanca = 'Esperança',
    NewQueenStreet = 'New Queen Street',
    Runasapi = 'Runasapi',
}

export enum ClashMap {
    Hanaoka = 'Hanaoka',
    ThroneOfAnubis = 'Throne of Anubis',
}

export type Map = ControlMap | EscortMap | FlashpointMap | HybridMap | PushMap | ClashMap;