import Link from "next/link";
import {useRouter} from "next/router";

export default function NavBar() {
    const router = useRouter();
    console.log(router)
    return (
        <nav>
            <Link className="hello" href="/" style={{color: router.pathname === '/' ? 'red' : 'blue'}}>
                HOME
            </Link>
            <Link href="/about" style={{color: router.pathname === '/about' ? 'red' : 'blue'}}>
                ABOUT
            </Link>
        </nav>
    );
}