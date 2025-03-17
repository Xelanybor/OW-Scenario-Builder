'use client'

import React from 'react';

import { Group } from '@mantine/core';

import classes from './TeamContainer.module.css';

import PlayerManager from './PlayerManager/PlayerManager';

export default function TeamContainer({color}: {color: React.CSSProperties['color']}) {
  return (
    <Group classNames={{root: classes.teamContainer}} justify='center' gap='1vw'>
      { [0,1,2,3,4].map((index) => {

        // Follow OWCS role order: Damage, Damage, Tank, Support, Support
        let role: "damage" | "tank" | "support";
        if (index === 0 || index === 1) role = "damage";
        else if (index === 2) role = "tank";
        else role = "support";


        return <PlayerManager key={index} role={role} />
      }) }
    </Group>
  );
}