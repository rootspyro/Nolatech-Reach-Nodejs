import iconGrab from "../assets/icongrab.png";
export default function Footer() {
  return(
    <footer className="bg-gray-light w-full px-20 py-10 flex justify-between">
      <div className="flex justify-start items-center w-full">
        <span className="text-gray-dark font-bold text-sm">
          Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna
        </span>
      </div>
      <div className="items-center justify-center flex w-full">
        <img src={iconGrab} width="150" alt="logo" />
      </div>
      <div className="w-full flex justify-end items-center flex-col text-gray-dark font-bold text-sm">
        <span>All rights reserved to</span>
        <span>Lorem Ipsum© 2022</span>
      </div>
    </footer>
  )
}
