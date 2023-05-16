import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
      <div className="w-full flex justify-center items-center pt-6">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          alt=""
          className="m-auto w-[180px] h-[80px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="p-4 flex justify-center items-center flex-wrap w-full">
        <div className="pt-3 pb-2 bg-dark-grey w-full text-center">
          <Link to={"https://www.disneyplus.com/pt-br/brand/star-wars"}>
            <h1 className="text-white text-xl uppercase">
              All of your star wars movies now streaming on disney +
            </h1>
          </Link>
        </div>
      </div>
      <div>
        <label htmlFor="">Return to movies</label>
        <Icon
          className="cursor-pointer w-[50px] h-[50px]"
          onClick={() => {
            navigate("/");
          }}
          icon="material-symbols:arrow-back"
        />
      </div>
      <div className="w-screen">
        <div className="flex justify-center">
          <img className="w-[400px] h-[600px]" src={movie.image} alt="" />
        </div>
        <div className="">
          <h1 className="text-[50px] font-bold text-white">{movie.name}</h1>
        </div>
        <div className="">
          <h1 className="text-[40px] font-bold text-white">
            {movie.sequential}
          </h1>
        </div>
        <div className="">
          <h1 className="text-[20px] font-bold text-white">
            {movie.year}
          </h1>
        </div>
        <div className="">
          <h1 className="text-[20px] font-bold text-white">{movie.synopsis}</h1>
        </div>
      </div>
      <div className="w-full bg-dark-grey text-center text-white">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

export default Movie;
