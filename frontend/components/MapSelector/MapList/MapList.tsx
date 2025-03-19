import { useState } from "react";
import { Tabs } from "@mantine/core";

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
                    <Tabs.Tab key={gamemode} value={gamemode}>
                        {gamemode}
                    </Tabs.Tab>
                ))}
            </Tabs.List>

                {gamemodes.map((gamemode: Gamemode) => (
                    <Tabs.Panel key={gamemode} value={gamemode}>
                        <FilteredMapList key={gamemode} gamemode={gamemode} selectedGamemodeState={selectedGamemodeState} scenarioState={scenarioState} />
                    </Tabs.Panel>
                )
                )}

        </Tabs>
    );
}