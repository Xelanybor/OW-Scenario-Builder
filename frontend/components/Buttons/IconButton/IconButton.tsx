'use client'

import React from "react";

import classes from './IconButton.module.css'

export default function IconButton({ buttonType, onClick }: { buttonType: string, side?: string, position?: number, onClick?: () => void }) {
  
    return (
      <div className={classes.iconButton} onClick={onClick}>
        <img src={`/icons/${buttonType}.svg`} alt="button" />
      </div>
    );
  }