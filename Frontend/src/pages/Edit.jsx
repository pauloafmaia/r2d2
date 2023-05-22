import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const loadMovies = () => {
    fetch("https://r10d10.onrender.com/movies").then((response) => {
      response.json().then((json) => setMovies(json));
    });
  };

  const deleteMovie = async (id) => {
    const response = await fetch(`https://r10d10.onrender.com/movies/${id}`, {
      method: "DELETE",
    });

    if (response.status == 200) loadMovies();
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
      <div className="flex items-center h-full pb-10 pt-10 justify-center w-full">
        <table className="w-full md:w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
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
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => editMovie(movie.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteMovie(movie.id)}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
    </>
  );
}

export default Edit;
