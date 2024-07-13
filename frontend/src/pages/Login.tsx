import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Notification from "../components/notification";

type Inputs = {
  user: string;
  password: string;
}

type ServerResponse = {
  success: boolean;
  data: any;
  error: string;
}

export default function Login(){

  const navigate = useNavigate();
  const [visible, SetVisible] = useState<boolean>(false);
  const [message, SetMessage] = useState<string>("");

  const notify = (message: string) => {
    SetMessage(message);
    SetVisible(true);

    setTimeout(() => {
      SetVisible(false);
    }, 2500);
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  useEffect(() => {
    if (localStorage.getItem("session")) {
      navigate("/");
    }
  }, [visible]);

  const onSubmit: SubmitHandler<Inputs> = async(data: Inputs) => {
    const endpoint: string = import.meta.env.VITE_API_HOST + "/auth/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      const newSession: ServerResponse = await response.json();

      if (!newSession.success) {

        switch(response.status) {
          case 401:
            notify("usuario o contraseña invalida");
            break;
          case 404:
            notify("usuario o contraseña invalida");
            break;
          default:
            notify("Ocurrió un error");
            return;
        }

      } else {
        notify("Inicio de sesión exitoso");
        localStorage.setItem("session", JSON.stringify(newSession.data));
        navigate("/"); 
      }
    } catch {
      notify("Hay un error de conexión");
      return
    }
  }

  return (
    <>
    <div className="w-full p-10 flex flex-col justify-center items-center bg-emerald-800">
      <Navbar />
      <div className="p-10 mt-10 bg-white rounded shadow-lg flex items-center flex-col w-full max-w-sm">
        <h3 className="text-green-light font-bold text-4xl">INICIO DE SESIÓN</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5 flex flex-col gap-2">
          <input 
          className="p-3 rounded bg-neutral-200 text-gray-dark w-full outline-none font-bold" 
          placeholder="usuario" 
          {...register("user",
            {
              required: true,
              minLength: 3,
            })
          }
          />
          <span className="text-red text-xs">{errors.user ? "longitud minima de 3" : ""}</span>

          <input 
          className="p-3 rounded bg-neutral-200 text-gray-dark w-full outline-none font-bold" 
          placeholder="contraseña" 
          type="password"
          {...register("password", 
            {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
            })
          }
          />
            <span className="text-red text-xs">{errors.password ? `
            longitud minima 8,
            mayusculas,
            minusculas,
            numeros y simbolos

              ` : ""}</span>

          <input 
          className="mt-5 w-full hover:cursor-pointer hover:bg-green-base duration-200 transition-all p-3 bg-green-light text-white font-bold rounded text-center"
          type="submit"

          value="INICIAR SESIÓN"
          />
        </form>
      </div>
      <span className="mt-5 text-white">No posees un usuario? <a href="/signup" className="text-sky-400 underline hover:text-indigo-400">Registrarse</a>.</span>
    </div>
    <Notification visible={visible} message={message} />
    </> 
  )
}
