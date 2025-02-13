import React, { useEffect, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const FallingPetals = () => {
  const [petals, setPetals] = useState([]);
  const [count, setCount] = useState(0);

  // Different petal path variants for variety
  const petalPaths = [
    "M10 0C15 2 20 8 20 15C20 25 10 30 0 25C-2 20 -2 10 0 5C2 0 5 -2 10 0Z",
    "M12 0C18 3 22 10 20 18C15 28 5 30 0 25C-2 20 -2 8 0 4C3 0 6 -3 12 0Z",
    "M10 0C17 0 20 10 18 18C15 25 5 28 0 22C-2 15 -2 8 0 4C2 0 5 0 10 0Z",
  ];

  const petalColors = [
    'fill-red-300',
    'fill-red-400',
    'fill-red-500',
    'fill-red-600',
  ];

  const createPetal = () => {
    const pathIndex = Math.floor(Math.random() * petalPaths.length);
    const colorIndex = Math.floor(Math.random() * petalColors.length);
    return {
      id: count,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 0.8, // Scale between 0.8 and 1.3
      rotation: Math.random() * 360,
      swayAmount: Math.random() * 30 + 20,
      pathIndex,
      color: petalColors[colorIndex],
      fallspeed: Math.random() > 0.5 ? 'animate-fall' : (Math.random() > 0.5 ? 'animate-fall-fast' : 'animate-fall-fastest'),
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (petals.length < 20) {
        setPetals(prev => [...prev, createPetal()]);
        setCount(prev => prev + 1);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [petals.length]);

  return (
        <div className={`${geistSans.variable} ${geistMono.variable} my-16 h-min-[calc(100vh)] flex flex-col items-center justify-center gap-y-8`}>
            <h1 className="text-3xl z-10 md:text-4xl lg:text-5xl font-bold leading-tight">A letter from me to you</h1>
            <p className="p-4 text-center z-10 bg-[#141414] rounded-xl xl:w-[70vw] w-[90vw]">
                Hi my loves, I know daghan kaayo kog kuwang nimo pero I hope maka sugakod ghapon ta sa kinabuhi og
                di ko ma lamdagan pa sa akong pagka buang nimo hahaha.
                Kapoy na bitaw pero ikaw ramn jd akong makita sa akong kinabuhi.
                Bisag unsaon nako di jd ko maka imagine sa akong kaugalingon naa koy kuyog laen.
                Bisag kausa nga nag kuyog ta wala jd ko naka hunahuna og mga butang nga mag duda ko sa atong relationship,
                kung mag kuyog ta feel nako ok ang tanan, ikaw ra akong pahuway, ikaw ra akong safe space.
            </p>
            <p className="p-4 text-center z-10 bg-[#141414] rounded-xl xl:w-[70vw] w-[90vw]">
                Di ko ka biya nimo kay sa tinudanay lang jd mahadlok ko, mahadlok kos akong kaugmaon,
                mahadlok sd ko maunsa ka, og mahadlok sd jd ko mawala ka. Kahibaw ko daghan kog kuwang bitaw,
                daghan kaayo kog kuwang nimo, samot na og mga in ani, di jd ko maayo mo plano,
                pero usa rajd ako nahibawan bitaw, if magkuyog tang duha bisag asa ta manlakaw malipay ko
                og malingaw ko basta kitang duha. Feel nako walay maka hadlang nato basta kitang duha ang mag kuyog.
            </p>
            <p className="p-4 text-center z-10 bg-[#141414] rounded-xl xl:w-[70vw] w-[90vw]">
                Pero kahibaw ko, dili jd bitaw mahibawan ang panahon, either di ko kasugakod na ani akong bisyo og mo undang
                ko, or maka realize najd ka nga di nako nimo love. Pero if unsa may mahitabo I hope mag amping ka
                og malipayon kas imong gipangbuhat.
            </p>
            <p className="p-4 text-center z-10 bg-[#141414] rounded-xl xl:w-[70vw] w-[90vw]">
                Kung unsa mn jy mahitabo nato ani, I hope imo unahon imo kaugalingon, dili nimo need e explain imo kaugalingon
                dili ka mag agad sa uban tao kundi imo ra kaugalingon imo paminawon. og ang pinaka importante sa tanan, mao
                jd akong goal og ganahan mahitabo nganu ari ka sa SG kay dapat malipay ka sa imo self, og imo unahon imo self.
            </p>
            <p className="p-4 text-center z-10 bg-[#141414] rounded-xl xl:w-[70vw] w-[90vw]">
                Unahan imong kaugalingon bitaw Jovi, advice gikan nako, unaha jd imo kaugalingon. Ayaw paminaw sa uban tao, ayaw sd paminaw nako,
                paminawa imo kaugalingon og paminawa sd ang Ginuo. Pinangga ka sa Ginuo bitaw, daghan kaayo siyag signs gipang hatag nimo
                mao rana imong need sundon.
            </p>
            <p className="p-4 text-center z-10 bg-[#141414] rounded-xl xl:w-[70vw] w-[90vw]">
                Happy Valentines day! I hope lipay raka karon, and I hope maka rani natong duha kung unsa may kinalabasan ani.
            </p>
            <p className="p-4 text-center z-10 bg-[#141414] rounded-xl xl:w-[70vw] w-[90vw]">
                From me to you...
            </p>

            <AudioPlayer />

            <div className="h-screen w-full overflow-hidden sticky mt-[calc(-10vh)] absolute inset-0 z-[-1]">
            {petals.map((petal) => (
                <div
                key={petal.id}
                className={`absolute ${petal.fallspeed}`}
                style={{
                    left: `${petal.left}%`,
                }}
                >
                <div
                    className={`animate-sway`}
                    style={{
                    animationDelay: `${petal.delay}s`,
                    transform: `rotate(${petal.rotation}deg) scale(${petal.scale})`,
                    }}
                >
                    <svg
                    viewBox="-10 -10 40 40"
                    className={`w-12 h-12 ${petal.color} opacity-80`}
                    >
                    <path
                        d={petalPaths[petal.pathIndex]}
                        className="drop-shadow-md"
                    >
                        <animate
                        attributeName="opacity"
                        values="0.7;0.9;0.7"
                        dur="3s"
                        repeatCount="indefinite"
                        />
                    </path>
                    <path
                        d={petalPaths[petal.pathIndex]}
                        className="fill-white/20"
                    />
                    </svg>
                </div>
                </div>
            ))}
            </div>
        </div>
    
  );
};

export default FallingPetals;