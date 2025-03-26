'use client'

import React from "react";

import classes from './CollapseButton.module.css'

import IconButton from "../IconButton/IconButton";
import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function CollapseButton({ buttonType, children }: { buttonType: string, children: React.ReactNode }) {

  const [opened, { toggle }] = useDisclosure(false);
  
    return (
      <div className={classes.collapseButton}>
        <div className={classes.collapseRoot}>
          <IconButton buttonType={buttonType} onClick={toggle} />
          <Collapse in={opened}>
            <div className={classes.collapseContent}>
              {children}
            </div>
          </Collapse>
        </div>
      </div>
    );
  }