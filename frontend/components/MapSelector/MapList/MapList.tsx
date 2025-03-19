import { useState } from "react";

import { Gamemode } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import FilteredMapList from "./FilteredMapList/FilteredMapList";

export default function MapList({ scenarioState } : { scenarioState: State<Scenario> }) {

    const selectedGamemodeState = useState<Gamemode>('Control');

    const gamemodes = Gamemode.options;
    return (
        <div>
            {gamemodes.map((gamemode: Gamemode) => (
                <FilteredMapList key={gamemode} gamemode={gamemode} selectedGamemodeState={selectedGamemodeState} scenarioState={scenarioState} />
            ))}
        </div>
    );
}