"use client";

import React from "react";
import { Typography, Button, IconButton, } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardBodyProps,
} from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

import getContentboard from "../../lib/contentboard/getcontentboard";


// ContentBoard Component
export default function ContentBoard() {
    const [contentboard, setContentboard] = useState([]);

    useEffect(() => {
        getContentboard().then((data) => {
            setContentboard(data);
        });
    }, []);

    

    return (
        <div className="flex flex-row xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row content-center items-center justify-center">
            {contentboard.map((content: any, index: number) => (
                <Card key={index} className="m-4">
                    <CardBody className="
                        flex flex-col items-center justify-center
                    ">
                        <Image
                            src={content.image}
                            alt={content.title}
                            width={450}
                            height={450}
                            className="rounded-lg w-full h-full"
                        />
                        <div className="h-10"></div>
                        <Typography color="gray">
                            {content.title}
                        </Typography>
                    </CardBody>
                    <CardFooter>
                        <div>
                            <Link href={content.link}>
                                <Button className="
                                    w-full
                                ">Acessar</Button>
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}