'use client'

import React from "react";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";

import classes from './SidebarMenu.module.css'

export default function SidebarMenu() {

    return (
        <div className={classes.sidebarMenu}>
            <SignInButton />
        </div>
    );
}