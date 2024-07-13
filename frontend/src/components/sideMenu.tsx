export default function SideMenu() {
  return(
    <div className="bg-gray right-0 fixed top-1/3">
      <ul className="text-white flex flex-col text-lg">
        <li className="bg-gray-base flex items-center hover:bg-neutral-500 justify-center transition-all duration-100">
          <a className="flex justify-center p-2" href="#"><i className="ico-facebook"></i></a>
        </li>
        <li className="bg-gray-base flex items-center hover:bg-neutral-500 justify-center border-t border-neutral-500 transition-all duration-100">
          <a className="flex justify-center p-2" href="#"><i className="ico-twitter"></i></a>
        </li>
        <li className="bg-gray-base flex items-center hover:bg-neutral-500 justify-center border-t border-neutral-500 transition-all duration-100">
          <a className="flex justify-center p-2" href="#"><i className="ico-instagram"></i></a>
        </li>
        <li className="bg-gray-base flex items-center hover:bg-neutral-500 justify-center border-t border-neutral-500 transition-all duration-100">
          <a className="flex justify-center p-2" href="#"><i className="ico-youtube"></i></a>
        </li>
        <li className="bg-gray-base flex items-center hover:bg-neutral-500 justify-center border-t border-neutral-500 transition-all duration-100">
          <a className="flex justify-center p-2" href="#"><i className="ico-tiktok"></i></a>
        </li>
      </ul>
    </div> 
  )
}
