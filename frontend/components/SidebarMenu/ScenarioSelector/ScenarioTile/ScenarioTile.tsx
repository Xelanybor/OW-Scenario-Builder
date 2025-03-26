import React from "react";

import { ScenarioMetadata } from "@/types/Scenario";

import classes from './ScenarioTile.module.css'

export default function ScenarioTile({ scenario }: { scenario: ScenarioMetadata }) {

    // Ensure that the dates are Date objects
    scenario.createdAt = new Date(scenario.createdAt!);
    scenario.lastEdited = new Date(scenario.lastEdited!);
    
    return (
        <div className={classes.scenarioTile}>
            <div className={classes.scenarioTileHeader}>
                <div className={classes.scenarioTileHeaderTitle}>
                    {scenario.name}
                </div>
                <div className={classes.scenarioTileHeaderMap}>
                    {scenario.scenarioData?.map}
                </div>
            </div>
            Last Modified: {scenario.lastEdited!.toLocaleString()}<br />


        </div>
    )
}