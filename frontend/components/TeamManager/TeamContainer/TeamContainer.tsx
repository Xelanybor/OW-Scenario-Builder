'use client'

import React from 'react';

import { Group } from '@mantine/core';

import classes from './TeamContainer.module.css';

import PlayerManager from './PlayerManager/PlayerManager';
import { Scenario } from '@/types/Scenario';

export default function TeamContainer({teamColour, teamID, scenarioState}: {teamColour: React.CSSProperties['color'], teamID: number, scenarioState: [Scenario, React.Dispatch<React.SetStateAction<Scenario>>]}) {
  return (
    <Group classNames={{root: classes.teamContainer}} justify='center' gap='1vw'>
      { [0,1,2,3,4].map((id) => {
        return <PlayerManager key={id} playerID={id} teamID={teamID} teamColour={teamColour} scenarioState={scenarioState} />
      }) }
    </Group>
  );
}