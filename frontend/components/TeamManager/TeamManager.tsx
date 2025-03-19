'use client'

import React from 'react';

import { Group } from '@mantine/core';

import TeamManagerButton from '../Buttons/TeamManagerButton/TeamManagerButton';
import TeamContainer from './TeamContainer/TeamContainer';

import classes from './TeamManager.module.css';
import { Scenario } from '@/types/Scenario';

export default function TeamManager({toggleDrawer, drawerOpen, scenarioState} : {toggleDrawer: () => void, drawerOpen: boolean, scenarioState: [Scenario, React.Dispatch<React.SetStateAction<Scenario>>]}) {
  return (
    <div>
      <TeamManagerButton toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} style={{position: 'absolute', top: '-2.5em', left: '50%', transform: 'translateX(-50%)'}} />
      <Group className={classes.teamContainers} justify='center' gap={'sm'} grow={true}>
        <TeamContainer teamColour='blue' teamID={0} scenarioState={scenarioState} />
        <TeamContainer teamColour='red' teamID={1} scenarioState={scenarioState} />
      </Group>
        
    </div>
  );
}