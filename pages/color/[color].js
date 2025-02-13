import Error from "@/components/Error";
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

export default () => {

    const router = useRouter();
    const { color } = router.query;

    const isSuccess = (color || "").toLowerCase() === "pink";

    const proceed = () => {
        router.push("/final");
    }

    if (isSuccess) {
        return (
            <div className={`${geistSans.variable} ${geistMono.variable} h-[calc(100vh)] flex flex-col items-center justify-center gap-y-8`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">You are the one!</h1>
                <a className="text-blue-600 cursor-pointer" onClick={proceed}>Proceed</a>
            </div>
        );
    } else {
        return <Error message={`ouugh, must be someone else, ${color} is not her favorite color.`} />;
    }
}