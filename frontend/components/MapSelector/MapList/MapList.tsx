import { useState } from "react";
import { Image, Tabs, ScrollArea, Tooltip } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

import { Map, Gamemode, GamemodeAvailableMaps, DisabledMaps } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import FilteredMapList from "./FilteredMapList/FilteredMapList";

export default function MapList({ scenarioState, closeMapSelector } : { scenarioState: State<Scenario>, closeMapSelector: () => void }) {

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
                {gamemodes.map((gamemode: Gamemode) => {
                    const disabled = GamemodeAvailableMaps[gamemode].every((map: Map) => DisabledMaps.includes(map));
                    return (
                        <Tooltip disabled={!disabled} label="Coming Soon!" key={gamemode} withArrow>
                            <Tabs.Tab disabled={disabled} key={gamemode} value={gamemode} leftSection={<Image src={`/icons/gamemodes/${gamemode}.svg`} height={30} width={30} color="white" />}>
                                {gamemode}
                            </Tabs.Tab>
                        </Tooltip>
                    )
                })}
            </Tabs.List>

                {gamemodes.map((gamemode: Gamemode) => (
                    <Tabs.Panel key={gamemode} value={gamemode}>
                        <ScrollArea h={420} offsetScrollbars={true}>
                        <FilteredMapList key={gamemode} gamemode={gamemode} selectedGamemodeState={selectedGamemodeState} scenarioState={scenarioState} closeMapSelector={closeMapSelector} />
                        </ScrollArea>
                    </Tabs.Panel>
                )
                )}

        </Tabs>
    );
}