import { Dispatch, SetStateAction } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Collapse } from "@mantine/core";

import { Map, Gamemode, GamemodeAvailableMaps } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import MapTile from "./MapTile/MapTile";

export default function FilteredMapList({ gamemode, selectedGamemodeState, scenarioState } : { gamemode: Gamemode, selectedGamemodeState: State<Gamemode>, scenarioState: State<Scenario> }) {
    const maps = GamemodeAvailableMaps[gamemode];

    const [selectedGamemode, setSelectedGamemode] = selectedGamemodeState;

    return (
        <>
            <div onClick={() => {setSelectedGamemode(gamemode)}}>
                <h2>{gamemode}</h2>
            </div>
            <Collapse in={gamemode === selectedGamemode}>
                {maps.map((map: Map) => (
                    <MapTile key={map} map={map} scenarioState={scenarioState} />
                ))}
            </Collapse>
        </>
    );
}