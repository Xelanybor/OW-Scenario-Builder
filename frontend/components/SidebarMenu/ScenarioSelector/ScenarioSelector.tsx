'use client'

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import { Button, SimpleGrid } from "@mantine/core";

import { ScenarioMetadata } from "@/types/Scenario";

import { createNewScenario } from "@/actions/scenarioAction";
import ScenarioTile from "./ScenarioTile/ScenarioTile";

export default function ScenarioSelector() {

    const { data: session } = useSession();
    const [scenarios, setScenarios] = useState<ScenarioMetadata[]>([]);
    const [scenarioListOutOfDate, setScenarioListOutOfDate] = useState(true);

    var test = 0;

    useEffect(() => {
        if (session?.user) {
            fetch(`/api/scenarios`)
                .then(res => res.json())
                .then(data => setScenarios(data));
        }
    }, [scenarioListOutOfDate]);

    if (!session) return (<></>)
    else return (
        <>
          <SimpleGrid cols={1}>
              {scenarios.map(scenario => {
                  return <ScenarioTile scenario={scenario} key={scenario.id} />
              })}
          </SimpleGrid>

          <Button onClick={async () => {
            await createNewScenario(session.user?.discord_id!);
            setScenarioListOutOfDate(!scenarioListOutOfDate);
            }}>New Scenario</Button>
        </>
    )

}