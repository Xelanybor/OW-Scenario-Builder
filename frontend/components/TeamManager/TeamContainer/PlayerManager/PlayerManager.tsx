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
import { Scenario } from '@/types/Scenario'

export default function PlayerManager({ teamID, playerID, teamColour, scenarioState } : { teamID: number, playerID: number, teamColour: React.CSSProperties['color'], scenarioState: [Scenario, React.Dispatch<React.SetStateAction<Scenario>>] }) {

  const [configureHeroOpened, {open: configureHeroOpen, close: configureHeroClose}] = useDisclosure(false);

  // Follow OWCS role order: Damage, Damage, Tank, Support, Support
  let role: HeroRole;
  let defaultHero: Hero;
  if (playerID === 0 || playerID === 1) {
    role = "Damage";
    defaultHero = DamageHero.options[playerID];
  }
  else if (playerID === 2) {
    role = "Tank";
    defaultHero = TankHero.options[playerID];
  }
  else {
    role = "Support";
    defaultHero = SupportHero.options[playerID];
  }

  defaultHero = (['Cassidy', 'Mei', 'Reinhardt', 'Lúcio', 'Baptiste'] as Hero[])[playerID];

  const [changesMade, setChangesMade] = React.useState<boolean>(false);
  const [scenario, setScenario] = scenarioState;

  const getHero = () => {
    if (scenario.teams[teamID].players[playerID] === null) {
      return null;
    }
    return scenario.teams[teamID].players[playerID].hero;
  }

  const setHero = (hero: Hero) => {
    let newScenario = {...scenario};
    if (newScenario.teams[teamID].players[playerID] !== null) {
      newScenario.teams[teamID].players[playerID].hero = hero;;
      setScenario(newScenario);
    }
  }

  const getCharge = () => {
    if (scenario.teams[teamID].players[playerID] === null) {
      return 0;
    }
    return scenario.teams[teamID].players[playerID].ultCharge;
  }

  const setCharge = (charge: number) => {
    let newScenario = {...scenario};
    if (newScenario.teams[teamID].players[playerID] !== null) {
      newScenario.teams[teamID].players[playerID].ultCharge = charge;
      setScenario(newScenario);
    }
  }

  console.log(scenario);

  return (
    <>
      <div className={classes.playerContainer} onClick={() => {
        setChangesMade(false); // When the modal is opened no changes will have been made yet
        configureHeroOpen()
        }}>
        <Image className={classes.heroImage} src={`/heroes/${getHeroImageName(getHero()!)}.png`} alt={getHero()!} width={256} height={256} />
        <div className={classes.footer}>
          <IconRole role={role} />
          <UltChargeIndicator charge={getCharge()!} teamColour={teamColour} />
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
        <HeroSelector hero={getHero()!} setHero={setHero} charge={getCharge()!} setCharge={setCharge} setChangesMade={setChangesMade} role={role} closeModal={configureHeroClose} />
      </Modal>
    </>
  )
}