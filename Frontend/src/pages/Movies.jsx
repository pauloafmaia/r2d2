/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://r10d10.onrender.com/movies").then((response) => {
      response.json().then((json) => setMovies(json));
    });
  }, []);

  return (
    <>
      <div className="p-4 flex justify-center items-center flex-wrap w-full">
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-10 md:justify-center">
          {movies.map((item) => (
            <Link key={item.id} to={item.id}>
              <li>
                <span className="hover:bg-gray-700 w-[210px] h-{350px} flex flex-col p-10 justify-center items-center m-2 px-3 py-1 bg-transparent rounded-lg cursor-pointer text-sm font-semibold">
                  <span className="p-1">
                    <img
                      src={item.image}
                      alt="images"
                      className="rounded h-48"
                    />
                  </span>
                  <span className="text-[15px] p-1 rounded-lg text-center text-white pb-5">
                    {item.name} ({item.sequential})
                  </span>
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Movies;
