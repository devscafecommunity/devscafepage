"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Carousel, Tooltip, Typography } from '@material-tailwind/react';

let data = [
  {
    id: 1,
    title: "CafeWithCode",
    description:"DevCourse is a free and open-source course that aims to help beginners learn programming concepts and develop their coding skills. Whether you are stepping into the programming world for the first time or seeking to build a solid foundation in C, DevCourse is your guide on this learning journey. With a comprehensive curriculum, practical examples, and engaging projects, this course equips you with the core concepts of programming using C.",
    image:"https://raw.githubusercontent.com/devscafecomunity/CafeWithCode_Course/main/assets/logo.png",
    link:"https://github.com/devscafecomunity/CafeWithCode_Course"
  },
  {
    id: 2,
    title: "Dryad Programing Language",
    description:"Dryad is a linear programing language. It is designed to be a simple language that is easy to learn and use. It is designed to be an plug and play language.",
    image:"https://raw.githubusercontent.com/Dryad-lang/Dryad/main/assets/logo.png",
    link:"https://dryad.vercel.app"
  },
];


function DefaultCarousel() {
  return (
    <Carousel
        loop={'true'}
        animation={'true'}
    >
        {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
                <Link href={item.link}>
                    <Tooltip placement="top"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                        content={
                            <div className="flex flex-col items-center justify-center
                                max-w-2xl
                            ">
                                <Typography className="text-center">
                                    {item.title}
                                </Typography>
                                <br />
                                <Typography className="text-center">
                                    {item.description}
                                </Typography>
                            </div>
                        }
                    >
                        <Image
                        src={item.image}
                        alt="logo"
                        width={300}
                        height={300}
                        className="rounded-2xl"
                        />
                    </Tooltip>
                </Link>
            </div>
        ))}
    </Carousel>
  )
}


export default function Projects() {
  return (
    <div className="space-y-20 p-6">
        <div>
        <h1 className="text-4xl font-bold text-center">
            Our Projects
        </h1>
        </div>
        <div>
        <DefaultCarousel />
        </div>
    </div>
  );
}
