import { LuRocket } from "react-icons/lu";
import { LuCable } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { LiaFileContractSolid } from "react-icons/lia";

const iconStyling = { height: "2rem", width: "2rem" };

export const servicesArr = [
  {
    title: "Launch",
    subtitle: "Get off the ground!",
    icon: "",
    description: [
      `Need to take your restaurant, bar or wine agency into the e-commerce space?`,
      <br />,
      <br />,
      `You've got more important things to worry about than launching your Shopify store. 
      `,
    ],
    component: <LuRocket style={iconStyling} />,
  },
  {
    title: "Streamline",
    subtitle: "More time for what's important!",
    icon: "",
    description: [
      `Got bottlenecks, redundant steps or excessive manual data entry?`,
      <br />,
      <br />,
      `I can help you with app or custom API integrations and even simple csv templating to make all of your different systems 'talk' to each other.`,
    ],
    component: <LuCable style={iconStyling} />,
  },
  {
    title: "Maintain",
    subtitle: "Steady as she goes!",
    icon: "",
    description: [
      `It's one thing to start, it's whole different beast to maintain your new e-commerce store.`,
      <br />,
      <br />,
      `Centralize your knowledge base by having reliable Shopify expertise available on retainer for up to 12 hours of service per month.`,
    ],
    component: <LuWrench style={iconStyling} />,
  },
  {
    title: "Grow",
    subtitle: "Now let's build your business!",
    icon: "",
    description: [
      `Need someone to drive e-commerce sales when you don't have the means to employ your own e-commerce staff? `,
      <br />,
      <br />,
      `I can provide expertise and drive e-commerce revenue without needing a full time team.`,
    ],
    component: <PiPlant style={iconStyling} />,
  },
  {
    title: "Contract",
    subtitle: "Ad Hoc Developer Services",
    icon: "",
    description: [
      `You get a resourceful, self-taught developer with intermediate-level knowledge of JavaScript, React, HTML and CSS.`,
      <br />,
      <br />,
      `I have over 20 years of applied business experience and can work with a wide range of people and personalities in order to produce your deliverables in a timely fashion!`,
    ],
    component: <LiaFileContractSolid style={iconStyling} />,
  },
];
