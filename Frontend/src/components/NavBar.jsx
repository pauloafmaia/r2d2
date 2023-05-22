import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-center mx-auto p-4">
          <div className="w-full md:block md:w-auto">
            <ul className="justify-center items-center uppercase font-medium flex flex-col md:p-2 md:flex-row md:space-x-24 md:mt-0">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 md:dark:text-gray-400 md:hover:text-white"
                  to={"/"}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 md:dark:text-gray-400 md:hover:text-white"
                  to={"/author"}
                >
                  Author
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 md:dark:text-gray-400 md:hover:text-white"
                  to={"/create"}
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 md:dark:text-gray-400 md:hover:text-white"
                  to={"/edit"}
                >
                  Edit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
