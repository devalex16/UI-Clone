export default function Menu() {
  return (
    <span className="flex items-center h-[80vw] mt-5 ml-3 gap-4">
      <div className="border rounded-full border-zinc-100 px-4 py-1">
       <p className="text-base">TV Shows</p>
      </div>
      <div className="border rounded-full border-zinc-100 px-4 py-1">
       <p className="text-base">Movies</p>
      </div>
      <div className="border rounded-full border-zinc-100 px-4 py-1">
       <p className="text-base">Categories</p>
      </div>
    </span>
  )
}