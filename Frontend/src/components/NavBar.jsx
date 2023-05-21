function NavBar() {
  return (
    <>
      <nav className="dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-center mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden dark:text-white dark:hover:bg-black"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="uppercase font-medium flex flex-col md:p-2 mt-4 md:flex-row md:space-x-24 md:mt-0">
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
