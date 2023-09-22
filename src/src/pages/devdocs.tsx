import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import Search from '../../components/Devdocs/Search'

export default function DevDocs() {
    return (
        <div className='flex flex-col flex-wrap items-center justify-center'>
            <Search />
        </div>
    )
}