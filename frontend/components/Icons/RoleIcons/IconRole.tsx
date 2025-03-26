import React from "react";

import { HeroRole } from "@/types/Heroes";

import IconTankRole from "./IconTankRole/IconTankRole";
import IconDamageRole from "./IconDamageRole/IconDamageRole";
import IconSupportRole from "./IconSupportRole/IconSupportRole";

import classes from './IconRole.module.css';

export default function IconRole({role}: {role: HeroRole}) {
    return (
        <div className={classes.roleIcon}>
            { role === 'Tank' && <IconTankRole /> }
            { role === 'Damage' && <IconDamageRole /> }
            { role === 'Support' && <IconSupportRole /> }
        </div>
    );
}