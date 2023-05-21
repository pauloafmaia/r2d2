import { Icon } from "@iconify/react";

function Footer() {
  return (
    <>
      <div className="">
        <ul className="flex flex-row justify-center pb-2 md:mb-5 md:space-x-5 md:flex md:flex-row md:justify-center md:pt-10">
          <li>
            <a href="https://www.facebook.com/StarWars/">
              <Icon
                className="text-gray-400 hover:text-white w-[30px] h-[30px]"
                icon="mdi:facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/starwars/">
              <Icon
                className="text-gray-400 hover:text-white w-[30px] h-[30px]"
                icon="mdi:instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/starwars">
              <Icon
                className="text-gray-400 hover:text-white w-[30px] h-[30px]"
                icon="mdi:youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/starwars">
              <Icon
                className="text-gray-400 hover:text-white w-[30px] h-[30px]"
                icon="mdi:twitter"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full text-center text-white">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

export default Footer;
