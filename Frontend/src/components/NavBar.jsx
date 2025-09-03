import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-center mx-auto p-4">
          <div className="w-full md:block md:w-auto">
            <ul className="justify-center items-center uppercase font-medium flex flex-col md:p-2 md:flex-row md:space-x-24 md:mt-0">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 md:dark:text-gray-400 md:hover:text-white
                    hover:border-b-2 hover:border-white transition
                    ${isActive ? "border-b-2 border-white text-white" : ""}`
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/characters"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 md:dark:text-gray-400 md:hover:text-white
                        hover:border-b-2 hover:border-white transition
                        ${isActive ? "border-b-2 border-white text-white" : ""}`
                  }
                >
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/author"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 md:dark:text-gray-400 md:hover:text-white
                    hover:border-b-2 hover:border-white transition
                    ${isActive ? "border-b-2 border-white text-white" : ""}`
                  }
                >
                  Author
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
