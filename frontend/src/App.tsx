import './App.css'
import iconGrab from "./assets/icongrab.png";
import pic1 from "./assets/Pic1.png";
import pic2 from "./assets/Pic2.png";
import pic3 from "./assets/Pic3.png";
import pic4 from "./assets/Pic4.png";
import pic5 from "./assets/Pic5.png";
import pic7 from "./assets/Pic7.png";
import pic8 from "./assets/Pic8.png";
import pic9 from "./assets/Pic9.png";
import pic10 from "./assets/Pic10.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SideMenu from './components/sideMenu';

const onSubmit = (e: any) => {
  e.preventDefault();
  console.log("hello world");
}

function App() {
  return (
    <>
      <SideMenu />
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
      <div className="w-full p-20 flex flex-row gap-16 bg-white">
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
        <button className="border border-gray-dark text-gray-dark rounded-md py-3 px-10 font-bold hover:bg-gray-dark hover:text-white transition-all duration-200">
          LEARN MORE
        </button>
      </div>
      <div className="bg-green-light text-white font-bold flex items-center gap-8">
        <div className="w-full p-20">
          <h3 className="text-6xl">Lorem ipsum dolor sit amet, consetetur</h3>
          <div className="w-4/5 flex flex-col gap-3 mt-10">
            <button className="bg-white text-gray-dark text-lg rounded-md py-5 duration-200 transition-all hover:bg-green-dark hover:text-white">
              LOREM IPSUM DOLOR SIT
            </button>
            <button className="border border-white text-lg rounded-md py-5 duration-200 transition-all hover:bg-white hover:text-gray-dark">
              LOREM IPSUM DOLOR SIT
            </button>
          </div> 
        </div>
        <div className="w-full flex items-end p-0">
          <img src={pic5} alt="pic5"/>
        </div>
      </div>
      <div className="w-full p-20 text-gray-dark">
        <h3 className="text-6xl font-bold text-center">Latest videos</h3>
        <div className="grid grid-rows-2 grid-cols-3 mt-10 gap-16">
          <div className="w-full flex gap-4 flex-col">
            <div className="w-full video h-40 flex justify-center items-center">
              <i className="ico-play-circle text-white text-5xl"></i>
            </div> 
            <span className="text-center">Lorem ipsum dolor sit amet, consetetur</span>
          </div>

          <div className="w-full flex gap-4 flex-col">
            <div className="w-full video h-40 flex justify-center items-center">
              <i className="ico-play-circle text-white text-5xl"></i>
            </div> 
            <span className="text-center">Lorem ipsum dolor sit amet, consetetur</span>
          </div>

          <div className="w-full flex gap-4 flex-col">
            <div className="w-full video h-40 flex justify-center items-center">
              <i className="ico-play-circle text-white text-5xl"></i>
            </div> 
            <span className="text-center">Lorem ipsum dolor sit amet, consetetur</span>
          </div>

          <div className="w-full flex gap-4 flex-col">
            <div className="w-full video h-40 flex justify-center items-center">
              <i className="ico-play-circle text-white text-5xl"></i>
            </div> 
            <span className="text-center">Lorem ipsum dolor sit amet, consetetur</span>
          </div>

          <div className="w-full flex gap-4 flex-col">
            <div className="w-full video h-40 flex justify-center items-center">
              <i className="ico-play-circle text-white text-5xl"></i>
            </div> 
            <span className="text-center">Lorem ipsum dolor sit amet, consetetur</span>
          </div>

          <div className="w-full flex gap-4 flex-col">
            <div className="w-full video h-40 flex justify-center items-center">
              <i className="ico-play-circle text-white text-5xl"></i>
            </div> 
            <span className="text-center">Lorem ipsum dolor sit amet, consetetur</span>
          </div>
        </div>
        <div className="w-full flex justify-center mt-20">
          <button className="bg-green-light text-white font-bold text-xl px-14 py-3 rounded-md hover:bg-green-base hover:text-white duration-200 transition-all">
          VIEW ALL
          </button>
        </div>
      </div>

      <div className="w-full flex flex-row gap-4 bg-[url(/join.png)] bg-center bg-cover p-20">
        <div className="w-full"></div> 
        <div className="w-full flex flex-col gap-8">
          <h3 className="text-white font-bold text-6xl">JOIN US.</h3> 
          <span className="text-white text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</span>
          <form onSubmit={e => onSubmit(e)} className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <input className="border-none p-3 w-full rounded-md outline-none bg-neutral-200 font-bold text-gray-dark" type="text" placeholder="Name"></input>
              <input className="border-none p-3 w-full rounded-md outline-none bg-neutral-200 font-bold text-gray-dark" type="text" placeholder="Surname"></input>
            </div>
            <div className="flex flex-row gap-4">
              <input className="border-none p-3 w-full rounded-md outline-none bg-neutral-200 font-bold text-gray-dark" type="text" placeholder="Phone"></input>
              <input className="border-none p-3 w-full rounded-md outline-none bg-neutral-200 font-bold text-gray-dark" type="email" placeholder="Email"></input>
            </div>
            <input className="border-none p-3 w-full rounded-md outline-none bg-neutral-200 font-bold text-gray-dark" type="text" placeholder="Department"></input>
            <textarea className="border-none h-40 p-3 w-full resize-none rounded-md outline-none bg-neutral-200 font-bold text-gray-dark" placeholder="Message"></textarea>
            <input className="border-none p-5 w-full w-2/4 hover:bg-green-base duration-100 transition-all hover:cursor-pointer rounded-md outline-none bg-green-light font-bold text-white" type="submit" value="I'M IN"></input>
            <span className="text-white text-base text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</span>
          </form>
        </div> 
      </div>

      <div className="px-20 py-40 bg-[url(/Pic6.png)] bg-center bg-cover flex">
        <div className=" w-2/5 flex gap-8 flex-col">
          <h3 className="text-gray-dark font-bold text-6xl">Lorem ipsum dolor sit</h3>
          <p className="text-gray-dark text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <button className="bg-green-light hover:bg-green-base duration-200 transition-all text-white font-bold text-xl px-14 py-3 rounded-md w-2/4 mt-5">
          VIEW ALL
          </button>
        </div>
      </div>

      <div className="bg-emerald-800 w-full p-20">
        <h3 className="text-white text-center font-bold text-6xl">Lorem ipsum dolor sit amet</h3>
        <div className="w-full mt-20 flex justify-center items-center">
          <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src={pic7} alt='picture' width={"300"}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic8} alt='picture' width={"300"}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic9} alt='picture' width={"300"}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic10} alt='picture' width={"300"}/>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center mt-20">
          <button className="text-gray-dark bg-white rounded-md px-20 py-4 font-bold hover:bg-green-light hover:text-white transition-all duration-200">
          VIEW ALL
          </button>
        </div>
      </div>
    </>
  )
}

export default App
