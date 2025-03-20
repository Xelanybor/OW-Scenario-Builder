import { useState } from "react";
import { Image, Tabs, ScrollArea } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

import { Map, Gamemode, GamemodeAvailableMaps } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import FilteredMapList from "./FilteredMapList/FilteredMapList";

export default function MapList({ scenarioState } : { scenarioState: State<Scenario> }) {

    const selectedGamemodeState = useState<Gamemode | "">('Control');

    const gamemodes = Gamemode.options;

    const getGamemode = (map: Map) => {
        for (const gamemode of gamemodes.values()) {
            if (GamemodeAvailableMaps[gamemode as Gamemode].includes(map)) {
                return gamemode;
            }
        }
        return '';
    };

    const map = scenarioState[0].map;

    return (
        <Tabs defaultValue={getGamemode(map)}>
            <Tabs.List>
                {gamemodes.map((gamemode: Gamemode) => (
                    <Tabs.Tab key={gamemode} value={gamemode} leftSection={<Image src={`/icons/gamemodes/${gamemode}.svg`} height={30} width={30} color="white" />}>
                        {gamemode}
                    </Tabs.Tab>
                ))}
            </Tabs.List>

                {gamemodes.map((gamemode: Gamemode) => (
                    <Tabs.Panel key={gamemode} value={gamemode}>
                        <ScrollArea h={420} offsetScrollbars={true}>
                        <FilteredMapList key={gamemode} gamemode={gamemode} selectedGamemodeState={selectedGamemodeState} scenarioState={scenarioState} />
                        </ScrollArea>
                    </Tabs.Panel>
                )
                )}

        </Tabs>
    );
}