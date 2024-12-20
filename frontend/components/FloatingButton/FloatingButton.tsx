import React from "react";

import Image from "next/image";

import classes from './FloatingButton.module.css'

export default function FloatingButton({ buttonType, side = "left", position = 0 }: { buttonType: string, side?: string, position?: number, onClick?: () => void }) {

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
      <div className={classes.floatingButton}  style={style}>
        <img className={classes.floatingButtonImage} src={`/icons/${buttonType}.svg`} alt="button" />
      </div>

        // <ActionIcon style={style}/>
    );
  }