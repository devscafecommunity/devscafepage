import React from "react";
import { Typography, Button, IconButton, Card } from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";



export default function HeaderAbout(){
    return (
        <div className="flex flex-col items-center justify-center">
            <p>
                <span className="text-2xl font-bold">&quot;</span>Dev&apos;s Café é uma comunidade de desenvolvedores para desenvolvedores, onde você pode compartilhar seu conhecimento e aprender com outros desenvolvedores.<br />
                Nós da equipe Dev&apos;s Café acreditamos que a melhor forma de aprender é ensinando, por isso acreditamos na importancia de espaços para compartilhar conhecimento.<span className="text-2xl font-bold">&quot;</span><br /><br />
                <span className="text-m font-bold">- Equipe Dev&apos;s Café</span>
            </p>
        </div>
    )
}