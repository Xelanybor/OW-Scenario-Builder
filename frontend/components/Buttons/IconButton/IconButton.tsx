'use client'

import React from "react";

import classes from './IconButton.module.css'

export default function IconButton({ buttonType, onClick, className }: { buttonType: string, side?: string, position?: number, onClick?: () => void, className?: string }) {
  
    return (
      <div className={`${classes.iconButton} ${className || ''}`} onClick={onClick}>
        <img src={`/icons/${buttonType}.svg`} alt="button" />
      </div>
    );
  }