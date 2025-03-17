"use server"

import { eq } from "drizzle-orm";

import { db } from "@/db"
import { usersTable } from "@/db/schema"

import { DiscordID, Username } from "@/utils/validation"

async function addUser(discordID: string, username: string) {

    discordID = DiscordID.parse(discordID);
    username = Username.parse(username);

    let currentTime = new Date();
    await db.insert(usersTable).values({
        discordID: discordID,
        username: username,
        lastLogin: currentTime,
    });
}

export async function onUserLogIn(discordID: string, username: string) {
    let userExists = await db.select().from(usersTable).where(eq(usersTable.discordID, discordID));
    if (userExists.length === 0) {
        await addUser(discordID, username);
    }
    else {
        let currentTime = new Date();
        await db.update(usersTable).set({
            username: username,
            lastLogin: currentTime,
        }).where(eq(usersTable.discordID, discordID));
    }
}

export async function getUser(discordID: string) {

    discordID = DiscordID.parse(discordID);

    let users = await db.select().from(usersTable).where(eq(usersTable.discordID, discordID));
    return users[0];
}