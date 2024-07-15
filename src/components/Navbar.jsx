import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../utils/instance";

function Navbar() {
    const [movieName, setMovieName] = useState("");
    const [moviesList, setMoviesList] = useState();
    let options = {
        params: {
            query: movieName,
            include_adult: "false",
            language: "en-US",
            page: "1",
        },
    };
    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/search/movie`;
        instance
            .get(URL, options)
            .then((res) => {
                // console.log(res.data);
                setMoviesList(res.data.results);
            })
            .catch((error) => console.log(error.message));
    }, [movieName]);
    window.addEventListener("click", (e) => {
        if (e.target.id == "") {
            setMovieName("");
        }
    });
    return (
        <div className="relative">
            <div className="border-b border-gray-400 px-5">
                <nav className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-semibold">FDFS</Link>
                    <div className="relative md:w-1/2 lg:w-1/3 hidden md:block">
                        <input
                            id="movieInput"
                            onChange={(e) => setMovieName(e.target.value)}
                            value={movieName}
                            className="w-full py-1 px-3 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            type="text"
                            placeholder="Search for any movie or tv shows..."
                        />
                    </div>
                    <div></div>
                </nav>
                <div className="md:hidden mb-2">
                    <input
                        id="movieInput"
                        onChange={(e) => setMovieName(e.target.value)}
                        value={movieName}
                        className="w-full py-2 px-3 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        type="text"
                        placeholder="Search for any movie or tv shows..."
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    id="movieListContainer"
                    className="absolute rounded-lg md:w-1/2 lg:w-1/3 p-3 z-50 max-h-screen overflow-y-scroll scrollbar-hide"
                >
                    {moviesList?.map((eachMovie) => (
                        <Link
                            to={`/${eachMovie.id}`}
                            key={eachMovie.id}
                            onClick={() => setMovieName("")}
                            className="grid grid-cols-7 p-3 gap-3 bg-gray-700 text-white border-b border-gray-500"
                        >
                            <div className="col-span-2">
                                <img
                                    className="rounded-lg"
                                    src={
                                        eachMovie.poster_path
                                            ? `https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`
                                            : "https://t4.ftcdn.net/jpg/07/85/53/27/240_F_785532781_CF7J5Gw67yIgvB0MFbW5QOyzejsLV6fx.jpg"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="col-span-5">
                                <h1>{eachMovie.title}</h1>
                                <p>Rating : {eachMovie.vote_average?.toString().slice(0, 3)} <i className="fa-solid fa-star text-yellow-400"></i></p>
                                <p>Released on : {eachMovie.release_date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
