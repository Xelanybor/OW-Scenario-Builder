'use client'

import React from 'react';

import { Group } from '@mantine/core';

import PlayerManager from './PlayerManager/PlayerManager';

export default function TeamContainer({color}: {color: React.CSSProperties['color']}) {
  return (
    <Group justify='center'>
      <PlayerManager />
      <PlayerManager />
      <PlayerManager />
      <PlayerManager />
      <PlayerManager />
    </Group>
  );
}