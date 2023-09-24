import React from "react";
import { Typography, Button, IconButton, Card } from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";

import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";




export default function Founders() {
    let data = [
        {
          id: 1,
          name: "LyeZinho",
          image: "/founders/LyeZinho.png",
          about:
            "Back-end Developer, Founder of Dryad Progaming Language, DevCourse and DevsCafe.",
          link: "https://github.com/LyeZinho",
        },
        {
          id: 2,
          name: "Thiago Santos",
          image: "/founders/ThiagoSantosOFC.jpg",
          about:
            "Full-stack Developer, Founder of DevsCafe, Excelsi and FitCommerce.",
          link: "https://github.com/ThiagoSantosOFC",
        },
        {
          id: 3,
          name: "Nikolle",
          image: "/founders/LuanderFarias.jpg",
          about:
            "Full Stack developer, Founder of DevsCafe, nikoidot, ArchFox and SimploVr.",
          link: "https://github.com/LuanderFarias",
        },
        {
          id: 4,
          name: "octavio-oi",
          image: "/founders/octavio-oi.jpg",
          about:
            "Full Stack developer, electronics technician and electronics designer, Founder of DevsCafe.",
          link: "https://github.com/octavio-oi",
        },
        {
          id: 5,
          name: "Yulo-sudo22",
          image: "/founders/yulo-sudo22.jpg",
          about: "Full Stack developer, Founder of DevsCafe.",
          link: "https://github.com/yulo-sudo22",
        },
        {
            id: 6,
            name: "Tardis2001",
            image: "/founders/Tardis2001.png",
            about: "Full Stack developer, Founder of DevsCafe.",
            link: "https://github.com/Tardis2001",
        }
      ];
    return (
        <div className="flex flex-col flex-wrap items-center justify-center ">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                    <Typography color="gray" className="text-center">
                        Conheça nossos fundadores
                    </Typography>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                {data.map((founder, index) => (
                    <div key={index} className="p-2 rounded-lg">
                        <Link href={founder.link}>
                            <Image
                                src={founder.image}
                                alt="Picture of the author"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
  