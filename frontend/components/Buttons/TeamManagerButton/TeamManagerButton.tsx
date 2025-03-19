'use client'

import React from "react"

import { Button } from "@mantine/core"
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react"

import classes from './TeamManagerButton.module.css'

export default function TeamManagerButton({ style, toggleDrawer, drawerOpen } : { style?: React.CSSProperties, toggleDrawer: () => void, drawerOpen: boolean }) {
  return (
    <Button className={classes.teamManagerButton} style={style} onClick={toggleDrawer} leftSection={drawerOpen ? <IconChevronDown size={20} /> : <IconChevronUp size={20} />}>
      Hero Selector
    </Button>
  )
}