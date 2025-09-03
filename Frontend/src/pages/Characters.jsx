import { useState } from "react";

const characters = [
  {
    name: "Luke Skywalker",
    role: "Jedi Knight",
    image: "/luke.jpg",
    curiosity:
      "Luke Skywalker is portrayed by Mark Hamill. He is the son of Anakin Skywalker (Darth Vader) and Padmé Amidala, and the twin brother of Princess Leia Organa.",
    gender: "male",
    species: "Human",
    affiliation: "Jedi",
    homeworld: "Tatooine",
    status: "Alive",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "Princess Leia Organa",
    role: "Rebel Leader",
    image: "/leia.jpg",
    curiosity:
      "Princess Leia Organa is portrayed by Carrie Fisher. She is a member of the Rebel Alliance, known for her intelligence, bravery, and leadership skills.",
    gender: "female",
    species: "Human",
    affiliation: "Rebel Alliance",
    homeworld: "Alderaan",
    status: "Deceased",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "Darth Vader",
    role: "Sith Lord",
    image: "/vader.jpg",
    curiosity:
      "Darth Vader, formerly known as Anakin Skywalker, is portrayed by David Prowse (body) and voiced by James Earl Jones. He is one of the most iconic villains in cinematic history.",
    gender: "male",
    species: "Human",
    affiliation: "Sith",
    homeworld: "Tatooine",
    status: "Deceased",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "Han Solo",
    role: "Smuggler",
    image: "/han.jpg",
    curiosity:
      "Han Solo is portrayed by Harrison Ford. He is the captain of the Millennium Falcon and a skilled pilot known for his quick wit and resourcefulness.",
    gender: "male",
    species: "Human",
    affiliation: "Rebel Alliance",
    homeworld: "Corellia",
    status: "Deceased",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "Chewbacca",
    role: "Wookiee Co-pilot",
    image: "/chewbacca.jpg",
    curiosity:
      "Chewbacca, often referred to as 'Chewie,' is portrayed by Peter Mayhew. He is a loyal companion to Han Solo and known for his strength and distinctive vocalizations.",
    gender: "male",
    species: "Wookiee",
    affiliation: "Rebel Alliance",
    homeworld: "Kashyyyk",
    status: "Alive",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "Obi-Wan Kenobi",
    role: "Jedi Master",
    image: "/obiwan.jpg",
    curiosity:
      "Obi-Wan Kenobi is portrayed by Sir Alec Guinness in the original trilogy and Ewan McGregor in the prequel trilogy. He is a wise and skilled Jedi who mentors both Anakin and Luke Skywalker.",
    gender: "male",
    species: "Human",
    affiliation: "Jedi",
    homeworld: "Stewjon",
    status: "Deceased",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "Yoda",
    role: "Jedi Master",
    image: "/yoda.jpg",
    curiosity:
      "Yoda is portrayed by Frank Oz (puppeteer and voice). He is one of the most powerful and wise Jedi Masters in the Star Wars universe, known for his unique speech pattern.",
    gender: "male",
    species: "Yoda's species",
    affiliation: "Jedi",
    homeworld: "Unknown",
    status: "Deceased",
    firstAppearance: "Star Wars: Episode V – The Empire Strikes Back",
  },
  {
    name: "R2-D2",
    role: "Astromech Droid",
    image: "/r2d2.jpg",
    curiosity:
      "R2-D2 is portrayed by Kenny Baker (original trilogy) and various operators in later films. He is a resourceful astromech droid known for his bravery and loyalty.",
    gender: "droid",
    species: "Droid",
    affiliation: "Rebel Alliance",
    homeworld: "Naboo",
    status: "Alive",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "C-3PO",
    role: "Protocol Droid",
    image: "/c3po.jpg",
    curiosity:
      "C-3PO is portrayed by Anthony Daniels. He is a protocol droid fluent in over six million forms of communication, often providing comic relief in the series.",
    gender: "droid",
    species: "Droid",
    affiliation: "Rebel Alliance",
    homeworld: "Tatooine",
    status: "Alive",
    firstAppearance: "Star Wars: Episode IV – A New Hope",
  },
  {
    name: "Emperor Palpatine",
    role: "Sith Lord",
    image: "/palpatine.jpg",
    curiosity:
      "Emperor Palpatine, also known as Darth Sidious, is portrayed by Ian McDiarmid. He is the mastermind behind the fall of the Jedi and the rise of the Galactic Empire.",
    gender: "male",
    species: "Human",
    affiliation: "Sith",
    homeworld: "Naboo",
    status: "Deceased",
    firstAppearance: "Star Wars: Episode V – The Empire Strikes Back",
  },
];

function getUnique(arr, key) {
  return [...new Set(arr.map((item) => item[key]))];
}

export default function Characters() {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [status, setStatus] = useState("");

  const filteredCharacters = characters.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (gender ? item.gender === gender : true) &&
      (species ? item.species === species : true) &&
      (affiliation ? item.affiliation === affiliation : true) &&
      (status ? item.status === status : true)
  );

  return (
    <>
      <div className="p-4 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row gap-4 mb-6 w-full max-w-2xl justify-center items-center">
          <div className="flex flex-col w-full md:max-w-xs">
            <label className="mb-1 text-base font-bold text-white">
              Search
            </label>
            <input
              type="text"
              placeholder="Search character..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 rounded border border-gray-400 w-full text-black min-w-[180px]"
            />
          </div>
          <div className="flex flex-col w-full md:max-w-xs">
            <label className="mb-1 text-base font-bold text-white">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="p-2 rounded border border-gray-400 w-full min-w-[180px]"
            >
              <option value="">Select...</option>
              {getUnique(characters, "gender").map((g) => (
                <option key={g} value={g}>
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full md:max-w-xs">
            <label className="mb-1 text-base font-bold text-white">
              Species
            </label>
            <select
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="p-2 rounded border border-gray-400 w-full min-w-[180px]"
            >
              <option value="">Select...</option>
              {getUnique(characters, "species").map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full md:max-w-xs">
            <label className="mb-1 text-base font-bold text-white">
              Affiliation
            </label>
            <select
              value={affiliation}
              onChange={(e) => setAffiliation(e.target.value)}
              className="p-2 rounded border border-gray-400 w-full min-w-[180px]"
            >
              <option value="">Select...</option>
              {getUnique(characters, "affiliation").map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full md:max-w-xs">
            <label className="mb-1 text-base font-bold text-white">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 rounded border border-gray-400 w-full min-w-[180px]"
            >
              <option value="">Select...</option>
              {getUnique(characters, "status").map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-10 md:justify-center">
          {filteredCharacters.map((item) => (
            <li key={item.name}>
              <span className="hover:bg-gray-600 w-[300px] h-[550px] flex flex-col p-5 justify-start items-center m-2 bg-gray-900 rounded-lg text-sm font-semibold">
                <span className="p-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded h-48 w-full object-cover"
                  />
                </span>
                <span className="text-[15px] p-2 rounded-lg text-center text-white font-bold">
                  {item.name} ({item.role})
                </span>
                <span className="text-[15px] p-2 rounded-lg text-center text-white max-w-xs break-words">
                  {item.curiosity}
                </span>
                <span className="text-[15px] p-2 rounded-lg text-center text-white max-w-xs break-words">
                  Gender: {item.gender}
                </span>
                <span className="text-[15px] p-2 rounded-lg text-center text-white max-w-xs break-words">
                  Species: {item.species}
                </span>
                <span className="text-[15px] p-2 rounded-lg text-center text-white max-w-xs break-words">
                  Affiliation: {item.affiliation}
                </span>
                <span className="text-[15px] p-2 rounded-lg text-center text-white max-w-xs break-words">
                  Status: {item.status}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
