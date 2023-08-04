import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link className={`${styles.link}, ${
                router.pathname === '/' ? styles.active : ""
            }`}
                  href="/" style={{color: router.pathname === '/' ? 'red' : 'blue'}}>
                    HOME
            </Link>
            <Link className={`${styles.link}, ${
                router.pathname === '/' ? styles.active : ""
            }`}
                href="/about" style={{color: router.pathname === '/about' ? 'red' : 'blue'}}>
                    ABOUT
            </Link>
        </nav>
    );
}