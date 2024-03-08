import { LuRocket } from "react-icons/lu";
import { LuCable } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { LiaFileContractSolid } from "react-icons/lia";

const iconStyling = {
  height: "100%",
  width: "2rem",
  justifySelf: "right",
  marginRight: "2rem",
  paddingLeft: "1.5rem",
};

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
    pricing: [
      {
        id: "seoLaunch",
        service: "SEO Launch",
        price: "850",
        description: [
          "SEO tooling, social media integration and reporting infrastructure gift wrapped for you to impress your shareholders and hit the ground running!",
        ],
      },
      {
        id: "squarespace",
        service: "Squarespace Website",
        price: "1750",
        description: [
          "Not ready for e-commerce quite yet? Squarespace is a great starting point to launch your online brand presence.",
        ],
      },
      {
        id: "themeSite",
        service: "Shopify Theme Website",
        price: "2250",
        description:
          "A built-in or marketplace theme e-commerce site. First revision complete within 14 days.",
      },
      {
        id: "customSite",
        service: "Shopify Custom Website",
        price: "3500",
        description: [
          "Break out of the cookie-cutter experience of templating/themes with a unique user experience for your customers. Built with Shopify's proprietary Hydrogen JavaScript framework and integrated with your merchant admin.",
        ],
      },
    ],
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
    pricing: [
      {
        id: "appIntegration",
        service: ["Shopify App", <br />, " Integration"],
        price: "150/app",
        description:
          "Spend more time serving customers and generating revenue with less time app shopping and app set up",
      },
      {
        id: "automate",
        service: ["Workflow", <br />, " Automation"],
        price: "250/solve",
        description: [
          "Spreadsheet templates, plugins, integrations, third party apps, whatever the solution may call for. I'm a developer who",
        ],
      },
    ],
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
    pricing: [
      {
        id: "ecommMgmt",
        service: ["E-commerce", <br />, " Management"],
        price: "550/month",
        description: [
          "Customer service, inventory and product management, notification and promotions. All the heavy lifting without needing dedicated, specialized staff.",
        ],
      },
      {
        id: "ecommPlusMgmt",
        service: ["E-commerce+", <br />, " Management"],
        price: "850/month",
        description: [
          "Same service and care as my base e-commerce management service but with up to 20 hours available per month.",
        ],
      },
      {
        id: "seoReporting",
        service: ["SEO", <br />, " Reporting"],
        price: "350/month",
        description: [
          "Good analytics = great decisions!",
          <br />,
          <br />,
          "Accurate, normalized analytics and business intelligence provided in a consistent format for managers and shareholders to make the best possible decisions.",
          <br />,
          <br />,
          "Prerequisite service = SEO Launch",
        ],
      },
    ],
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
    pricing: [
      {
        id: "shopifyApp",
        service: ["Shopify Custom", <br />, " App"],
        price: "1500",
        description:
          "Solutions that fit your business and your needs. Lightweight clones of existing apps or develop completely custom solutions!",
      },
      {
        id: "seoDevelopment",
        service: "SEO Development",
        price: "750/month",
        description: [
          "Increase web traffic, drive conversions and grow your top line revenue.",
          <br />,
          <br />,
          "Prerequisite service: Seo Launch",
        ],
      },
    ],
  },
  {
    title: "Contract",
    subtitle: "Ad Hoc Developer Services",
    icon: "",
    description: [
      `You get a resourceful, self-taught developer with intermediate-level knowledge of JavaScript, React, HTML and CSS.`,
      <br />,
      <br />,
      `I have over 20 years of applied business experience and can work with a wide range of people and personalities in order to produce your deliverables on time!`,
    ],
    component: <LiaFileContractSolid style={iconStyling} />,
    pricing: [
      {
        id: "freelancing",
        service: ["General Freelancing"],
        price: "65/hour",
        description: [
          "I'm comfortable building MERN (MongoDB, Express, React, Node) and PERN (PostgreSQL et al above) tech stack with SPA/MPA, and SSR and JAM stack website architecture.",
          <br />,
          <br />,
          "I also have working experience with Google Cloud Platform, Python and TypeScript but I can learn any technologies needed to fill in the gaps on a per project basis!",
          <br />,
          <br />,
          "Need a hand on a project without the need for a full-time employee? Let's chat!",
        ],
      },
      {
        id: "pocApp",
        service: ["Proof of Concept App"],
        price: "4000",
        description: [
          "Launch your SaaS business idea! Want an asset you can take to prospective investors? I can build a Proof-of-Concept application based on the Minimal Viable Product (MVP) of your idea and we can build from there as your business grows!",
        ],
      },
    ],
  },
];
