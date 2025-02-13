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

export default function Error({message = "Error!"}) { 
    const router = useRouter();
    const goBack = () => {
        router.push("/");
    }

    return (
        <div className={`${geistSans.variable} ${geistMono.variable} h-[calc(100vh)] flex flex-col items-center justify-center gap-y-8`}>
            <h1 className="px-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{message}</h1>
            <a className="text-blue-600 cursor-pointer" onClick={goBack}>Go Back</a>
        </div>
    );
}
