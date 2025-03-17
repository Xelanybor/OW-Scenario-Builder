'use client'

import React from 'react';

import { Drawer } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

import FloatingContainer from '@/components/FloatingContainer/FloatingContainer'
import Map from '@/components/Map/Map'
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import IconButton from '@/components/Buttons/IconButton/IconButton';

export default function ScenarioEditor() {

    const [opened, {open, close}] = useDisclosure(false);

    return (
        <div>
          <FloatingContainer side="left" position={0}>
            <IconButton buttonType="burger" onClick={open} />
          </FloatingContainer>

          <FloatingContainer side="left" position={1}>
            <IconButton buttonType="export" />
          </FloatingContainer>

          <FloatingContainer side="left" position={2}>
            <IconButton  buttonType="pencil" />
          </FloatingContainer>

          <FloatingContainer side="right" position={0}>
            <IconButton buttonType="map" />
          </FloatingContainer>

          <FloatingContainer side="right" position={1}>
            <IconButton buttonType="layers" />
          </FloatingContainer>
        
          <FloatingContainer side="right" position={2}>
            <IconButton buttonType="point" />
          </FloatingContainer>

          <Drawer opened={opened} onClose={close} padding="md" title="OW Scenario Builder">
            <SidebarMenu />
          </Drawer>

          <Map />
        </div>
    )
}