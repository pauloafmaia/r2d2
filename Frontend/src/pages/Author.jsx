export default function Author() {
  return (
    <>
      <div className="pt-5 pb-5 md:flex md:justify-center">
        <div className="text-white bg-slate-700 md:flex md:text-center text-center max-w-sm flex items-center flex-col dark:bg-slate-700 pt-5 mr-3 ml-3 rounded-md">
          <div>
            <img
              className="rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/George_Lucas_cropped_2009.jpg/220px-George_Lucas_cropped_2009.jpg"
              alt="george lucas"
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              George Walton Lucas Jr.
            </h5>
            <p className="mb-3 font-normal dark:text-white text-white">
              George Walton Lucas Jr. (born May 14, 1944) is an American
              filmmaker. Lucas is best known for creating the Star Wars and
              Indiana Jones franchises and founding Lucasfilm, LucasArts,
              Industrial Light & Magic and THX. He served as chairman of
              Lucasfilm before selling it to The Walt Disney Company in 2012.
            </p>
            <a
              target="blank"
              href="https://en.wikipedia.org/wiki/George_Lucas"
              className="dark:text-white inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
