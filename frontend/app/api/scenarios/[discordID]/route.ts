import { getScenarios } from "@/actions/scenarioAction";

export async function GET(request: Request, { params }: { params: { discordID: string } }) {
    const { discordID } = await params;
    return new Response(JSON.stringify(await getScenarios(discordID)));
}