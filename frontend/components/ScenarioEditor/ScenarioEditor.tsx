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

import { Scenario } from '@/types/Scenario';
import { Hero } from '@/types/Heroes';
import MapSelector from '../MapSelector/MapSelector';

export default function ScenarioEditor() {

  const [menuOpened, {open: openMenu, close: closeMenu}] = useDisclosure(false); // side menu state
  const [teamManagerOpened, {open: openTeamManager, close: closeTeamManager, toggle: toggleTeamManager}] = useDisclosure(false); // team manager state
  const [mapSelectorOpened, {open: openMapSelector, close: closeMapSelector}] = useDisclosure(false); // map selector state

  // let scenarioManager = new ScenarioManager();

  const newPlayer = (hero: Hero) => {
    return { hero: hero, ultCharge: 0, position: {x: 0,
      y: 0, z: 0} };
  }

  const scenarioState = React.useState<Scenario>({
    map: 'Oasis',
    point: 0,
    teams: [
      { players: [
        newPlayer('Cassidy'),
        newPlayer('Mei'),
        newPlayer('Reinhardt'),
        newPlayer('Lúcio'),
        newPlayer('Baptiste')
      ]},
      { players: [
        newPlayer('Sojourn'),
        newPlayer('Genji'),
        newPlayer('Mauga'),
        newPlayer('Brigitte'),
        newPlayer('Juno')
      ]}
    ]
  });

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
          <IconButton buttonType="map" onClick={openMapSelector} />
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
          <TeamManager toggleDrawer={toggleTeamManager} drawerOpen={teamManagerOpened} scenarioState={scenarioState} />
        </Drawer>

        <MapSelector opened={mapSelectorOpened} close={closeMapSelector} />
    
        <Map />
      </div>
  )
}