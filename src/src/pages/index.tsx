import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import Header from '../../components/Index/Header'
import HeaderAbout from '../../components/Index/HeaderAbout'
import ContentBoard from '../../components/Index/ContentBoard'
import Projects from '../../components/Index/Projects'
import Founders from '../../components/Index/Founders'

export default function Home() {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center'>
      <Header />
      <HeaderAbout />
      <div className='h-20'></div>
      {/* <ContentBoard /> */}
      <div className='h-20'></div>
      <Projects />
      <div className='h-20'></div>
      <Founders />
    </div>
  )
}
