import { Dispatch, SetStateAction } from "react";
import { useDisclosure } from "@mantine/hooks";

import { Map, Gamemode, GamemodeAvailableMaps } from "@/types/Maps";
import { Collapse } from "@mantine/core";

export default function FilteredMapList({ gamemode, selectedGamemodeState } : { gamemode: Gamemode, selectedGamemodeState: [Gamemode, Dispatch<SetStateAction<Gamemode>>] }) {
    const maps = GamemodeAvailableMaps[gamemode];

    const [selectedGamemode, setSelectedGamemode] = selectedGamemodeState;

    return (
        <>
            <div onClick={() => {setSelectedGamemode(gamemode)}}>
                <h2>{gamemode}</h2>
            </div>
            <Collapse in={gamemode === selectedGamemode}>
                {maps.map((map: Map) => (
                    <div key={map}>{map}</div>
                ))}
            </Collapse>
        </>
    );
}