export type ScenarioMetadata = {
    id: number;
    name: string;
    ownerID?: number;
    createdAt?: Date;
    lastEdited?: Date;
    scenarioData?: Scenario;
};

export type Scenario = {
    map: string;
    point: string;
    teams: Team[];
};

export type Team = {
    players: Player[];
}


export type Player = {
    hero: string;
    ultCharge: number;
}