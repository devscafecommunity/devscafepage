import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center align-middle py-4 p-16 pl-5 leading-50 tracking-[-8]">
      <h1 className="text-6xl font-bold mb-6">
        Bem-vindo à nossa comunidade de desenvolvedores apaixonados
      </h1>
      <p className="mb-4 text-lg font-semibold text-center align-middle">
        Nossa comunidade foi criada para promover a troca de conhecimentos,
        colaboração e inspiração.
        <br />
        Aqui, você encontrará projetos incríveis, códigos abertos e discussões
        animadas sobre programação.
      </p>
      <h2 className="mb-4">O que oferecemos?</h2>
      <br />
      <p className="mb-4 text-lg font-semibold text-center align-middle">
        <span>Oportunidades de colaborar com outros desenvolvedores</span>
        <br />

        <span>Acesso a projetos incríveis e códigos abertos</span>
        <br />
        <span>Discussões envolventes sobre programação</span>
        <br />
        <span>E muito mais!</span>
      </p>
      <h3 className="mb-4 font-bold text-center align-middle">
        Junte-se à nossa comunidade hoje mesmo e leve suas habilidades de
        <br />
        programação para o próximo nível!
      </h3>
      <Link legacyBehavior href="https://discord.gg/KM3E3j2qzT">
        <button className="relative inline-block text-lg group pt-5  ml-10">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Entre na comunidade</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </Link>
    </div>
  );
}
