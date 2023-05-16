/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

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
      <div className="p-3 w-full bg-dark-grey text-center text-white">
        <Link to={"https://www.disneyplus.com/pt-br/brand/star-wars"}>
          <h1 className="text-white text-xl uppercase">
            All of your star wars movies now streaming on disney +
          </h1>
        </Link>
      </div>
      <div className="p-4 flex justify-center items-center flex-wrap w-full">
        <div className="w-full flex items-start p-5 justify-center">
          <label className="pt-2 text-white" htmlFor="add">
            ADD MOVIE
          </label>
          <Icon
            id="add"
            className="cursor-pointer w-[40px] h-[40px] text-white"
            onClick={() => {
              navigate("/create");
            }}
            icon="material-symbols:add"
          />
          <label className="pt-2 text-white" htmlFor="edit">
            EDIT MOVIE
          </label>
          <Icon
            id="edit"
            className="cursor-pointer w-[30px] h-[30px] text-white pt-2"
            onClick={() => {
              navigate("/create");
            }}
            icon="material-symbols:edit"
          />
          <label className="pt-2 text-white" htmlFor="delete">
            DELETE MOVIE
          </label>
          <Icon
            id="delete"
            className="cursor-pointer w-[40px] h-[40px] text-white"
            onClick={() => {
              navigate("/create");
            }}
            icon="material-symbols:remove"
          />
        </div>
        <ul className="flex flex-wrap gap-10">
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
                  <span className="p-1 rounded-lg text-center text-white">
                    {item.name}
                  </span>
                  <span className="p-1 rounded-lg text-center text-white">
                    {item.year}
                  </span>
                  <Badge trilogy={item.trilogy} />
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full bg-dark-grey text-center text-white">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

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

export default Home;
