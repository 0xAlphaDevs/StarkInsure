"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOutsideClick } from "~~/hooks/scaffold-stark";
import { CustomConnectButton } from "~~/components/scaffold-stark/CustomConnectButton";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { useTargetNetwork } from "~~/hooks/scaffold-stark/useTargetNetwork";
import { devnet } from "@starknet-react/chains";

/**
 * Site header
 */
export const HeaderHome = () => {
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === devnet.id;

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <Link
          href="/"
          passHref
          className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0"
        >
          <div className="flex relative w-10 h-10">
            <Image
              alt="SE2 logo"
              className="cursor-pointer"
              fill
              src="/logo.svg"

            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">StarkInsure</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end flex-grow gap-2 mr-4">
        <CustomConnectButton />
        <SwitchTheme
          className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""
            }`}
        />
      </div>
    </div>
  );
};
