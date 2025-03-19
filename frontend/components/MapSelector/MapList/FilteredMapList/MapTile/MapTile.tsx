import { Dispatch, SetStateAction } from "react";

import { Map } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

export default function MapTile({ map, scenarioState } : { map: Map, scenarioState: State<Scenario> }) {

    const setSelected = (map: Map) => {
        const [scenario, setScenario] = scenarioState;
        setScenario({ ...scenario, map });
    };

    return (
        <div onClick={() => {setSelected(map)}}>
            {map} {map === scenarioState[0].map ? '✅' : ''}
        </div>
    );
}