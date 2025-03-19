import { Card, Center, Group, Image, Text } from "@mantine/core";

import { Map } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import { getMapImageName } from "@/utils/filenames";

export default function MapTile({ map, scenarioState } : { map: Map, scenarioState: State<Scenario> }) {

    const [scenario, setScenario] = scenarioState;
    
    const setSelected = (map: Map) => {
        setScenario({ ...scenario, map });
    };

    return (
        <Card radius="md" onClick={() => {setSelected(map)}}>
            <Card.Section>
                <Image src={`/maps/thumbnails/${getMapImageName(map)}.webp`} alt={map} height={160} />
            </Card.Section>
            
            <Card.Section>
                <Group justify="space-between">
                    <Image src={`/maps/flags/${getMapImageName(map)}.webp`} alt={map} width={30} height={20} />
                    <Text fw={500} ta={"center"} size="xl">
                        {map} {map === scenarioState[0].map ? '✅' : ''}
                    </Text>
                </Group>
            </Card.Section>
        </Card>
    );
}