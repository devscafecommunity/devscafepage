
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
        <link rel="icon" href="/assets/images/logo.png" />
        {/* Image big */}
        <meta property="og:image" content="/assets/images/logo.png" />
        {/* Image small */}
        <meta
          name="twitter:image"
          content="/assets/images/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devscafe_" />
        <meta name="twitter:creator" content="@devscafe_" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://devscafe.vercel.app" />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </head>
      <body className=" ">
      <NavBar/>
        {children}
      </body>
    </html>
  );
}
