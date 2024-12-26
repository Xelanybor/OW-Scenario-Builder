'use client'

import React from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Button, Drawer } from '@mantine/core';

import FloatingContainer from '../components/FloatingContainer/FloatingContainer'
import Map from '../components/Map/Map'
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import IconButton from '@/components/Buttons/IconButton/IconButton';
import TeamManager from '@/components/TeamManager/TeamManager';

export default function HomePage() {

  const [menuOpened, {open: openMenu, close: closeMenu}] = useDisclosure(false); // side menu state
  const [teamManagerOpened, {open: openTeamManager, close: closeTeamManager, toggle: toggleTeamManager}] = useDisclosure(false); // team manager state

  return (
    <>
      <FloatingContainer side="left" position={0}>
        <IconButton buttonType="burger" onClick={openMenu} />
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

      <Drawer opened={menuOpened} onClose={closeMenu} padding="md" title="OW Scenario Builder">
        <SidebarMenu />
      </Drawer>

      <Button className='teamManagerButton' onClick={openTeamManager}>Team Manager</Button>

      <Drawer styles={{content: {overflow: 'visible'}}} position="bottom" opened={teamManagerOpened} onClose={closeTeamManager} padding="md">
        <TeamManager toggleDrawer={toggleTeamManager} />
      </Drawer>

      <Map />
    </>
  );
}
