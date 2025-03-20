import { Card, Group, Image, Text, Tooltip } from "@mantine/core";

import { Map } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import { getMapImageName } from "@/utils/filenames";

import classes from "./MapTile.module.css";

export default function MapTile({ map, scenarioState, disabled } : { map: Map, scenarioState: State<Scenario>, disabled?: boolean }) {

    const [scenario, setScenario] = scenarioState;
    const selected = scenario.map === map;
    
    const setSelected = (map: Map) => {
        setScenario({ ...scenario, map });
    };

    return (
        <Tooltip.Floating disabled={!disabled} label={"Coming Soon!"}>
            <Card radius="md" className={`${classes.mapTile} ${disabled && classes.disabled} ${selected && classes.selected}`}  onClick={() => {!disabled && setSelected(map)}}>
                <Card.Section>
                    <Image className={classes.mapImage} src={`/maps/thumbnails/${getMapImageName(map)}.webp`} alt={map} height={160} />
                </Card.Section>

                <Card.Section>
                    <Group className={`${classes.mapTitle} ${disabled && classes.disabled} ${selected && classes.selected}`} justify="space-between">
                        <Image src={`/maps/flags/${getMapImageName(map)}.webp`} alt={map} width=    {30} height={20} />
                        <Text fw={selected ? 700 : 500} ta={"center"} size="xl">
                            {map}
                        </Text>
                    </Group>
                </Card.Section>
            </Card>
        </Tooltip.Floating>
    );
}