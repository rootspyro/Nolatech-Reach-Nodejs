import {useEffect, useState} from "react"
import iconGrab from "../assets/icongrab.png"

type SessionData = {
  token: string;
  meta: {
    id: number;
    email: string;
    user: string;
  }
}

export default function Navbar() {

  const [user, SetUser] = useState<SessionData>();
  const [session, SetSession] = useState<boolean>(false);

  const closeSession = () => {
    localStorage.removeItem("session");
    SetSession(false);
  }

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      SetSession(true); 
      SetUser(JSON.parse(session)) 
    }
  }, [session]);

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
        <li className={session ? "hidden" : "p-2"}>
          <a href="/login">LOGIN</a>
        </li>
        <li className={session ? "hidden" : "bg-white text-gray-dark rounded p-2"}>
          <a href="/signup">REGISTRO</a>
        </li>
        <li className={!session ? "hidden" : "p-2"}>
          <span>USUARIO: {user?.meta.user.toUpperCase()}</span>
        </li>
        <li className={!session ? "hidden" : "bg-white text-gray-dark rounded p-2"}>
          <button onClick={closeSession}>CERRAR SESIÓN</button>
        </li>
      </ul>
    </div>
  )
}
