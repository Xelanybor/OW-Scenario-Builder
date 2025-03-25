'use client'

import React from "react";

import classes from './Map.module.css'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { State } from "@/types/Util";
import { Scenario } from "@/types/Scenario";

import { getMapImageName } from "@/utils/filenames";

export default function Map({ scenarioState } : { scenarioState: State<Scenario> }) {

  const [scenario, _] = scenarioState;

  let style: React.CSSProperties = {};

    return (
      <div className={classes.mapContainer} style={style}>
        <TransformWrapper initialScale={1}>
          <TransformComponent>
            <img src={`/maps/${getMapImageName(scenario.map)}${scenario.point}.png`} alt="map" />
          </TransformComponent>
        </TransformWrapper>
      </div>
    );
  }