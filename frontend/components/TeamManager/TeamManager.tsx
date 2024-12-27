'use client'

import React from 'react';

import TeamManagerButton from '../Buttons/TeamManagerButton/TeamManagerButton';

import classes from './TeamManager.module.css';

export default function TeamManager({toggleDrawer, drawerOpen} : {toggleDrawer: () => void, drawerOpen: boolean}) {
  return (
    <div>
      <TeamManagerButton toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} style={{position: 'absolute', top: '-2.5em', left: '50%', transform: 'translateX(-50%)'}} />
    </div>
  );
}