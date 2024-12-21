'use client'

import React from "react";

import classes from './FloatingButton.module.css'

import IconButton from "../IconButton/IconButton";

export default function FloatingButton({ buttonType, side = "left", position = 0, onClick }: { buttonType: string, side?: string, position?: number, onClick?: () => void }) {

    let style: React.CSSProperties = {};
    
    // set which side of the screen the button appears on
    if (side === "right") {
      style["right"] = "1rem";
    } else {
      style["left"] = "1rem";
    }
    
      // set the vertical position of the button
      style["top"] = `${1 + 5 * position}rem`;
  
    return (
      <div className={classes.floatingButton} style={style}>
        <IconButton buttonType={buttonType} onClick={onClick} />
      </div>
    );
  }