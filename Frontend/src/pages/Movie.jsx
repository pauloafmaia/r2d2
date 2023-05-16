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
      <div className="p-3 w-full bg-dark-grey text-center text-white">
        <Link to={"https://www.disneyplus.com/pt-br/brand/star-wars"}>
          <h1 className="text-white text-xl uppercase">
            All of your star wars movies now streaming on disney +
          </h1>
        </Link>
      </div>
      <div className="p-4 flex justify-start items-center flex-wrap w-full text-white">
        <Icon
          className="cursor-pointer w-[50px] h-[50px]"
          onClick={() => {
            navigate("/");
          }}
          icon="material-symbols:arrow-back"
        />
        <label htmlFor="">Return to movies</label>
      </div>
      <div className="opacity-70 pb-10">
        <img src={movie.image2} alt="" />
      </div>
      <div className="grid grid-cols-2 w-full pb-10">
        <div className="flex justify-center">
          <img className="w-[480px] h-[715px]" src={movie.image} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[40px] font-bold text-white">{movie.name}</h1>
          <h1 className="text-[40px] font-bold text-white">
            ({movie.sequential})
          </h1>
          <h1 className="text-[20px] font-bold text-white pt-2">
            Release Date: {movie.year}
          </h1>
          <h1 className="text-[15px] text-white">
            Genre: Action, Adventure, Science Fiction
          </h1>
          <h1 className="text-[15px] font-bold text-white pt-5">
            {movie.synopsis}
          </h1>
          <video
            src={movie.trailer}
            className="w-[320px] h-[240px]"
            autoPlay
            muted
          ></video>
        </div>
      </div>
      <div className="w-full bg-dark-grey text-center text-white">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

export default Movie;
