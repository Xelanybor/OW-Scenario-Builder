import { auth } from "@/auth";
import { NextResponse } from "next/server";

import { getScenarios } from "@/actions/scenarioAction";

export const GET = auth(async (request) => {
    if (!request.auth) return new NextResponse(null, { status: 401 });
    const discordID = request.auth.user!.discord_id;
    if (!discordID) return new NextResponse(null, { status: 404 });
    return NextResponse.json(await getScenarios(discordID));
});