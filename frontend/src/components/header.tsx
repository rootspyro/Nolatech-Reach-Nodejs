export default function Header() {
  return (
    <header className="w-full bg-green-light  flex justify-center text-white gap-4">
      <div className="bg-red">
        <span className="font-bold text-xl p-3">LIVE</span>
      </div>
      <div>
        <span className="text-lg">Lorem ipsum dolor sit amet</span>
      </div>
      <div className="">
        <button className="text-sm h-full font-bold px-2 bg-green-base">JOIN NOW!</button>
      </div>
    </header>
  )
}

