'use client'

import React from 'react'

import { Modal, RingProgress, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import Image from 'next/image'

import classes from './PlayerManager.module.css'
import HeroSelector from './HeroSelector/HeroSelector'

import { getHeroImageName } from '@/utils/filenames'

import { Hero, SupportHero, DamageHero, TankHero, HeroRole } from '@/types/Heroes'
import UltChargeIndicator from './UltChargeIndicator/UltChargeIndicator'
import IconRole from '@/components/Icons/RoleIcons/IconRole'

export default function PlayerManager({ id, teamColour } : { id: number, teamColour: React.CSSProperties['color'] }) {

  const [configureHeroOpened, {open: configureHeroOpen, close: configureHeroClose}] = useDisclosure(false);

  // Follow OWCS role order: Damage, Damage, Tank, Support, Support
  let role: HeroRole;
  let defaultHero: Hero;
  if (id === 0 || id === 1) {
    role = "Damage";
    defaultHero = DamageHero.options[id];
  }
  else if (id === 2) {
    role = "Tank";
    defaultHero = TankHero.options[id];
  }
  else {
    role = "Support";
    defaultHero = SupportHero.options[id];
  }

  defaultHero = (['Cassidy', 'Mei', 'Reinhardt', 'Lúcio', 'Baptiste'] as Hero[])[id];

  const [hero, setHero] = React.useState<Hero>(defaultHero);
  const [charge, setCharge] = React.useState<number>(0);
  const [changesMade, setChangesMade] = React.useState<boolean>(false);

  return (
    <>
      <div className={classes.playerContainer} onClick={() => {
        setChangesMade(false); // When the modal is opened no changes will have been made yet
        configureHeroOpen()
        }}>
        <Image className={classes.heroImage} src={`/heroes/${getHeroImageName(hero)}.png`} alt={hero} width={256} height={256} />
        <div className={classes.footer}>
          <IconRole role={role} />
          <UltChargeIndicator charge={charge} teamColour={teamColour} />
        </div>
    
      </div>
      <Modal
        opened={configureHeroOpened}
        onClose={() => {
          if (changesMade) {
            // If changes have been made, ask the user if they want to save them
            if (confirm('You have made changes to this player. Closing this window will discard these changes. Are you sure?')) {
              // Save the changes
              setChangesMade(false);
              configureHeroClose();
            }
          }
          else {
            configureHeroClose();
          }
        }}
        title={`Configure ${role} Hero`}
      >
        <HeroSelector hero={hero} setHero={setHero} charge={charge} setCharge={setCharge} setChangesMade={setChangesMade} role={role} closeModal={configureHeroClose} />
      </Modal>
    </>
  )
}