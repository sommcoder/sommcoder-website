import wordle from "/wordle.svg";
import markey from "/mar-key.svg";
import sommcoder from "/Sommcoder Website Thumbnail.svg";
import jssx from "/jssx.png";

// we should use Firebase's Firestore Document DB to store and fetch this data
// the long description will get passed to the Page only
// TODO: Need to finish Mar-Key
// TODO: Need to get updated thumbnails in the correct resolution/aspect ratio = 9:16 : 1920px x 1080px
// these are the PORTFOLIO LINKS TO PROJECT PAGES
export const carouselItemsArr = [
  {
    id: "wordle",
    thumbnail: wordle,
    links: {
      github: "https://sommcoder.github.io/Wordle-Clone-App/",
      youtube: "https://youtube.com/embed/1bBmUiLxEKI?feature=share",
      npm: null,
    },
    title: "Wordle Clone",
    short: "A Simple Clone of The famous New York Times App",
    long: "Brian's first app! A stripped down clone of the popular NYT game Wordle built using vanilla JS and JQuery",
  },
  {
    id: "markey",
    thumbnail: markey,
    links: {
      github: "https://github.com/sommcoder/markey",
      youtube: null,
      npm: null,
    },
    title: "Mar-Key",
    short: "A Display Tester for Theatre Marquees",
    long: "Allows users to determine how many letter blocks to collect for an analog marquee display with input validation based on the current display. Marquee keeps track of block counts, dynamically validates messages as they're entered, cross references the former display to the desired new display so that users can determine which blocks they need to retrieve and how many of each depending on which of the 3 marquees have received input",
  },
  {
    id: "jssx",
    thumbnail: jssx,
    links: {
      github: "https://github.com/sommcoder/jsx-to-suitescript-transpiler",
      youtube: "https://youtube.com/embed/mo3ZGLh8NVs?feature=share",
      npm: "https://www.npmjs.com/package/jsx-to-ss",
    },
    title: "JSX-to-SS Transpiler",
    short: "A Library for Developing NetSuite UI Using JSX",
    long: "Brings component-based UI development to the Netsuite ERP platform by allowing developers to write and maintain Suitelet source code using JSX syntax. Affectionately named 'JSSX', it improves DX by reducing the verbosity of having to type successive API calls to interact with Netsuite and allowing the user to develop Suitelet UIs using simple JSX syntax. Component relationships are inferred by their hierarchy and so JSSX avoids the need to imperatively 'link' child components to their parents, this is all transpiled for you. Additionally, ids are autogenerated with a 'cust_page' prefix and follows a consistent naming convention across the UI that's transpiled",
  },
  {
    id: "sommcoder",
    thumbnail: sommcoder,
    links: {
      github: "https://github.com/sommcoder/sommcoder-website",
      youtube: null,
      npm: null,
    },
    title: "SommCoder Website",
    short: "A React Website Hosted on Google's Firebase",
    long: "The UI is built with React & styled-components and hosted on Google's Firebase",
  },
];
