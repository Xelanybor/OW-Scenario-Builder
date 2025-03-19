import { useState } from "react";

import { Gamemode } from "@/types/Maps";

import FilteredMapList from "./FilteredMapList/FilteredMapList";

export default function MapList() {

    const selectedGamemodeState = useState<Gamemode>('Control');

    const gamemodes = Gamemode.options;
    return (
        <div>
            {gamemodes.map((gamemode: Gamemode) => (
                <FilteredMapList key={gamemode} gamemode={gamemode} selectedGamemodeState={selectedGamemodeState} />
            ))}
        </div>
    );
}