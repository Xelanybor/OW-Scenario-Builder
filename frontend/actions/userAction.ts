"use server"

import { eq } from "drizzle-orm";
import { time } from "drizzle-orm/pg-core";

import { db } from "@/db"
import { usersTable } from "@/db/schema"
import { datetime } from "drizzle-orm/mysql-core";

async function addUser(discordID: string, username: string) {
    let datetime = new Date();
    await db.insert(usersTable).values({
        discordID: discordID,
        username: username,
        lastLogin: datetime,
    });
}

export async function onUserLogIn(discordID: string, username: string) {
    let userExists = await db.select().from(usersTable).where(eq(usersTable.discordID, discordID));
    if (userExists.length === 0) {
        await addUser(discordID, username);
    }
    else {
        let datetime = new Date();
        await db.update(usersTable).set({
            username: username,
            lastLogin: datetime,
        }).where(eq(usersTable.discordID, discordID));
    }
}