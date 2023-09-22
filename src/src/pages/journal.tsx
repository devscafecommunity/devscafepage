import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Md
import HelloWorld from './journal/22_09_2023.mdx'

export default function Journal() {
    return (
        <div className='flex flex-col flex-wrap items-center justify-center'>
            <HelloWorld />
        </div>
    )
}

