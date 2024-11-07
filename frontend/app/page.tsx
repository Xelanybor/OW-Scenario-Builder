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

function FloatingButton() {
  return (
    <div className="floating-button">
      <Image src="/icons/burger.svg" alt="button" width="100" height="100" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <FloatingButton />
      <Map />
    </>
  );
}
