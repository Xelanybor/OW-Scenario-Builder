'use client'

import React from 'react';

import { Group } from '@mantine/core';

import TeamManagerButton from '../Buttons/TeamManagerButton/TeamManagerButton';
import TeamContainer from './TeamContainer/TeamContainer';

import classes from './TeamManager.module.css';

export default function TeamManager({toggleDrawer, drawerOpen} : {toggleDrawer: () => void, drawerOpen: boolean}) {
  return (
    <div>
      <TeamManagerButton toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} style={{position: 'absolute', top: '-2.5em', left: '50%', transform: 'translateX(-50%)'}} />
      <Group justify='center' gap={'sm'} grow={true}>
        <TeamContainer color='blue' />
        <TeamContainer color='red' />
      </Group>
        
    </div>
  );
}