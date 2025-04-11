const MainImg = () => {
  return (
    <div className="relative w-full h-[100vh] bg-stone-900 -mt-18">
      <div className="relative w-full h-full">
        <img 
          src="/images/rideau-noir.webp" 
          alt="rideaux noirs" 
          className="w-full h-full object-cover"
        />
        {/* Vignettage circulaire avec Tailwind */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/100 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pb-[20px]">
        <img 
          src="/images/logo-BO.png" 
          alt="Logo BEST OFF'" 
          className="max-w-xs md:max-w-sm lg:max-w-md"
        />
        <h2 className="text-white text-center text-xl md:text-3xl lg:text-4xl mt-5 pb-4 md:pb-5 lg:pb-7 border-b-1 border-red-300">Quand le rock rencontre la symphonie</h2>
      </div>
    </div>
  )
}

export default MainImg;