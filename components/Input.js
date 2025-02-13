import Rose from "./Rose";
import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Input({title, inputType = "text", buttonText = "Submit", routePrefix = "/"}) {

    const [value, setValue] = useState('');

    const router = useRouter();

    const handleSubmit = () => {
        router.push(`${routePrefix}${value}`);
    }

    const onInputChange = (event) => {
        let newVal = event.target.value;
        setValue(newVal);
    }

    return (
        <div class="flex flex-col justify-center items-center gap-16">
            <h1 className={`${geistSans.variable} ${geistMono.variable} animate-slide-up text-3xl md:text-4xl lg:text-5xl font-bold leading-tight`}>{title}</h1>

            <div className="relative text-black">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Rose />
                </div>
                <input value={value} onChange={onInputChange} type="{inputType}" className="font-bold w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Rose />
                </div>
            </div>

            <button onClick={handleSubmit} class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span class="relative text-white">{buttonText}</span>
            </button>
        </div>
    );
}