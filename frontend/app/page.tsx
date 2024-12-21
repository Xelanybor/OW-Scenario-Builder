'use client'

import React from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';

import FloatingButton from '../components/Buttons/FloatingButton/FloatingButton'
import Map from '../components/Map/Map'
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';

export default function HomePage() {

  const [opened, {open, close}] = useDisclosure(false);

  return (
    <>
      <FloatingButton buttonType="burger" side="left" position={0} onClick={open} />
      <FloatingButton buttonType="export" side="left" position={1} />
      <FloatingButton buttonType="pencil" side="left" position={2} />

      <FloatingButton buttonType="map" side="right" position={0} />
      <FloatingButton buttonType="layers" side="right" position={1} />
      <FloatingButton buttonType="point" side="right" position={2} />

      <Drawer opened={opened} onClose={close} padding="md" title="OW Scenario Builder">
        <SidebarMenu />
      </Drawer>

      <Map />
    </>
  );
}
