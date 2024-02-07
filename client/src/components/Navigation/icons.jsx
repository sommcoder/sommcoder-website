// icons:
import { SiNpm } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { SiFiverr } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

// THESE ARE THE PAGE ICONS and THE GENERAL PROFILE LINKS
export const ICON_COMPONENTS = {
  fiverr: {
    component: (
      <SiFiverr
        style={{
          height: "7rem",
          width: "8rem",
          transform: "translateY(-13px)", // hack fix
        }}
      />
    ),
    link: "https://www.fiverr.com/sommcoder",
  },
  linkedin: {
    component: (
      <FaLinkedinIn
        style={{
          height: "4rem",
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
          height: "3.5rem",
          width: "3.75rem",
          // transform: "translateY(-2px)", // hack fix
        }}
      />
    ),
    link: "https://github.com/sommcoder",
  },
  youtube: {
    component: (
      <ImYoutube2
        data-link="youtube"
        style={{
          height: "5rem",
          width: "6rem",
          // transform: "translateY(-2px)", // hack fix
        }}
      />
    ),
    link: "https://github.com/sommcoder",
  },
  npm: {
    component: (
      <SiNpm
        data-link="npm"
        style={{
          height: "2.8rem",
          width: "3.75rem",
          // transform: "translateY(-2px)", // hack fix
        }}
      />
    ),
    link: "https://github.com/sommcoder",
  },
};
