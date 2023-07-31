
import "./globals.css";
import NavBar from "/components/NavBar";
export const metadata = {
  title: "Devs Café",
  description:
    "Somos uma comunidade de desenvolvedores apaixonados, criada para promover a troca de conhecimentos, colaboração e inspiração. Aqui, você encontrará projetos incríveis, códigos abertos e discussões animadas sobre programação.",
};

export default function RootLayout({ children }) {
  return (
    <html className="w-screen h-screen" lang="pt-BR">
      <head>
        <meta name="description" content={metadata.description} />

        <title>{metadata.title}</title>
        <link rel="icon" href="/assets/images/Logo.png" />
      </head>
      <body className=" ">
      <NavBar/>
        {children}
      </body>
    </html>
  );
}
