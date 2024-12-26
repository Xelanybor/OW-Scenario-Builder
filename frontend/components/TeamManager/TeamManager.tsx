'use client'

import React from 'react';

import classes from './TeamManager.module.css';

export default function TeamManager({toggleDrawer} : {toggleDrawer: () => void}) {
  return (
    <div>
      <button className={classes.openTeamManagerButton} onClick={toggleDrawer}>Team Manager</button>
    </div>
  );
}