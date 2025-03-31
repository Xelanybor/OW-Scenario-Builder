import { KeepScale } from "react-zoom-pan-pinch";

import { getHeroImageName } from "@/utils/filenames";

import { Hero } from "@/types/Heroes"

import { IconCheck } from '@tabler/icons-react';

import classes from './HeroMarker.module.css'
import { Center } from "@mantine/core";
import { getTeamColor } from "@/utils/colors";

type HeroMarkerProps = {
    hero: Hero,
    team: number,
    ultCharge: number,
    className: string,
    ref?: React.RefObject<HTMLDivElement>,
}

export default function HeroMarker({hero, team, ultCharge, className, ref}: HeroMarkerProps) {
    
    const colour = getTeamColor(team);
    
    return (
        <div ref={ref || ''} className={`${classes.heroIcon} ${className || ''}`}>
            <KeepScale>
                <img src={`/heroes/${getHeroImageName(hero)}.png`} alt={hero} style={{borderColor: colour}} />
                { ultCharge == 100 &&
                <div className={classes.ultIndicator}>
                    <Center h="1.6em">
                        <IconCheck className={classes.ultIconCheck} size={15} stroke={4} color={colour} />
                    </Center>
                </div>
                }
            </KeepScale>
        </div>
    );
}