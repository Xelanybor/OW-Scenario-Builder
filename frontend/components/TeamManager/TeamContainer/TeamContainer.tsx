'use client'

import React from 'react';

import { Group } from '@mantine/core';

import classes from './TeamContainer.module.css';

import PlayerManager from './PlayerManager/PlayerManager';

export default function TeamContainer({teamColour}: {teamColour: React.CSSProperties['color']}) {
  return (
    <Group classNames={{root: classes.teamContainer}} justify='center' gap='1vw'>
      { [0,1,2,3,4].map((index) => {
        return <PlayerManager key={index} id={index} teamColour={teamColour} />
      }) }
    </Group>
  );
}