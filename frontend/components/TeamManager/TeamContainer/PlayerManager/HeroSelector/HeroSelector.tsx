'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { Combobox, Group, Input, InputBase, Text, useCombobox, Button, Slider } from '@mantine/core'
import Image from 'next/image'

import { getHeroImageName } from '@/utils/filenames'

import { Hero, SupportHero, DamageHero, TankHero, HeroRole } from '@/types/Heroes'

import classes from './HeroSelector.module.css'

function HeroOption({ hero }: { hero: Hero }) {
    return (

        <Group className={classes.heroOption}>
          <Image src={`/heroes/${getHeroImageName(hero)}.png`} alt={hero} width={50} height={50} />
          <div>
            <Text fz="sm" fw={500}>
              {hero}
            </Text>
          </div>
        </Group>
    )
}

export default function HeroSelector({ hero, setHero, charge, setCharge, setChangesMade, role, closeModal }:
  { hero: Hero,
    setHero: (hero: Hero) => void,
    charge: number,
    setCharge: (charge: number) => void,
    setChangesMade: Dispatch<SetStateAction<boolean>>,
    role: HeroRole,
    closeModal: () => void
  }) {

    const detectChange = (setterFunction: (value: any) => void) => {
        return (value: any) => {
          setterFunction(value);
          if (typeof value === "string") {
            setChangesMade(value != hero || newCharge != charge);
          }
          else if (typeof value === "number") {
            setChangesMade(newHero != hero || value != charge);
          }
        }
    };
    
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    
    const [newHero, setNewHero] = React.useState<Hero>(hero);
    const selectedOption = Hero.options.find((item) => item === newHero);

    const [newCharge, setNewCharge] = React.useState<number>(charge);

    let heroOptions: Hero[] = [];
    switch (role) {
        case "Damage":
            heroOptions = DamageHero.options;
            break;
        case "Tank":
            heroOptions = TankHero.options;
            break;
        case "Support":
            heroOptions = SupportHero.options;
            break;
        default:
            break;
    }

    let options = heroOptions.map((hero) => (
        <Combobox.Option value={hero} key={hero}>
          <HeroOption hero={hero} />
        </Combobox.Option>
    ));
    
    return (
        <div className={classes.heroSelector}>
        Hero:
        <Combobox
          store={combobox}
          withinPortal={true}
          onOptionSubmit={(hero) => {
            detectChange(setNewHero)(hero as Hero); // The combobox should only contain valid Hero options
            combobox.closeDropdown();
          }}
        >
            <Combobox.Target>
              <InputBase
                className={classes.heroSelectDropdown}
                component="button"
                type="button"
                pointer
                rightSection={<Combobox.Chevron />}
                onClick={() => combobox.toggleDropdown()}
                rightSectionPointerEvents="none"
                multiline
              >
                {selectedOption ? (
                  <HeroOption hero={newHero} />
                ) : (
                  <Input.Placeholder>Pick value</Input.Placeholder>
                )}
              </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
              <Combobox.Options className={classes.dropdownOptions}>{options}</Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>

          Ultimate Charge:
          <Slider className={classes.ultChargeSlider} defaultValue={0} min={0} max={100} step={1} marks={[
            { value: 0, label: '0%' },
            { value: 25, label: '25%' },
            { value: 50, label: '50%' },
            { value: 75, label: '75%' },
            { value: 100, label: '100%' },
          ]} value={newCharge} onChange={detectChange(setNewCharge)} />
          <Button onClick={() => {
            setHero(newHero);
            setCharge(newCharge);
            closeModal();
          }}>Save</Button>
        </div>
    )
}