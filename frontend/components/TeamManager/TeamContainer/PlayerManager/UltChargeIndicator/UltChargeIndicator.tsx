import React from "react"
import { Center, RingProgress, Text } from "@mantine/core"
import Image from "next/image";

import { IconCheck } from '@tabler/icons-react';

import classes from "./UltChargeIndicator.module.css"

export default function UltChargeIndicator({ charge, teamColour }: { charge: number, teamColour: React.CSSProperties['color'] }) {
    return (
        <div className={classes.ultCharge}>
            <RingProgress
            size={60}
            thickness={8}
            rootColor='rgb(65, 65, 65)'
              label={
                charge != 100 ? <Text size="s" ta="center" fw={700} fs="italic" c="white">
                  {charge}
                </Text> :
                  <Center>
                    <IconCheck size={20} stroke={4} color="white" />
                  </Center>
              }
              sections={[
                { value: charge, color: charge == 100 ? teamColour! : 'orange' },
              ]}
            />
        </div>
    );
}