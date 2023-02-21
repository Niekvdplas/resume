function Hero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative col-span-1 h-full min-h-[200px] w-full overflow-hidden shadow-xl shadow-black/40 sm:rounded-r-3xl">
            
        </div>
        <div className="relative col-span-1 sm:-ml-4 sm:mr-4 sm:py-6 md:-ml-8 md:mr-8 md:py-12">
            <div className="z-20 flex w-full flex-col items-start overflow-visible bg-stone-800 px-4 py-8 shadow-xl shadow-black/30 sm:rounded-2xl sm:p-8 lg:p-12">
            
            </div>
        </div>
    </div>
  )
}

export default Hero