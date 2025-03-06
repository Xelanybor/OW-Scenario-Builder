import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    username: varchar({ length: 255 }).notNull(),
    discordID: varchar({ length: 32 }).notNull(),
    lastLogin: timestamp().notNull(),
});

export const scenariosTable = pgTable("scenarios", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    ownerID: integer().notNull().references(() => usersTable.id),
    createdAt: timestamp().notNull(),
    lastEdited: timestamp().notNull(),
    scenarioData: varchar({ length: 10000 }).notNull(),
});