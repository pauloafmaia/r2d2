import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

Movie.propTypes = {
  id: String,
};

function Movie() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://r10d10.onrender.com/movies/${id}`).then((response) => {
      response.json().then((json) => setMovie(json));
    });
  }, [id]);

  return (
    <>
      <Icon
        className="cursor-pointer w-[50px] h-[50px]"
        onClick={() => {
          navigate("/");
        }}
        icon="material-symbols:arrow-back"
      />
      <div className="grid grid-cols-2 gap-6 p-20 w-full h-full">
        <div className="flex justify-center">
          <img className="w-[400px] h-[600px]" src={movie.image} alt="" />
        </div>
        <div className="">
          <h1 className="text-[50px] font-bold text-white">{movie.name}</h1>
        </div>
      </div>
      <footer className="rounded-lg shadow dark:bg-black m-4 text-center text-white">
        Star Wars API
      </footer>
    </>
  );
}

export default Movie;
