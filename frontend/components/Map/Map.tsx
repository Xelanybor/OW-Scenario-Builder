'use client'

import React from "react";

import classes from './Map.module.css'

import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import Draggable from "react-draggable";

import { State } from "@/types/Util";
import { Scenario } from "@/types/Scenario";
import { GamemodeAvailableMaps } from "@/types/Maps";

import { getMapImageName } from "@/utils/filenames";

export default function Map({ scenarioState } : { scenarioState: State<Scenario> }) {

  const [scenario, _] = scenarioState;

  let style: React.CSSProperties = {};

  const point = GamemodeAvailableMaps['Control'].includes(scenario.map) ? `${scenario.point}` : '';

  const mapFileName = `/maps/${getMapImageName(scenario.map)}${point}.png`;


  // For react-draggable component
  const nodeRef = React.useRef(null);

  const initialScale = 1;
  const [mapScale, setMapScale] = React.useState(initialScale);
  
  // Change the Draggable component scale to match the zoom level of the map, so that the player icon follows the mouse when dragged
  const onZoomStop = (ref: ReactZoomPanPinchRef) => {
    console.log(ref.state.scale);
    setMapScale(ref.state.scale);
  };

  return (
    <div className={classes.mapContainer} style={style}>
      <TransformWrapper onZoomStop={onZoomStop} initialScale={initialScale} panning={{excluded: [classes.playerIcon]}}>
        <TransformComponent>
          <Draggable nodeRef={nodeRef} scale={mapScale}>
            <div ref={nodeRef} className={classes.playerIcon}>bruh</div>
          </Draggable>
          <img src={mapFileName} alt="map" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}