import LoginCard from "../components/loginCard"
import "../index.css"
export function Login(){
    return (<div className="flex flex-row w-full gap-4 md:gap-16 items-center justify-center min-h-screen p-8">
        <div>
            <LoginCard/>
        </div>
    </div>)
}