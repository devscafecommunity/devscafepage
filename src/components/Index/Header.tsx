import React from "react";
import { Typography, Button, IconButton, Card } from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";

import { BsDiscord, BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <div className="flex flex-col flex-wrap items-center justify-center">
        <Image
          src="/assets/images/logo.png"
          alt="Dev's Cafe Logo"
          width={300}
          height={300}
          className="rounded-lg pb-2"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
          Dev's Café
        </h1>
        <h3 className="xs:text-sm sm:text-lg md:text-lg lg:text-2xl font-bold">
          Uma comunidade dev para dev's
        </h3>
      </div>
      <div className="h-10"></div>
        <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
            <Typography color="gray" className="text-center">
                Conheça nossa comunidade
            </Typography>
        </div>
        <div className="flex flex-row items-center justify-center">
            <Button className="p-4 m-4" onClick={() => { window.open("https://discord.gg/skwJuprZAP", "_blank"); }}>
                <BsDiscord className="mr-2" />
            </Button>
            <Button className="p-4 m-4" onClick={() => { window.open("https://github.com/devscafecommunity", "_blank"); }}>
                <BsGithub className="mr-2" />
            </Button>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}