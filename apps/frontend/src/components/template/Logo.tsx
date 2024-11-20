import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const fonte = Righteous({
    subsets: ["latin"],
    weight: '400',
})

export default function Logo() {
    return (
        <Link href="/" className={`
        flex items-center gap-2  ${fonte.className}`}>
          <Image 
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />

           <h1 className='flex flex-col items-center text-lg leading-5'>
             <div>
                CONVIT<span className='font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-600 '>3</span>
             </div>
             <div>DIGITAL</div>
           </h1>

        </Link>
    )
}