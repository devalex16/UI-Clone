import { Play, Plus } from 'lucide-react';
import { Russo_One } from 'next/font/google';
import Image from 'next/image';

const russo = Russo_One({
  subsets: ['latin'],
  weight: '400',
})

export default function Banner() {
   return (
     <div className="bg-zinc-900 w-[85vw] h-[60vh] rounded-xl relative shadow-[0px_0px_40px_0px_rgba(0,0,0,1.0)]">
       <Image src="/banner.jpeg" object-fitt="cover" fill priority className="w-full h-full object-cover rounded-lg" alt="BANNER"/>
       <div className="rounded-xl bg-gradient-to-t from-[#96836B] to-transparent h-full w-full absolute top-0 z-0"></div>
       <Buttons/>
       <Title />
     </div>
   )
}

function Buttons() {
  return (
    <span className="flex flex-row justify-center gap-4 w-full absolute bottom-3">
     <button className="flex flex-row bg-zinc-100 text-zinc-900 text-base font-semibold rounded gap-2 py-2 px-10">
       <Play/>
       <p>Play</p>
     </button>
     <button className="flex flex-row bg-zinc-900/20 text-zinc-100 text-base font-semibold rounded gap-2 py-2 px-8">
       <Plus/>
       <p>My List</p>
     </button>
    </span>
  )
}

function Title() {
  return (
    <label className="flex flex-col justify-center items-center w-full absolute top-[70%]">
      <h1 className={`${russo.className} tracking-[15px] text-xl pl-4`}>SHOTTER</h1>
      <p className="mt-1 text-center text-sm">Drama • Assination • Bestseller • TV</p>
    </label>
  )
}