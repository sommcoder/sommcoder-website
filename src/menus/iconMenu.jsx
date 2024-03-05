// icons:
import { FaNpm } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// THESE ARE THE PAGE ICONS and THE GENERAL PROFILE LINKS
export const ICON_COMPONENTS = {
  fiverr: {
    component: (
      <SiFiverr
        style={{
          height: "6rem",
          width: "7rem",
          transform: "translateY(-10px)", // hack fix
          viewBox: "0 0 100 100",
          overflow: "hidden",
        }}
      />
    ),
    link: "https://www.fiverr.com/sommcoder",
  },
  linkedin: {
    component: (
      <FaLinkedin
        style={{
          height: "3rem",
          width: "3rem",
        }}
      />
    ),
    link: "https://www.linkedin.com/in/brian-davies-178b0b48/",
  },
  github: {
    component: (
      <AiFillGithub
        data-link="github"
        style={{
          height: "3rem",
          width: "3.75rem",
          // transform: "translateY(-2px)", // hack fix
        }}
      />
    ),
    link: "https://github.com/sommcoder",
  },
  youtube: {
    component: (
      <FaYoutube
        data-link="youtube"
        style={{
          height: "3rem",
          width: "4rem",
          // transform: "translateY(-2px)", // hack fix
        }}
      />
    ),
    link: "https://www.youtube.com/channel/UC8kgbOV87WVCtgrHqLk2cGg",
  },
  npm: {
    component: (
      <FaNpm
        data-link="npm"
        style={{
          height: "3.5rem",
          width: "3.75rem",
          // transform: "translateY(-2px)", // hack fix
        }}
      />
    ),
    link: "https://www.npmjs.com/~somm-coder",
  },
};
