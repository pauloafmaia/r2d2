import { useEffect, useState } from "react";

const movies = [
  {
    name: "The Phantom Menace",
    year: 1999,
    sequential: 1,
    trilogy: "Prequel",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/EP1-IA-99993-RESIZED_f9ae99b6.jpeg",
  },
  {
    name: "Attack of the Clones",
    year: 2002,
    sequential: 2,
    trilogy: "Prequel",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/EP2-IA-69221-RESIZED_1e8e0971.jpeg",
  },
  {
    name: "Revenge of the Sith",
    year: 2005,
    sequential: 3,
    trilogy: "Prequel",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_ff356cdb.jpeg",
  },
  {
    name: "A New Hope",
    year: 1977,
    sequential: 4,
    trilogy: "Classic",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/EP4_POS_2_D-RESIZED_f977074a.jpeg",
  },
  {
    name: "The Empire Strikes Back",
    year: 1980,
    sequential: 5,
    trilogy: "Classic",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_ca7910bd.jpeg",
  },
  {
    name: "Return of the Jedi",
    year: 1983,
    sequential: 6,
    trilogy: "Classic",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/EP6_POS_21_R-RESIZED_2873dc04.jpeg",
  },
  {
    name: "The Force Awakens",
    year: 2015,
    sequential: 7,
    trilogy: "Sequel",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg",
  },
  {
    name: "The Last Jedi",
    year: 2017,
    sequential: 8,
    trilogy: "Sequel",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/sb_teaser2_1-sht_v3a_online_lg_86f89198.jpeg",
  },
  {
    name: "The Rise of Skywalker",
    year: 2019,
    sequential: 9,
    trilogy: "Sequel",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg",
  },
  {
    name: "Rogue One",
    year: 2016,
    sequential: 10,
    trilogy: "Spin-off",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/5adfd0618fdfb900016b5ca6-image_64bc2f8e.jpeg",
  },
  {
    name: "Solo",
    year: 2018,
    sequential: 11,
    trilogy: "Spin-off",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster_f98a86eb_62fc4b3c.jpeg",
  },
];

function App() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch("https://r10d10.onrender.com/#/movies/getMovies").then((response) => {
  //     response.json().then((json) => setMovies(json));
  //   });
  // }, []);

  return (
    <>
      <div className="p-4 flex justify-center items-center flex-wrap w-{100%}">
        <ul className="flex flex-wrap gap-10">
          {movies.map((item) => (
            <li key={item.id}>
              <span className="w-52 h-{350px} flex flex-col p-20 justify-center items-center m-2 px-3 py-1 bg-transparent rounded-lg cursor-pointer text-sm font-semibold">
                <span className="p-1">
                  <img src={item.image} alt="images" className="rounded h-48" />
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
