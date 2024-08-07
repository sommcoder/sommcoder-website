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
    description: [
      `Need to take your restaurant, bar or wine agency into the e-commerce space?`,
      <br />,
      <br />,
      `You've got more important things to worry about than launching your Shopify store. 
      `,
      <br />,
      <br />,
      `Onboarding and staff training included!`,
    ],
    component: <LuRocket style={iconStyling} />,
    pricing: [
      {
        id: "seoLaunch",
        service: "SEO Launch",
        price: "200",
        description: [
          "SEO tooling, social media integration and reporting infrastructure gift wrapped for you to impress your shareholders and hit the ground running!",
        ],
      },
      {
        id: "themeSite",
        service: "Shopify Theme Website",
        price: "1500",
        description:
          "A free or marketplace theme site build for your brand. Includes product and collection setup, DNS configuration, ",
      },
      {
        id: "customSite",
        service: "Shopify Custom Website",
        price: "3000",
        description: [
          "Break out of the cookie-cutter experience of templating/themes with a unique user experience for your customers. Built with Shopify's proprietary Hydrogen React.js framework that's seamlessly integrated with your merchant admin.",
        ],
      },
    ],
  },
  {
    title: "Streamline",
    subtitle: "More time for what's important!",
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
          "Spreadsheet templates, plugins, integrations, third party apps, whatever the solution may call for. I'm a developer with over 6 years of operations management experience who can help you achieve your business goals!",
        ],
      },
    ],
  },
  {
    title: "Maintain",
    subtitle: "Steady as she goes!",
    description: [
      `It's one thing to start, it's whole different beast to maintain your new e-commerce store.`,
      <br />,
      <br />,
      `Centralize your knowledge base by having reliable Shopify expertise available on a monthly retainer.`,
    ],
    component: <LuWrench style={iconStyling} />,
    pricing: [
      {
        id: "ecommMgmt",
        service: ["E-commerce", <br />, " Management"],
        price: "475/month",
        description: [
          "Customer service, inventory and product management, notification and promotions for up to 20 hours/month.",
          <br />,
          <br />,
          "All the heavy lifting without needing dedicated, specialized staff.",
        ],
      },
      {
        id: "seoReporting",
        service: ["SEO", <br />, " Reporting"],
        price: "175/month",
        description: [
          "Good analytics = great decisions!",
          <br />,
          <br />,
          "Accurate, normalized analytics and business intelligence provided in a consistent format for managers and shareholders to make the best possible decisions.",
        ],
      },
    ],
  },
  {
    title: "Grow",
    subtitle: "Now let's build your business!",
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
        price: "500",
        description: [
          "Shopify App Store applications can slow down your website and the recurring costs can stack overtime. Allow me to build you lightweight clones of existing solutions complete with what you need with less bulk than store apps.",
        ],
      },
      {
        id: "seoDevelopment",
        service: "SEO Development",
        price: "475/month",
        description: [
          "Increase web traffic, drive conversions and grow your top line revenue. I'm available to you for up to 20 hours per month and will provide regular check-ins and comprehensive data analysis to ensure your brand is on track!",
          <br />,
          <br />,
          "Prerequisite services: SEO Launch and SEO Reporting",
        ],
      },
    ],
  },
  {
    title: "Contract",
    subtitle: "Ad Hoc Developer Services",
    description: [
      `You get a resourceful, self-taught developer with intermediate-level knowledge of JavaScript, React, HTML and CSS.`,
      <br />,
      <br />,
      `I have over 20 years of applied business experience and can thrive on a team or work independently in order to produce your deliverables on time!`,
    ],
    component: <LiaFileContractSolid style={iconStyling} />,
    pricing: [
      {
        id: "freelancing",
        service: ["General Freelancing"],
        price: "55/hour",
        description: [
          "I'm comfortable building MERN (MongoDB, Express, React, Node) and PERN (PostgreSQL et al above) tech stack with SPA/MPA, SSR and JAM stack website architecture.",
          <br />,
          <br />,
          "I also have working experience with Google Cloud Platform and Python but I can learn any technologies needed to fill in the gaps on a per project basis!",
          <br />,
          <br />,
          "Need a hand on a project without the need for a full-time employee? Let's chat!",
        ],
      },
      {
        id: "pocApp",
        service: ["Proof of Concept App"],
        price: "895",
        description: [
          "Launch your SaaS business idea! Want an asset you can take to prospective investors? I can build a Proof-of-Concept application based on the Minimal Viable Product (MVP) of your idea and we can build from there as your business grows!",
          <br />,
          <br />,
          "* Ongoing hosting and maintenance is additional depending on server usage and your needs.",
        ],
      },
    ],
  },
];
