import {motion} from "framer-motion"

function Roadmap25(){
    return(
        <motion.div initial={{opacity:0.2}}
        whileInView={{opacity:1}} transition={{duration: .5}}>
<h2 className="text-slate-700 text-[5vw] animate-pulse font-bold text-center py-[10vw] font-Montserrat">Will be updated soon...</h2>
        </motion.div>
    );
}

export default Roadmap25;