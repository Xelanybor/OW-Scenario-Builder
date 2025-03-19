import React from "react";

import { Modal } from "@mantine/core";

import { Scenario } from "@/types/Scenario";
import { State } from "@/types/Util";

import MapList from "./MapList/MapList";

export default function MapSelector({ opened, close, scenarioState } : { opened: boolean, close: () => void, scenarioState: State<Scenario> }) {
    return (
        <Modal
        title="Select a map"
        opened={opened}
        onClose={close}
        size="xl"
        padding="lg"
        >
        <div>Map selector</div>

        <MapList scenarioState={scenarioState} />

        </Modal>
    );
}