import Link from 'next/link';


const Header = () => {
    return(
        <header className="header w-full fixed h-24  bg-slate-950 border-b top-0 inset-x-0 border-gray-100">
            <nav className="w-full h-full">
                <ul className="w-full h-full flex">
                    <li className="basis-3/12 h-full">
                        <Link href="/" className="text-slate-100 border-r border-gray-100 w-full h-full flex justify-center items-center text-xl px-5 hover:tracking-widest duration-300">
                            Main
                        </Link>
                    </li>
                    <li className="basis-3/12 full">
                        <Link href="/sub" className="text-slate-100 border-r border-gray-100 w-full h-full flex justify-center items-center text-xl px-5 hover:tracking-widest duration-300" >
                            ScrollTriggered section
                        </Link>
                    </li>
                    <li className="basis-3/12 full">
                        <Link href="/login" className="text-slate-100 border-r border-gray-100 w-full h-full flex justify-center items-center text-xl px-5 hover:tracking-widest duration-300" >
                            Login
                        </Link>
                    </li>
                    <li className="basis-3/12 full">
                        <Link href="/ect" className="text-slate-100 border-r border-gray-100 w-full h-full flex justify-center items-center text-xl px-5 hover:tracking-widest duration-300" >
                            Ect
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
   
}

export default Header