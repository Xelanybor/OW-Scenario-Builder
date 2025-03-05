'use client'

import React from 'react';

import { Group } from '@mantine/core';

import classes from './TeamContainer.module.css';

import PlayerManager from './PlayerManager/PlayerManager';

export default function TeamContainer({color}: {color: React.CSSProperties['color']}) {
  return (
    <Group classNames={{root: classes.teamContainer}} justify='center' gap='1vw'>
      <PlayerManager />
      <PlayerManager />
      <PlayerManager />
      <PlayerManager />
      <PlayerManager />
    </Group>
  );
}