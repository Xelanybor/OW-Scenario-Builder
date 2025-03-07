"use server"

import { eq } from "drizzle-orm";

import { db } from "@/db"
import { usersTable, scenariosTable } from "@/db/schema"

import { getUser } from "@/actions/userAction";

export async function createNewScenario(ownerDiscordID: string) {
    let owner = await getUser(ownerDiscordID);
    let currentTime = new Date();
    await db.insert(scenariosTable).values({
        name: "New Scenario",
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

export async function getScenarios(ownerDiscordID: string) {
    let owner = await getUser(ownerDiscordID);
    return await db.select().from(scenariosTable).where(eq(scenariosTable.ownerID, owner.id));
}