import React from 'react'
import {motion} from "framer-motion"
function Mobstats() {
    const data = {
        supply: 3000,
        minted: 300,
        volume: 2,
      };
  return (
    <div className='bg-gradient-to-b from-black to-slate-800 text-center py-20 pb-28'>
    <div className="flex items-center justify-center mt-28">
    <div className="relative mb-28">
      <div className="absolute inset-3 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl blur-xl animate-tilt "></div>
      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl animate-glow z-10"></div>
      <section className="relative px-7 py-4 mx-6 my-1 bg-slate-800 rounded-2xl lg:h-[250px] lg:w-[800px] flex flex-row justify-center items-center z-20">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[200px] leading-none mt-30 font-bold absolute -z-10 text-blue-500/20">
            {" "}
            <span className="text-[185px] max-[570px]:text-[150px] blur-sm leading-[0] font-bold animate-glow">
              STATS
            </span>{" "}
          </div>
          <motion.div initial={{opacity:0}}
    whileInView={{opacity:1}} transition={{duration: 1}} className="flex flex-row gap-12  max-[570px]:gap-9  justify-center items-center">
            <div className="flex flex-col items-center ">
              <span className="text-md mb-3 font-bold text-slate-200">
                TOTAL SUPPLY
              </span>
              <h2 className="text-[#7ae2ff] font-Montserrat text-3xl font-extrabold leading-none  pt-3">
                {data.supply}
              </h2>
            </div>
            <div className="w-[2px] h-36 bg-blue-400"></div>
            <div className="flex flex-col items-center ">
              <span className="text-md mb-3 font-bold text-slate-200">
                MINTED
              </span>
              <h2 className="text-[#7ae2ff] font-Montserrat text-3xl font-extrabold leading-none  pt-3">
                {data.minted}
              </h2>
            </div>
            <div className="w-[2px] h-36 bg-blue-400"></div>
            <div className="flex flex-col items-center ">
              <span className="text-md mb-3 font-bold text-slate-200">
                VOLUME TRADED
              </span>
              <h2 className="text-[#7ae2ff] font-Montserrat text-3xl font-extrabold leading-none pt-3">
                {data.volume} ETH
              </h2>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
    
  </div>
    </div>
  )
}

export default Mobstats
