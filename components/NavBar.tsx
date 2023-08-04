import Link from "next/link";
import {useRouter} from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <a className={router.pathname === "/" ? "active" : ""}
                href="/" >
                    HOME
            </a>
            <a className={router.pathname === "/about" ? "active" : ""}
                href="/about" >
                    ABOUT
            </a>
            <style jsx>{`
              .active {
              color :pink;
              background-color: black;
              }
              nav {
                background-color: greenyellow;
                text-decoration: none;
              }
              link {
              
              }
              
            `}</style>
        </nav>
    );
}