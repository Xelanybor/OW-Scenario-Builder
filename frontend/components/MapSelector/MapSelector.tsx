import React from "react";

import { Modal } from "@mantine/core";

import MapList from "./MapList/MapList";

export default function MapSelector({ opened, close } : { opened: boolean, close: () => void }) {
    return (
        <Modal
        title="Select a map"
        opened={opened}
        onClose={close}
        size="xl"
        padding="lg"
        >
        <div>Map selector</div>

        <MapList />

        </Modal>
    );
}