import { Home, Search, Gamepad2, Beer, ArrowDownCircle } from 'lucide-react';

export default function Footer() {
   return (
     <span className="flex flex-row justify-evenly w-full text-zinc-500">
       <Buttons textIcon="Home">
         <Home />
       </Buttons>
       <Buttons textIcon="Games">
         <Gamepad2 />
       </Buttons>
       <Buttons textIcon="Explorer">
         <Search />
       </Buttons>
       <Buttons textIcon="Scenes">
         <Beer />
       </Buttons>
       <Buttons textIcon="Downloads">
         <ArrowDownCircle />
       </Buttons>
     </span>
   )
}

type ButtonsProps = {
  textIcon: string;
  children?: React.ReactNode;
}

function Buttons({textIcon, children}:ButtonsProps) {
  return (
    <button className="flex flex-col justify-center items-center hover:text-zinc-100">
      {children}
      <p className="pt-[2px] text-xs">{textIcon}</p>
   </button>
  )
}

