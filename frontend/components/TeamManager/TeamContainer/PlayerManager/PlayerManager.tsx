'use client'

import React from 'react'

import Image from 'next/image'

import classes from './PlayerManager.module.css'
import IconTankRole from '@/components/Icons/RoleIcons/IconTankRole/IconTankRole'

export default function PlayerManager() {
  return (
    <div className={classes.playerContainer}>
      <Image className={classes.heroImage} src='/heroes/Ana.png' alt='Ana' width={256} height={256} />
      <div className={classes.roleIcon}>
        <IconTankRole color='black' />
      </div>
    </div>
  )
}