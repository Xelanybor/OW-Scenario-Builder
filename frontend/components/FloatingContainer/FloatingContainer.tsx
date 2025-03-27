'use client'

import React from "react";

import classes from './FloatingContainer.module.css'

interface FloatingContainerProps {
  side?: string;
  position?: number;
  children?: React.ReactNode;
}

/**
 * A floating container that can be positioned on the left or right side of the screen. Intended to be used with an IconButton component to create floating buttons.
 * 
 * @param {string} side - the side of the screen the container should appear on
 * @param {number} position - the vertical position of the container, where 0 is the top
 * @param {React.ReactNode} children - the content to be displayed in the container
 * @returns a floating container that can be positioned on the left or right side of the screen
 */
export default function FloatingContainer({ side = "left", position = 0, children }: FloatingContainerProps) {

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
      <div className={classes.floatingContainer} style={style}>
        {children}
      </div>
    );
  }