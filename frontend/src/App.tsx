import './App.css'
import iconGrab from "./assets/icongrab.png";
import pic1 from "./assets/Pic1.png";
import pic2 from "./assets/Pic2.png";
import pic3 from "./assets/Pic3.png";
import pic4 from "./assets/Pic4.png";

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
      <div className="w-full py-10 px-20 bg-green-dark flex justify-between items-center text-white font-bold">
        <div>
          <span className="text-2xl">Lorem ipsum dolor sit amet, consetetur</span>
        </div> 
        <ul className="w-full flex flex-row justify-end">
          <li className="flex justify-center items-center flex-col border-r px-12 border-green-light">
            <span className="text-white text-6xl">170</span>
            <span className="text-green-light text-2xl font-normal">days</span>
          </li>
          <li className="flex justify-center items-center flex-col border-r px-12 border-green-light">
            <span className="text-white text-6xl">13</span>
            <span className="text-green-light text-2xl font-normal">hours</span>
          </li>
          <li className="flex justify-center items-center flex-col border-r px-12 border-green-light">
            <span className="text-white text-6xl">39</span>
            <span className="text-green-light text-2xl font-normal">minutes</span>
          </li>
          <li className="flex justify-center items-center flex-col px-12">
            <span className="text-white text-6xl">29</span>
            <span className="text-green-light text-2xl font-normal">seconds</span>
          </li>
        </ul>
      </div>
      <div className="w-full p-20 flex flex-row gap-16">
        <div className="w-full">
          <h3 className="text-gray-dark font-bold text-6xl">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-dark mt-10 text-lg">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et
accusam et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et
accusam et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          </p>
        </div> 
        <div className="w-full">
          <img src={pic1} alt="pic1"/>
        </div> 
      </div>
      <div className="w-full bg-gray-light p-20 flex flex-col items-center gap-8">
        <h3 className="text-gray-dark text-6xl font-bold">Lorem ipsum</h3>
        <p className="text-gray-dark text-normal text-center max-w-xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p> 
        <div className="flex flex-row gap-4">
          <div className="hover:shadow-lg hover:cursor-pointer transition-all duration-100">
            <img src={pic2} alt="pic2" />
            <div className="w-full bg-green-light text-center p-4">
              <span className="text-white font-bold text-xl">LOREM IPSUM</span>
            </div>
          </div> 
          <div className="hover:shadow-lg hover:cursor-pointer transition-all duration-100">
            <img src={pic3} alt="pic3" />
            <div className="w-full bg-green-light text-center p-4">
              <span className="text-white font-bold text-xl">LOREM IPSUM</span>
            </div>
          </div> 
          <div className="hover:shadow-lg hover:cursor-pointer transition-all duration-100">
            <img src={pic4} alt="pic4" />
            <div className="w-full bg-green-light text-center p-4">
              <span className="text-white font-bold text-xl">LOREM IPSUM</span>
            </div>
          </div> 
        </div>
        <button className="border border-gray-dark text-gray-dark rounded-md py-3 px-10 font-bold">LEARN MORE</button>
      </div>
    </>
  )
}

export default App
