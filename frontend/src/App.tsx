import './App.css'
import iconGrab from "./assets/icongrab.png";

function App() {
  return (
    <>
      <div id="home-header" className="w-full bg-center bg-cover py-10 px-20">
        <div className="w-full flex-row flex justify-between mt-5 items-center">
          <img src={iconGrab} alt="logo" width="160"/>
          <ul className="w-full flex flex-row gap-8 justify-end text-white font-bold text-sm">
            <li>
              <a href="#">LOREM IPSUM</a>
            </li>
            <li>
              <a href="#">LOREM IPSUM</a>
            </li>
            <li>
              <a href="#">LOREM IPSUM</a>
            </li>
            <li>
              <a href="#">LOREM IPSUM</a>
            </li>
            <li>
              <a href="#">LOREM IPSUM</a>
            </li>
            <li>
              <a href="#">LOREM IPSUM</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex mt-10 pb-10">
          <div className="w-2/3"></div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-6xl text-white font-bold">LOREM IPSUM</span>
            <span className="text-6xl text-gray-dark bg-white font-bold">LOREM IPSUM DOLOR</span>
            <span className="text-6xl text-white font-bold">LOREM IPSUM</span>
            <div>
              <button className="mt-10 bg-green-light text-white font-bold py-3 px-6 hover:bg-green-base transition-all duration-100 rounded-md">WHAT IS NEXT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
