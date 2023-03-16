import { Loading } from "@nextui-org/react";


const LoadingPage = () => {
    return (
        <div className="absolute h-screen w-screen bg-white flex flex-col items-center justify-center">
            <Loading
                type="gradient"
                loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
            />
        </div>
    )
}

export default LoadingPage;