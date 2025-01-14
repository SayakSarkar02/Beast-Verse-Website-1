import React, { useRef} from "react";
// import Ice from "../assets/Ice.png"
import {
  motion, Variants,
  useScroll,
  useInView,
  useTransform,
} from "framer-motion";




import Left from "../assets/left.png";
import Right from "../assets/Right.png";


import All from "../assets/All.jpeg";
import { useState } from "react";







// import Image from "react/Image"
function AboutUs() {
  // const scrollRef = useRef(null)



  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  console.log(scrollYProgress);

  //   const isInView = useInView(ref);
  // console.log(isInView);

  const move1 = useTransform(scrollYProgress, [0, 0.5, 1], ["1vw", "-50vw", "-150vw"], {
    clamp: false,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [.7, 1]);

  const move2 = useTransform(scrollYProgress, [0, .5,  1], ["-1vw", "50vw", "150vw"], {
    clamp: false,
  });

  const moveY1 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], ["0vw", "0vw", "0vw", "6vw", "10vw"], {
    clamp: false,
  });

  const moveY2 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], ["0vw", "0vw", "0vw", "9vw", "12vw"], {
    clamp: false,
  });

  // const moveY2 = useTransform(scrollYProgress, [0, 1], ["0", "12vw"], {
  //   clamp: false,
  // });

  const opScene = useTransform(scrollYProgress, [0, 1], [0.3 , 1]);
  //   const scaleX = useSpring(scrollYProgress, {
  //     x:1000});



  var x = window.matchMedia("(max-width: 1500px)")

  let moveY;

  if(x.matches){
    moveY = moveY1
  }

  else{
    moveY = moveY2;
  }



  return (
    <div className=" w-screen bg-black pt-10 h-[120vw]" id="AboutUs">
      {/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
      {/* <motion.div className="origin-top-left fixed z-50 top-0 left-0 right-0 transform-none bg-red-500 h-2" style={{ scaleX: scrollYProgress}}/> */}
      <div className="bg-gradient-to-b from-[#1b1008] to-black ">
      <h2 className="text-[4.5vw] text-center font-Montserrat font-semibold text-white">
        What is <span className=" text-green-500">Beast Verse</span> ?
      </h2>

      <div className="grid grid-flow-col grid-cols-2 mt-12 mx-auto">
        <div className="px-20">
          <p className="font-Montserrat text-[1.1vw] pt-4 text-white">
            
            <b className="text-green-400">Beast Verse </b>is a <b className="text-green-400"> Play-to-earn PvP </b> NFT game,
            built on the <b className="text-purple-500"> Polygon Blockchain. </b> <br /> <br />
            We are creating a virtual world where players can explore different
            terrains, choose their favorite beasts and fight their way to
            victory. Our use of the Polygon Blockchain ensures that the game is
            <b className="text-green-400"> secure and transparent </b>, which is essential for players who value
            their personal information and assets. <br /><br ></br>
            So, jump into your <b className="text-green-400"> favorite terrain </b>, choose your <b className="text-green-400"> favorite beasts </b>,
            and fight your way through to become the <b className="text-green-400"> Mightiest of All Masters! </b>
            <br /> <br />
            
          </p>
        </div>

        <div className="mx-auto">
          <iframe
            className="rounded-2xl shadow-2xl shadow-amber-900/60"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AMt5x44k1FY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        
      </div>
      </div>

        <h2 className="text-center text-white text-5xl mt-16 font-Montserrat font-semibold">See you in <span className=" text-green-500">Beast Verse!</span></h2>

      <div>
        <motion.div
          ref={ref}
          style={{
            translateY: moveY,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="flex pt-[15rem] relative mx-auto"
        >
          <motion.img
            style={{
              translateX: move1,
              transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1)",
              scale: scale,
            }}
            viewport={{ once: true }}
            className="z-10 relative"
            src={Left}
          ></motion.img>

          <motion.img
            style={{
              translateX: move2,
              transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1)",
              scale: scale,
            }}
            viewport={{ once: true }}
            src={Right}
            className="z-10 relative min-[1280px]:right-[98vw] min-[2000px]:right-[90vw]"
          ></motion.img>




<motion.div
          ref={{ ref }}
          style={{
            translateY: moveY,
            scale: scale2,
            opacity: opScene,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="z-0 absolute bottom-[15vw]"
        >
          <motion.img src={All} className="min-[1500px]:w-[100vw]">
            
          </motion.img>
          <div className="w-[15rem] opacity-0 hover:opacity-100 h-[25vw] transition-opacity duration-500 min-[1500px]:h-[22vw] absolute bottom-[11vw] min-[1500px]:bottom-[13vw] left-[5.5vw] min-[1500px]:left-[6vw]">
          
          <div initial="0px" className=" w-[20rem] min-[1500px]:w-[25rem] absolute -bottom-[8vw] -left-[3.4vw] min-[1500px]:-left-[3.5vw] border-2 border-green-500 bg-green-300/20 rounded-xl text-center">
              <h1 className="text-green-200 text-[1.7vw] font-bold font-Montserrat pt-2">Common Eggs</h1>
              <p className="font-Montserrat text-green-50 font-medium text-[1vw] min-[1500px]:text-[.89vw] px-4 py-2">They might be named common but they hold really uncommon beasts, something you have never seen before!</p>
              </div>  

          </div>


          <div className="w-[15rem] opacity-0 hover:opacity-100 transition-opacity duration-500 h-[25vw] min-[1500px]:h-[22vw] absolute bottom-[11vw] left-[29vw] min-[1500px]:bottom-[13vw] min-[1500px]:left-[31vw] ">
          <div initial="0px" className=" w-[20rem] min-[1500px]:w-[25rem] absolute -bottom-[8vw] -left-[3.4vw] min-[1500px]:-left-[3.5vw] border-2 border-blue-500 bg-blue-300/20 rounded-xl text-center">
              <h1 className="text-blue-200 text-[1.7vw] font-bold font-Montserrat pt-2">Rare Eggs</h1>
              <p className="font-Montserrat text-blue-50 font-medium text-[1vw] min-[1500px]:text-[.89vw] px-4 py-2">Being fascinated by their Blue Colour? If so the contents are gonna blow your mind! They are a rank above the commons in terms for all traits!</p>
              </div>
            </div>

          <div className="w-[15rem] opacity-0 hover:opacity-100 transition-opacity duration-500 h-[25vw] min-[1500px]:h-[22vw] absolute bottom-[11vw] left-[55vw] min-[1500px]:bottom-[13vw] min-[1500px]:left-[56.5vw]">
          <div initial="0px" className=" w-[20rem] min-[1500px]:w-[25rem] absolute -bottom-[8vw] -left-[3.4vw] min-[1500px]:-left-[3.5vw] border-2 border-purple-500 bg-purple-300/20 rounded-xl text-center">
              <h1 className="text-purple-200 text-[1.7vw] font-bold font-Montserrat pt-2">Epic Eggs</h1>
              <p className="font-Montserrat text-purple-50 font-medium text-[1vw] min-[1500px]:text-[.89vw] px-4 py-2">Entering the Big Boys now! These hold some of the mightiest beasts of the Beast Verse. They should be handled with care.</p>
              </div>
             </div>

          <div className="w-[15rem] opacity-0 hover:opacity-100 transition-opacity duration-500 h-[25vw] min-[1500px]:h-[22vw] absolute bottom-[11vw] left-[78.5vw] min-[1500px]:bottom-[13vw] min-[1500px]:left-[81vw]">
          <div initial="0px" className=" w-[20rem] min-[1500px]:w-[25rem] absolute -bottom-[8vw] -left-[3.4vw] min-[1500px]:-left-[3.5vw] border-2 border-yellow-500 bg-yellow-300/20 rounded-xl text-center">
              <h1 className="text-yellow-200 text-[1.7vw] font-bold font-Montserrat pt-2">Legendary Eggs</h1>
              <p className="font-Montserrat text-yellow-50 font-medium text-[1vw] min-[1500px]:text-[.89vw] px-4 py-2">The best Beasts to ever exist in terms of power and durability! Owning one of these just makes the road to the Champion a cake-walk.</p>
              </div>
            </div>


            

        </motion.div>



        </motion.div>

       
      </div>
    </div>
  );
}

export default AboutUs;
