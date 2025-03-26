import { Card, Group, Image, Text, Tooltip } from "@mantine/core";
import { modals } from '@mantine/modals';

import { Map } from "@/types/Maps";
import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import { getMapImageName } from "@/utils/filenames";

import classes from "./MapTile.module.css";

export default function MapTile({ map, scenarioState, closeMapSelector, disabled } : { map: Map, scenarioState: State<Scenario>, closeMapSelector: () => void, disabled?: boolean }) {

    const [scenario, setScenario] = scenarioState;
    const selected = scenario.map === map;

    const setSelected = (map: Map) => {
        setScenario({ ...scenario, map });
        closeMapSelector();
    };

    const openConfirmModal = () => modals.openConfirmModal({
        title: "Confirm map change",
        children: (
            <Text>
                Are you sure you want to change the map? This will reset all player positions to default positions, and is not reversible.
            </Text>
        ),
        labels: { cancel: "Cancel", confirm: "Yes, I'm sure" },
        confirmProps: { color: 'red' },
        onConfirm: () => setSelected(map),
        onCancel: () => {}
    })

    return (
        <Tooltip.Floating disabled={!disabled} label={"Coming Soon!"}>
            <Card radius="md" className={`${classes.mapTile} ${disabled && classes.disabled} ${selected && classes.selected}`}  onClick={() => {if (!disabled) openConfirmModal()}}>
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