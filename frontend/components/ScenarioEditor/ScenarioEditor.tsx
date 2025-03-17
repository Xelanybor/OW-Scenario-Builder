'use client'

import React from 'react';

import { Drawer } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

import TeamManager from '@/components/TeamManager/TeamManager';
import TeamManagerButton from '@/components/Buttons/TeamManagerButton/TeamManagerButton';
import FloatingContainer from '@/components/FloatingContainer/FloatingContainer'
import Map from '@/components/Map/Map'
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import IconButton from '@/components/Buttons/IconButton/IconButton';

export default function ScenarioEditor() {

  const [menuOpened, {open: openMenu, close: closeMenu}] = useDisclosure(false); // side menu state
    const [teamManagerOpened, {open: openTeamManager, close: closeTeamManager, toggle: toggleTeamManager}] = useDisclosure(false); // team manager state

    return (
        <div>
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

          <TeamManagerButton style={{position: 'fixed', zIndex: '1', bottom: 0, left: '50%', transform: 'translateX(-50%)', opacity: teamManagerOpened ? 0 : 1}} toggleDrawer={toggleTeamManager} drawerOpen={teamManagerOpened} />

          <Drawer styles={{content: {overflow: 'visible'}}} position="bottom" opened={teamManagerOpened} transitionProps={{transition: 'slide-up'}} onClose={closeTeamManager} padding="md" size="11vw" withCloseButton={false}>
            <TeamManager toggleDrawer={toggleTeamManager} drawerOpen={teamManagerOpened} />
          </Drawer>

          <Map />
        </div>
    )
}