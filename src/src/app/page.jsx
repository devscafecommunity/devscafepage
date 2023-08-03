import Header from "../../components/Header"
import About from "../../components/About"
import Projects from "../../components/Projects"

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden space-y-20"> 
      <Header />
      <About />
      <Projects />
    </div>
  )
}
