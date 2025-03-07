import { SimpleGrid } from "@mantine/core";

import { ScenarioMetadata } from "@/types/Scenario";

export default function ScenarioSelector(props: { scenarios: ScenarioMetadata[] }) {

    return <SimpleGrid cols={2}>
        {props.scenarios.map(scenario => {
            return <div key={scenario.id}>{scenario.name}</div>
        })}
    </SimpleGrid>

}