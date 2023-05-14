/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://r10d10.onrender.com/movies").then((response) => {
      response.json().then((json) => setMovies(json));
    });
  }, []);

  return (
    <>
      <div className="p-4 flex justify-center items-center flex-wrap w-{100%}">
        <ul className="flex flex-wrap gap-10">
          {movies.map((item) => (
            <li key={item.id}>
              <span className="w-52 h-{350px} flex flex-col p-20 justify-center items-center m-2 px-3 py-1 bg-transparent rounded-lg cursor-pointer text-sm font-semibold">
                <span className="p-1">
                  <img src={item.img} alt="images" className="rounded h-48" />
                </span>
                <span className="text-white text-left">----</span>
                <span className="p-1 rounded-lg text-center text-white">
                  {item.name}
                </span>
                <span className="p-1 rounded-lg text-center text-white">
                  {item.year}
                </span>
                <span className="p-1 rounded-lg text-center text-white">
                  Sequential: {item.sequential}
                </span>
                <Badge trilogy={item.trilogy} />
              </span>
            </li>
          ))}
        </ul>
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

export default App;
