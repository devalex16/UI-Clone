import Image from 'next/image';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <span className="flex flex-row justify-around w-[100%] items-center relative">
      <div className="flex flex-row bg-zinc-100 w-[80%] px-5 py-2 rounded">
        <Search />
        <p className="text-zinc-500 text-base px-3">Search</p>
      </div>
      <figure className="h-[80%] w-[8%] rounded relative">
        <Image src="/icon.jpeg" fill priority sizes="100%" alt="ICON" className="h-full w-full rounded"/>
      </figure>
    </span>
  )
}