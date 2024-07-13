export default function Header() {
  return (
    <header className="fixed z-10 shadow-md w-full bg-green-light flex justify-center  text-white gap-4">
      <div className="bg-red flex gap-2 p-1 justify-center items-center">
        <span className="font-bold text-2xl">
          LIVE
        </span>
        <i className="ico-broadcast font-bold text-xl"></i>
      </div>
      <div className="">
        <span className="text-lg h-full flex justify-center items-center">Lorem ipsum dolor sit amet</span>
      </div>
      <div className="bg-green-base">
        <button className="text-sm font-bold px-2 flex gap-2 justify-center items-center h-full">
          JOIN NOW!
          <i className="ico-play-circle font-bold text-xl"></i>
        </button>
      </div>
    </header>
  )
}

