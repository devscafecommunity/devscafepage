import React from "react";
import { Typography, Button, IconButton, Card, Carousel } from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";


import { useEffect, useState } from "react";

import ourprojects from "../../lib/misc/ourprojects";




// Projects Component
export default function Projects() {
    /*
    [
        {
            image: "url",
            redirect: "url",
        }
    ]
    */ 
    let projects: any[] = ourprojects();

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-10">
                <Typography color="gray" className="text-4xl">
                    Nosso projetos
                </Typography>
            </div>
            <div className="h-10"></div>
            <Carousel className="w-full">
                {projects.map((project: any, index: number) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-bot">
                            <Image 
                                src={project.image}
                                alt={project.title}
                                width={250}
                                height={250}
                                className="rounded-2xl w-xl h-xl"
                            />
                            <span className="
                                font-bold text-sm
                                absolute bottom-2
                            ">
                                {project.title}
                            </span>
                        </div>
                        <div className="h-10"></div>
                    </div>
                ))}                        
            </Carousel>
        </div>
    )
}