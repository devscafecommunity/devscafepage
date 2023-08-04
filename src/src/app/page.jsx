import Header from "../../components/Header"
import About from "../../components/About"
import Projects from "../../components/Projects"
import Founders from "../../components/Founders"

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden space-y-20 pb-10"> 
      <Header />
      <About />
      <Projects />
      <Founders />
    </div>
  )
}
