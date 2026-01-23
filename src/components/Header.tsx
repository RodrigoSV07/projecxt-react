import ignitelogo from "../assets/logo.svg";


export function Header() {
    return(
        <header className="h-20 bg-gray-800 flex justify-center py-7 gap-2 items-center">
            <img src={ignitelogo} alt="logo" className="h-8 "/>
            <strong className="text-1xl">Ignite Post</strong>
        </header>
    )
}