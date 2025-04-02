const MainImg = () => {
  return (
    <div className="relative w-full h-[80vh] bg-black">
        <img src="/images/rideau-noir.webp" alt="rideaux noirs" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 flex flex-col items-center justify-center pb-[20px]">
            <img 
                src="/images/logo-BO.png" 
                alt="Logo" 
                className="max-w-xs md:max-w-sm lg:max-w-md"
            />
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mt-5">ROCK SYMPHONIQUE</h2>
        </div>
    </div>
  )
}

export default MainImg;
