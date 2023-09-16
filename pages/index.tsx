import Seo from "../components/Seo";
import {useEffect, useState} from "react";

const API_KEY = "";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const { res } = await (
                await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            console.log(res)
            console.log(typeof res)
            setMovies(res);
        })();
    }, []);
    return (
        <div>
            <Seo title = "Home"/>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>

            ))}
            <style jsx>{`
              a {
              color: white;
              }
            `}</style>
        </div>
    );
}
//이 컴포넌트 안에 들어가는 모든 것들이 우리의 html의 head 안에 보여질 거임