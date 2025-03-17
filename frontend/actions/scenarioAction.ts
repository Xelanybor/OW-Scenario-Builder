"use server"

import { eq } from "drizzle-orm";

import { db } from "@/db"
import { scenariosTable } from "@/db/schema"

import { ScenarioMetadata } from "@/utils/validation";

import { getUser } from "@/actions/userAction";

/**
 * Create a new scenario in the database with the given ownerDiscordID.
 * 
 * @param ownerDiscordID Discord user ID of the user creating the scenario
 */
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

/**
 * Check if there already exists a scenario with the given name owned by the same user.
 * If there is, append a number to the end of the name to make it unique. If not, return the name as is. Numbers are appended like so: "New Scenario" -> "New Scenario (1)" -> "New Scenario (2)" -> ...
 * 
 * @param scenarioName desired name of the scenario
 * @param ownerDiscordID Discord user ID of the user creating the scenario
 * @returns a unique name for the scenario
 */
async function getNextAvailableName(scenarioName: string, ownerDiscordID: string) {
    let scenarios = await getScenarios(ownerDiscordID);
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

/**
 * Get all scenarios owned by the user with the given Discord user ID.
 * @param ownerDiscordID Discord user ID of the user
 * @returns an array of all scenarios owned by the user
 */
export async function getScenarios(ownerDiscordID: string) {
    let owner = await getUser(ownerDiscordID);
    let scenarios = await db.select().from(scenariosTable).where(eq(scenariosTable.ownerID, owner.id));
    for (let scenario of scenarios) {
        scenario.scenarioData = JSON.parse(scenario.scenarioData);
    }
    return scenarios;
}