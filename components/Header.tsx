import Link from 'next/link';


const Header = () => {
    return(
        <header className="header">
            <nav>
                <ul className="nav__inner">
                    <li>
                        <Link href="/">
                            Main
                        </Link>
                    </li>
                    <li>
                        <Link href="/sub">
                            ScrollTriggered section
                        </Link>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
   
}

export default Header;