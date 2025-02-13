import Error from "@/components/Error";
import { useRouter } from "next/router";
import Input from "@/components/Input";

export default () => {

    const router = useRouter();
    const { pet } = router.query;

    const isSuccess = (pet || "").toLowerCase() === "carla";

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" >
                <Input title="Favourite Color?" routePrefix="/color/" />
            </div>
        );
    } else {
        return <Error />;
    }
}