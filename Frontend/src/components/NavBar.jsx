function NavBar() {
  return (
    <>
      <nav className="dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-center mx-auto p-4">
          <div className="w-full md:block md:w-auto">
            <ul className="justify-center items-center uppercase font-medium flex flex-col md:p-2 md:flex-row md:space-x-24 md:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0 dark:text-gray-400 md:hover:text-white"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="/author"
                  className="block py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0 dark:text-gray-400 md:hover:text-white"
                >
                  Author
                </a>
              </li>
              <li>
                <a
                  href="/create"
                  className="block py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0 dark:text-gray-400 md:hover:text-white"
                >
                  Create
                </a>
              </li>
              <li>
                <a
                  href="/edit"
                  className="block py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0 dark:text-gray-400 md:hover:text-white"
                >
                  Edit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
