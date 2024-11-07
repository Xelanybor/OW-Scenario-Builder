"use client";

import Image from "next/image";
import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Map() {
  return (
    <TransformWrapper>
      <TransformComponent>
        <img src="/maps/Oasis2.png" alt="test" />
      </TransformComponent>
    </TransformWrapper>
  );
}

export default function Home() {
  return (
    <>
      <Map />
    </>
  );
}
