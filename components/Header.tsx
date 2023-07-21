import Link from 'next/link';

const Header = () => {
    return(
        <header>
            <Link href="/sub">
                서브페이지 이동
            </Link>
        </header>
    )
   
}

export default Header;