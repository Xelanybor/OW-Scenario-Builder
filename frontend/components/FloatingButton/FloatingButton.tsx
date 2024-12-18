import React from "react";

import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { ActionIcon } from "@mantine/core";

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
  
      const [opened, { toggle }] = useDisclosure();
  
    return (
      <div className={classes.floatingButton}  style={style}>
        <Image src={`/icons/${buttonType}.svg`} alt="button" width="100" height="100" />
        {/* <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" /> */}
      </div>

        // <ActionIcon style={style}/>
    );
  }