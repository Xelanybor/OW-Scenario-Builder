'use client'

import React from 'react'

import Image from 'next/image'

import classes from './PlayerManager.module.css'
import IconTankRole from '@/components/Icons/RoleIcons/IconTankRole/IconTankRole'
import IconDamageRole from '@/components/Icons/RoleIcons/IconDamageRole/IconDamageRole'
import IconSupportRole from '@/components/Icons/RoleIcons/IconSupportRole/IconSupportRole'

export default function PlayerManager(props : { role: "tank" | "damage" | "support" }) {
  return (
    <div className={classes.playerContainer} onClick={() => console.log('Player clicked')}>
      <Image className={classes.heroImage} src='/heroes/Ana.png' alt='Ana' width={256} height={256} />
      <div className={classes.roleIcon}>
        { props.role === 'tank' && <IconTankRole /> }
        { props.role === 'damage' && <IconDamageRole /> }
        { props.role === 'support' && <IconSupportRole /> }
      </div>
    </div>
  )
}