import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

Movie.propTypes = {
  id: String,
};

function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://r10d10.onrender.com/movies/${id}`).then((response) => {
      response.json().then((json) => setMovie(json));
    });
  }, [id]);

  return (
    <>
      <div className="opacity-70 pb-10 w-auto h-auto md:pt-5 pt-5">
        <img src={movie.image2} alt="" />
      </div>
      <div className="md:grid md:grid-cols-2 md:w-full md:h-full w-auto h-auto">
        <div className="md:w-full md:h-full md:flex md:items-center flex justify-center">
          <img className="md:w-1/2 w-1/2 pb-5" src={movie.image} alt="" />
        </div>
        <div className="flex flex-col md:pr-5">
          <h1 className="md:text-[40px] md:text-left md:pb-5 text-2xl text-center font-bold text-white">
            {movie.name}
          </h1>
          <h1 className="md:text-[40px] md:text-left md:pb-5 text-xl text-center font-bold text-white">
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
            className="pt-10 w-auto h-[300px] md:w-auto md:h-full md:pt-5"
            src={movie.trailer}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
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
