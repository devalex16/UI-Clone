import api from './movies.json';
import Image from 'next/image';

export default function Timeline() {
  const dados = JSON.parse(JSON.stringify(api))
  const info = Object.keys(dados)
  
   return (
     <section className="flex flex-col my-10 p-5">
       {info.map((list) => {
         const movies = dados[list]
         return (
           <div key={list}>
             <h2 className="text-lg font-bold">{list}</h2>
             <div className="flex gap-4 mb-[30px] snap-mandatory snap-x overflow-y-auto w-[90vw]">
               {movies.map((data) => {
                 return (
                  <a key={data.title} href={data.trailer} target="_blank">
                   <div className="h-[20vh] w-[27vw] snap-center relative" key={data.title}>
                     <Image src={data.banner} fill alt="trailer" sizes="100%" className="object-cover h-[20%] w-[100px] rounded"/>
                   </div>
                 </a>
                 )
               })}
            </div>
           </div>
         )
       })}
     </section>
   )
}
