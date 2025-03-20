import { Dispatch, SetStateAction } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Collapse, SimpleGrid } from "@mantine/core";

import { Map, Gamemode, GamemodeAvailableMaps, DisabledMaps } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import MapTile from "./MapTile/MapTile";

export default function FilteredMapList({ gamemode, selectedGamemodeState, scenarioState } : { gamemode: Gamemode, selectedGamemodeState: State<Gamemode | "">, scenarioState: State<Scenario> }) {
    const maps = GamemodeAvailableMaps[gamemode];

    const [selectedGamemode, setSelectedGamemode] = selectedGamemodeState;

    return (
        <SimpleGrid cols={2}>
            {maps.map((map: Map) => (
                <MapTile key={map} map={map} scenarioState={scenarioState} disabled={DisabledMaps.includes(map)} />
            ))}
        </SimpleGrid>
    );
}