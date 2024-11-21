import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const fonte = Righteous({
    subsets: ["latin"],
    weight: '400',
})

export default function LogoGrande() {
    return (
        <Link href="/" className={`
        flex flex-col items-center gap-2  ${fonte.className}`}>
          <Image 
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
          />

           <h1 className='text-5xl text-white'>
             
                CONVIT<span className='font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-600 '>3</span>
                DIGITAL
           </h1>

        </Link>
    )
}