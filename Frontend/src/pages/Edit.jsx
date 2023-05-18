import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const deleteMovie = async (id) => {
    const response = await fetch(`https://r10d10.onrender.com/movies/${id}`, {
      method: "DELETE",
    });

    if (response.status == 200) window.location.reload();
  };

  const editMovie = async (id) => {
    navigate(`/update/${id}`);
  };

  useEffect(() => {
    fetch("https://r10d10.onrender.com/movies").then((response) => {
      response.json().then((json) => setMovies(json));
    });
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-center pt-6 pb-6">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          alt=""
          className="m-auto w-[180px] h-[80px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="p-3 w-full bg-dark-grey text-center text-white text-[15px] uppercase">
        <Link to={"https://www.disneyplus.com/pt-br/brand/star-wars"}>
          <h1>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</h1>
        </Link>
      </div>
      <div className="p-4 flex justify-start items-center flex-wrap w-full text-white">
        <Icon
          id="back"
          className="cursor-pointer w-[50px] h-[50px]"
          onClick={() => {
            navigate("/");
          }}
          icon="material-symbols:arrow-back"
        />
      </div>
      <div className="flex items-center h-full pb-10 pt-10 justify-center">
        <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sequential
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">{movie.name}</td>
                  <td className="px-6 py-4">{movie.sequential}</td>
                  <td className="px-6 py-4">{movie.year}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="mr-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                      onClick={() => editMovie(movie.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => deleteMovie(movie.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full bg-dark-grey text-center text-white">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

export default Edit;
