"use client";

import Image from "next/image";
import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Map() {
  return (
    <div className="map-container">
      <TransformWrapper>
        <TransformComponent>
          <img src="/maps/Oasis2.png" alt="map" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

function FloatingButton({ buttonType, side = "left", position = 0 }: { buttonType: string, side?: string, position?: number }) {

  let style: React.CSSProperties = {};
  
  // set which side of the screen the button appears on
  if (side === "right") {
    style["right"] = "1rem";
  } else {
    style["left"] = "1rem";
  }
  
    // set the vertical position of the button
    style["top"] = `${1 + 5 * position}rem`;

  return (
    <div className="floating-button"  style={style}>
      <Image src={`/icons/${buttonType}.svg`} alt="button" width="100" height="100" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <FloatingButton buttonType="burger" side="left" position={0} />
      <FloatingButton buttonType="export" side="left" position={1} />
      <FloatingButton buttonType="pencil" side="left" position={2} />

      <FloatingButton buttonType="map" side="right" position={0} />
      <FloatingButton buttonType="layers" side="right" position={1} />
      <FloatingButton buttonType="point" side="right" position={2} />
      <Map />
    </>
  );
}
