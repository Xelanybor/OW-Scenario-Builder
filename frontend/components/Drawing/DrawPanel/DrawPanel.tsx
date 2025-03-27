import IconButton from "@/components/Buttons/IconButton/IconButton"
import { Grid, SimpleGrid } from "@mantine/core"

import classes from './DrawPanel.module.css'

export default function DrawPanel() {
    return (
        <Grid className={classes.drawPanel}>
            <Grid.Col span={5}>
                <IconButton className={`${classes.drawButton} ${classes.top}`} buttonType="pencil" />
                <IconButton className={classes.drawButton} buttonType="pencil" />
            </Grid.Col>
            <Grid.Col span={5}>
                <IconButton className={`${classes.drawButton} ${classes.top}`} buttonType="pencil" />
                <IconButton className={classes.drawButton} buttonType="pencil" />
            </Grid.Col>
        </Grid>
    )
}