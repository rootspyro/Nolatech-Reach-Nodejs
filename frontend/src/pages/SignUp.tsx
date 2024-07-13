import { useForm, SubmitHandler } from "react-hook-form";
import Navbar from "../components/navbar";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return(
    <div className="w-full p-10 flex flex-col justify-center items-center bg-green-800">
      <Navbar />
      <div className="p-10 mt-10 bg-white rounded shadow-lg flex items-center flex-col w-full max-w-sm">
        <h3 className="text-green-light font-bold text-4xl">REGISTRO</h3>
        <span className="text-gray-dark">Creación de nuevo usuario</span>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5 flex flex-col gap-2">
          <input 
          className="p-3 rounded bg-neutral-200 text-gray-dark w-full outline-none font-bold" 
          placeholder="usuario" 
          {...register("username",
            {
              required: true,
              minLength: 3,
            })
          }
          />
          <span className="text-red text-xs">{errors.username ? "longitud minima de 3" : ""}</span>
          <input 
          className="p-3 rounded bg-neutral-200 text-gray-dark w-full outline-none font-bold" 
          placeholder="email" 
          type="email"
          {...register("email", 
            {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })
          }
          />
          <span className="text-red text-xs">{errors.email ? "email invalido" : ""}</span>
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
          className="p-3 rounded bg-neutral-200 text-gray-dark w-full outline-none font-bold" 
          placeholder="confirmar contraseña" 
          type="password"
          {...register("confirmPassword", 
            {
              required: true,
              validate: (val: string) => {
                if (watch('password') != val) {
                  return "contraseña no coincide"
                }
              }
            })
          }
          />
          <span className="text-red text-xs">{ errors.confirmPassword ? "contraseña no coincide" : ""}</span>

          <input 
          className="mt-5 w-full hover:cursor-pointer hover:bg-green-base duration-200 transition-all p-3 bg-green-light text-white font-bold rounded text-center"
          type="submit"
          value="CREAR USUARIO"
          />
        </form>
      </div>
      <span className="mt-5 text-white">Ya posees un usuario? <a href="/login" className="text-sky-400 underline hover:text-indigo-400">Inicia sesión</a>.</span>
    </div>
  )
}
