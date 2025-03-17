"use server"

import { eq } from "drizzle-orm";

import { db } from "@/db"
import { scenariosTable } from "@/db/schema"

import { ScenarioMetadata } from "@/utils/validation";

import { getUser } from "@/actions/userAction";

export async function createNewScenario(ownerDiscordID: string) {
    let owner = await getUser(ownerDiscordID);
    let currentTime = new Date();

    let scenario;

    try {
        scenario = ScenarioMetadata.parse({
            name: await getNextAvailableName("New Scenario", ownerDiscordID),
            ownerID: owner.id,
            createdAt: currentTime.toISOString(),
            lastEdited: currentTime.toISOString(),
            scenarioData: JSON.stringify({
                map: "Oasis",
                point: 0,
                teams: [
                    { players: [] },
                    { players: [] }
                ],
            }),
        });
        
    }
    catch (e) {
        throw new Error("Invalid scenario data");
    }

    await db.insert(scenariosTable).values(scenario);
}

async function getNextAvailableName(scenarioName: string, ownerDiscordID: string) {
    let owner = await getUser(ownerDiscordID);
    let scenarios = await db.select().from(scenariosTable).where(eq(scenariosTable.ownerID, owner.id));
    let names = scenarios.map(scenario => scenario.name);
    if (!names.includes(scenarioName)) {
        return scenarioName;
    }
    let i = 1;
    while (names.includes(`${scenarioName} (${i})`)) {
        i++;
    }
    return `${scenarioName} (${i})`;
}

export async function getScenarios(ownerDiscordID: string) {
    let owner = await getUser(ownerDiscordID);
    let scenarios = await db.select().from(scenariosTable).where(eq(scenariosTable.ownerID, owner.id));
    for (let scenario of scenarios) {
        scenario.scenarioData = JSON.parse(scenario.scenarioData);
    }
    return scenarios;
}