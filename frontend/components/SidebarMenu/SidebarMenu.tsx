'use client'

import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";
import SignOutButton from "@/components/Buttons/SignOutButton/SignOutButton";

import classes from './SidebarMenu.module.css'
import ScenarioSelector from "./ScenarioSelector/ScenarioSelector";

export default function SidebarMenu() {

    const { data: session } = useSession();

    if (session?.user) {
        return (
            <div className={classes.sidebarMenu}>
                <p>Signed in as <b>{session.user.name}</b></p>
                {/* {session.user.image ? <img src={session.user.image as string} alt="User Image" width={50} height={50} /> : null} */}
                <SignOutButton />

                <ScenarioSelector />
            </div>
        );
    }
    else {
        return (
            <div className={classes.sidebarMenu}>
                <SignInButton />
            </div>
        );
    }
}