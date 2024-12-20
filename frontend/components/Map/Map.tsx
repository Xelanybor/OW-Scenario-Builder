'use client'

import React from "react";

import classes from './Map.module.css'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Map() {

  let style: React.CSSProperties = {};

    return (
      <div className={classes.mapContainer} style={style}>
        <TransformWrapper initialScale={1}>
          <TransformComponent>
            <img src="/maps/Oasis2.png" alt="map" />
          </TransformComponent>
        </TransformWrapper>
      </div>
    );
  }