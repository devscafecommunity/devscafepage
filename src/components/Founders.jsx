import Link from "next/link";
import Image from "next/image";

let data = [
  {
    id: 1,
    name: "LyeZinho",
    image: "/founders/LyeZinho.png",
    about: "Back-end Developer, Founder of Dryad Progaming Language, DevCourse and DevsCafe.",
    link: "https://github.com/LyeZinho",
  },
  {
    id: 2,
    name: "Thiago Santos",
    image: "/founders/ThiagoSantosOFC.jpg",
    about: "Full-stack Developer, Founder of DevsCafe, Excelsi and FitCommerce.",
    link: "https://github.com/ThiagoSantosOFC",
  },
  {
    id: 3,
    name: "Nikolle",
    image: "/founders/LuanderFarias.jpg",
    about: "Full Stack developer, Founder of DevsCafe, nikoidot, ArchFox and SimploVr.",
    link: "https://github.com/LuanderFarias",
  },
  {
    id: 4,
    name: "octavio-oi",
    image: "/founders/octavio-oi.jpg",
    about: "Full Stack developer, Founder of DevsCafe.",
    link: "https://github.com/octavio-oi",
  },
  {
    id: 5,
    name: "Yulo-sudo22",
    image: "/founders/Yulo-sudo22.jpg",
    about: "Full Stack developer, Founder of DevsCafe.",
    link: "https://github.com/yulo-sudo22",
  },
];

export default function Founders() {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-medium">Founders</h1>
      </div>
      <br />
      <div className="flex flex-row flex-wrap   items-center justify-center space-x-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-6 justify-center max-w-2xl bg-white/80 backdrop-blur-md shadow-md rounded-2xl"
          >
            <Link href={`${item.link}`}>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={item.image}
                  alt="logo"
                  width={200}
                  height={200}
                  className="rounded-2xl p-2 m-6"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <h1 className="text-2xl font-medium text-[#331b15]">
                  {item.name}
                </h1>
                
                <p
                  className="text-sm py-2 font-bold text-center
                            max-w-sm
                        "
                >
                  {item.about}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
