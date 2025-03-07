"use server"

import { eq } from "drizzle-orm";

import { db } from "@/db"
import { usersTable, scenariosTable } from "@/db/schema"

import { getUser } from "@/actions/userAction";

export async function createNewScenario(ownerDiscordID: string) {
    let owner = await getUser(ownerDiscordID);
    let currentTime = new Date();
    await db.insert(scenariosTable).values({
        name: await getNextAvailableName("New Scenario", ownerDiscordID),
        ownerID: owner.id,
        createdAt: currentTime,
        lastEdited: currentTime,
        scenarioData: JSON.stringify({
            map: "Oasis",
            point: "0",
            teams: [
                { players: [] },
                { players: [] }
            ],
        }),
    })
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