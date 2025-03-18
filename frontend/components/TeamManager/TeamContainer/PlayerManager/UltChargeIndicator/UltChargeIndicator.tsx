import React from "react"
import { RingProgress, Text } from "@mantine/core"

import classes from "./UltChargeIndicator.module.css"

export default function UltChargeIndicator({ charge }: { charge: number }) {
    return (
        <div className={classes.ultCharge}>
            <RingProgress
            size={60}
            thickness={8}
            rootColor='rgb(49, 49, 49)'
              label={
                <Text size="s" ta="center" fw={700} fs="italic" c="white">
                  {charge}
                </Text>
              }
              sections={[
                { value: charge, color: 'orange' },
              ]}
            />
        </div>
    );
}