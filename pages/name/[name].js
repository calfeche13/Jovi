import Error from "@/components/Error";
import { useRouter } from "next/router";
import Input from "@/components/Input";

export default () => {

    const router = useRouter();
    const { name } = router.query;

    const isSuccess = (name || "").toLowerCase() === "jovi";

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" >
                <Input title="Pet's Name?" routePrefix="/pet/" />
            </div>
        );
    } else {
        return <Error message={`Sorry ${name}...`}/>;
    }
}