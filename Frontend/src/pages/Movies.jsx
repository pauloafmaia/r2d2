const movies = [
  {
    id: "1",
    name: "Star Wars: Episode I – The Phantom Menace",
    sequential: 1999,
    image: "/1.jpg",
    synopsis:
      "Two Jedi knights discover a young boy who is strong in the Force and may be the one to fulfill a prophecy, while the Sith resurface to threaten the galaxy.",
  },
  {
    id: "2",
    name: "Star Wars: Episode II – Attack of the Clones",
    sequential: 2002,
    image: "/2.jpg",
    synopsis:
      "Ten years after the invasion of Naboo, the Republic is on the brink of civil war. Anakin Skywalker begins to fall in love while the dark side slowly takes hold.",
  },
  {
    id: "3",
    name: "Star Wars: Episode III – Revenge of the Sith",
    sequential: 2005,
    image: "/3.jpg",
    synopsis:
      "As the Clone Wars come to an end, Anakin Skywalker falls to the dark side and becomes Darth Vader, while the Emperor rises to power and the Jedi are hunted down.",
  },
  {
    id: "4",
    name: "Star Wars: Episode IV – A New Hope",
    sequential: 1977,
    image: "/4.jpg",
    synopsis:
      "Luke Skywalker joins forces with a Jedi Knight, a daring pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
  },
  {
    id: "5",
    name: "Star Wars: Episode V – The Empire Strikes Back",
    sequential: 1980,
    image: "/5.jpg",
    synopsis:
      "The Rebel Alliance is pursued by the Empire after the destruction of the Death Star. Luke trains with Yoda while his friends are captured by Darth Vader.",
  },
  {
    id: "6",
    name: "Star Wars: Episode VI – Return of the Jedi",
    sequential: 1983,
    image: "/6.jpg",
    synopsis:
      "The Rebels launch a final attack on the Empire while Luke faces Darth Vader and the Emperor in a climactic battle that will decide the fate of the galaxy.",
  },
  {
    id: "7",
    name: "Star Wars: Episode VII – The Force Awakens",
    sequential: 2015,
    image: "/7.jpg",
    synopsis:
      "A new threat arises from the ashes of the Empire. Rey, a scavenger, discovers her connection to the Force as the Resistance battles the First Order.",
  },
  {
    id: "8",
    name: "Star Wars: Episode VIII – The Last Jedi",
    sequential: 2017,
    image: "/8.jpg",
    synopsis:
      "Rey seeks training from Luke Skywalker while the Resistance fights for survival against the First Order. Old legends face new challenges.",
  },
  {
    id: "9",
    name: "Star Wars: Episode IX – The Rise of Skywalker",
    sequential: 2019,
    image: "/9.jpg",
    synopsis:
      "The surviving members of the Resistance face the First Order once more, as Rey confronts her destiny and the return of Emperor Palpatine.",
  },
];

export default function Movies() {
  return (
    <div className="p-4 flex justify-center items-center flex-wrap w-full">
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-10 md:justify-center">
        {movies.map((item) => (
          <li key={item.id}>
            <span className="hover:bg-gray-600 w-[300px] h-[420px] flex flex-col p-5 justify-start items-center m-2 bg-gray-900 rounded-lg text-sm font-semibold">
              <span className="p-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded h-48 w-full object-cover"
                />
              </span>
              <span className="text-[15px] p-2 rounded-lg text-center text-white font-bold">
                {item.name} ({item.sequential})
              </span>
              <span className="text-[15px] p-2 rounded-lg text-center text-white max-w-xs break-words">
                {item.synopsis}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
