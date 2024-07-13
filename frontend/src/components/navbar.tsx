import iconGrab from "../assets/icongrab.png"
export default function Navbar() {
  return(
    <div className="w-full flex-row flex justify-between mt-5 items-center">
      <a href="/">
        <img src={iconGrab} alt="logo" width="160"/>
      </a>
      <ul className="w-full flex flex-row gap-8 justify-end text-white font-bold text-sm">
        <li className="p-2">
          <a href="#">LOREM IPSUM</a>
        </li>
        <li className="p-2">
          <a href="#">LOREM IPSUM</a>
        </li>
        <li className="p-2">
          <a href="#">LOREM IPSUM</a>
        </li>
        <li className="p-2">
          <a href="#">LOGIN</a>
        </li>
        <li className="bg-white text-gray-dark rounded p-2">
          <a href="/signup">REGISTRO</a>
        </li>
      </ul>
    </div>
  )
}
