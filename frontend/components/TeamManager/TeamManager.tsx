'use client'

import React from 'react';

import TeamManagerButton from '../Buttons/TeamManagerButton/TeamManagerButton';

import classes from './TeamManager.module.css';

export default function TeamManager({toggleDrawer, drawerOpen} : {toggleDrawer: () => void, drawerOpen: boolean}) {
  return (
    <div>
      {/* <button className={classes.openTeamManagerButton} onClick={toggleDrawer}>Team Manager</button> */}
      <TeamManagerButton toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
    </div>
  );
}