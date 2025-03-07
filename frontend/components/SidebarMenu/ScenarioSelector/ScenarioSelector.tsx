'use client'

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import { SimpleGrid } from "@mantine/core";

import { ScenarioMetadata } from "@/types/Scenario";

export default function ScenarioSelector() {

    const { data: session } = useSession();
    const [scenarios, setScenarios] = useState<ScenarioMetadata[]>([]);

    useEffect(() => {
        if (session?.user) {
            fetch(`/api/scenarios`)
                .then(res => res.json())
                .then(data => setScenarios(data));
        }
    }, [session?.user]);

    return <SimpleGrid cols={2}>
        {scenarios.map(scenario => {
            return <div key={scenario.id}>{scenario.name}</div>
        })}
    </SimpleGrid>

}