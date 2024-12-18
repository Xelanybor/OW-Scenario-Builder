"use client";

import Image from "next/image";
import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { Burger, Button, Drawer, MantineProvider, Pill } from "@mantine/core"

import TeamManager from "../components/teamManager";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import { useDisclosure } from "@mantine/hooks";

function Map() {
  return (
    <div className="map-container">
      <TransformWrapper>
        <TransformComponent>
          <img src="/maps/Oasis2.png" alt="map" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  console.log(opened)

  return (
    <MantineProvider>
      <FloatingButton buttonType="burger" side="left" position={0} />
      <FloatingButton buttonType="export" side="left" position={1} />
      <FloatingButton buttonType="pencil" side="left" position={2} />

      <FloatingButton buttonType="map" side="right" position={0} />
      <FloatingButton buttonType="layers" side="right" position={1} />
      <FloatingButton buttonType="point" side="right" position={2} />

      {/* <TeamManager /> */}

      {/* <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Menu">
        drawer content
      </Drawer>
      <Button onClick={open}>Open Drawer</Button> */}

      <Map />
    </MantineProvider>
  );
}
