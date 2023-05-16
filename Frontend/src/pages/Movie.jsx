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
      <div className="opacity-70 pb-10 w-auto h-auto">
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
          <h1 className="text-[20px] font-bold text-white pt-5 pb-5">
            Trilogy: <Badge trilogy={movie.trilogy} />
          </h1>
          <h1 className="text-[15px] font-bold text-white pt-5">
            {movie.synopsis}
          </h1>
          <iframe
            className="pt-10 w-[600px] h-[400px]"
            src={movie.trailer}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="w-full bg-dark-grey text-center text-white">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Badge({ trilogy }) {
  let cor = "white";

  switch (trilogy) {
    case "Classic":
      cor = "red";
      break;
    case "Prequel":
      cor = "blue";
      break;
    case "Sequel":
      cor = "yellow";
      break;
    case "Spin-off":
      cor = "green";
      break;

    default:
      break;
  }

  return (
    <span className={`text-white italic bg-${cor}-600 rounded-lg p-2`}>
      {trilogy}
    </span>
  );
}

export default Movie;
