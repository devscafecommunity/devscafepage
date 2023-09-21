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
            <Carousel className="w-full">
                {projects.map((project: any, index: number) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-bot">
                            <Image 
                                src={project.image}
                                alt={project.title}
                                width={350}
                                height={350}
                                className="rounded-2xl w-xl h-xl"
                            />
                            <span className="
                                font-bold text-sm
                                absolute pt-4
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