export default function() {
  return(
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4 bg-white">
      <h1 className="text-green-light text-6xl font-bold">404: NO ENCONTRADO</h1>
      <span className="text-lg font-bold text-gray-dark">El recurso que buscas no fue encontrado</span>
      <a href="/" className="mt-5 px-10 py-4 bg-green-light hover:bg-green-base text-white font-bold rounded transition-all duration-200">
        VOLVER AL INICIO
      </a>
    </div> 
  )
}
