import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 5,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  AKJ
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-black"></div>
                  <div className="line w-8 h-2 bg-black"></div>
                  <div className="line w-5 h-2 bg-black"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-yellow-100">
                  Aksh Jain
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-fit"
                src="./bg.png"
                alt=""
              />
               <div className="text text-yellow-100 flex flex-col gap-3 absolute top-20 left-280 -translate-x-1/2 scale-[1.4] rotate-[-1deg]">
                <h1 className="text-[12rem] leading-none -ml-10">palma</h1>
                <h1 className="text-[12rem] leading-none ml-70">nonsine</h1>
                <h1 className="text-[12rem] leading-none -ml-50">pulvere</h1>
              </div>
              <img
                className="absolute bottom-[-200px] left-250 -translate-x-1/2 w-[650px] max-w-full scale-[1] rotate-[-5deg]"
                src="./boybg1.png"
                alt=""
              />


            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[0.5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Learning,</h1>
                <h1 className="text-8xl">Never Stops</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  In the world of software engineering, learning never truly stops—it simply evolves. Every framework I master, every bug I fix, every new language I explore is a reminder that growth is infinite in this field. As a full-stack engineer,
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  I move fluidly between front-end elegance and back-end architecture, constantly adapting, constantly improving. Technology doesn’t pause, and neither can I. Each line of code I write today builds on the knowledge of yesterday and prepares me for the innovations of tomorrow.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  For me, continuous learning isn’t just a necessity—it’s a mindset, a passion, and the core of what makes this journey exciting and limitless.
                </p>
                <button className="bg-yellow-500 px-5 py-3 text-black mt-10 text-4xl">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;