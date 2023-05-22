import { Icon } from "@iconify/react";

function Footer() {
  return (
    <>
      <footer className="bg-black shadow m-4 dark:bg-black">
        <div className="w-full flex items-center justify-center mb-5">
          <ul className="text-white dark:text-white flex flex-row space-x-4">
            <li>
              <a target="blank" href="https://www.facebook.com/StarWars/">
                <Icon icon="mdi:facebook" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.instagram.com/starwars/">
                <Icon icon="mdi:instagram" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.youtube.com/user/starwars">
                <Icon icon="mdi:youtube" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://twitter.com/starwars">
                <Icon icon="mdi:twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center">
          <span className="text-sm text-white dark:text-white">
            Star Wars API | R2D2 ©
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
