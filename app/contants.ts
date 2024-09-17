type StackItem = {
  name: string;
  src: string;
};

type ProjectImage = {
  title: string;
  src: string;
  description: string;
};

type ProjectIcons = {
  [key: number]: string;
};

type ProjectSkills = {
  [key: number]: string;
};

type ProjectPlans = {
  [key: number]: string;
};

type Projects = {
  name: string;
  img: string;
  src: string;
  slug: string;
  description: string;
  goal: string;
  icons: ProjectIcons;
  images: { [key: number]: ProjectImage };
  skills: ProjectSkills;
  plans: ProjectPlans;
};

type NavItems = {
  name: string;
  link: string;
};

type Certifications = {
  name: string;
  company: string;
  src: string;
  description: string;
  completed: boolean;
};

export const projects: Projects[] = [
  // Car Viewer App
  {
    name: "Car Viewer App",
    img: "/images/carapp1.png",
    src: "https://www.yamotors.ltd",
    slug: "carviewer",
    description: "Experience seamless car browsing with our Car Viewing App.",
    goal: "Through a mutual friend, I was introduced to a client who needed a website to showcase their car inventory. I worked closely with them to design and develop a site that not only displays the cars but also provides detailed information, including service history, technical specifications, and other essential details. The project allowed me to combine my technical skills with a user-friendly layout to create an intuitive platform for customers to browse and learn more about the cars on offer.",
    icons: {
      1: "/icons/next.svg",
      2: "/icons/tailwind.svg",
      3: "/icons/typescript.png",
      4: "/icons/sanity.png",
      5: "/icons/mongodb.svg",
    },
    images: {
      1: {
        title: "React Form Submission Handling",
        src: "/projects/carapp/code/fetch-code.png",
        description:
          "This image displays the React code handling form submission using the useState hook to manage form fields and an asynchronous fetch function to send data to the server. The form captures user input such as first name, last name, phone, email, and message, and sends it via a POST request. The form also implements error handling and a loading state to manage submission status.",
      },
      2: {
        title: "Mongoose Schema for Contact Form",
        src: "/projects/carapp/code/mongodb-schema-code.png",
        description:
          "This image shows the Mongoose schema definition for storing contact form data in a MongoDB database. The schema includes fields for first name, last name, email, phone, message, and date. Each field is typed, and the 'date' field is automatically set to the current date by default. This schema is used to define and model the structure of contact form entries in the database.",
      },
      3: {
        title: "Server-Side Contact Form Handling",
        src: "/projects/carapp/code/mongodb-code.png",
        description:
          "This image displays the server-side code for handling contact form submissions using MongoDB and Resend API in a Next.js application. The code saves user data to the database using the Contact model and sends an automated response email via the Resend API. It also includes a safeguard to prevent multiple form submissions by setting a flag, ensuring that each form is only processed once. If an error occurs during submission, an error response is returned.",
      },
      4: {
        title: "React Email Template Generation",
        src: "/projects/carapp/code/react-email-code.png",
        description:
          "This image shows the React component used to generate a personalized HTML email template using the Resend API. The component dynamically inserts the user's first and last name into the email body and includes a thank-you message, informing the recipient that their message has been received and they can expect a reply within 24 hours. The email is styled with Tailwind CSS, ensuring a clean and responsive design.",
      },
      5: {
        title: "Car Document Schema",
        src: "/projects/carapp/code/car-sanity-schema-code.png",
        description:
          "This code defines a schema for a 'Car' document used to store car listings in a database. The schema includes fields for car attributes such as model, make, type, year, transmission, price, mileage, engine size, number of previous owners, doors, ULEZ rating, fuel type, and images. The make, year, and other fields provide options lists for predefined values. The schema also generates a slug for each car entry based on the make, model, year, and mileage, which can be used as a unique identifier for each car listing in the app. Additionally, it uses a preview configuration to display a preview title of the car in the format 'Make Model Year'.",
      },
      6: {
        title: "Car History Document Schema",
        src: "/projects/carapp/code/history-sanity-schema-code.png",
        description:
          "This schema defines a 'History' document to track the history of a car, such as past sales or service events. The schema includes a reference to the associated car, using the car field to link to a specific car document. It also includes fields for the date of the event, the dealership involved, a descriptive text field for additional information, and the mileage at the time of the event. The date field is formatted as 'DD-MM-YYYY' for consistency. This schema helps store and retrieve historical data related to each car.",
      },
      7: {
        title: "TypeScript Car Data Fetching",
        src: "/projects/carapp/code/car-query-code.png",
        description:
          "This image displays TypeScript type definitions and a data fetching function used to retrieve car information from a content management system (CMS). The Car type defines the structure of each car object, including properties such as model, year, transmission, price, mileage, and associated image URLs. The getData function executes a GROQ query to fetch the first five car documents, retrieving specific fields like make, model, year, and images. The function formats the data for easy rendering in the application, allowing access to both a primary image (imageUrl) and an array of images (imageArr).",
      },
      8: {
        title: "Dynamic Routing in Next.js",
        src: "/projects/carapp/code/dynamic-route-code.png",
        description:
          "This image shows the server-side code for handling dynamic routing in a Next.js application. The function retrieves car data by calling the getData function and uses the slug parameter from the URL to find a specific car entry. If the car with the corresponding slug is found, it renders the page; otherwise, it returns a loading component. This approach ensures that each car has a unique route based on its slug, allowing for dynamic content generation and efficient data handling in the application.",
      },
      9: {
        title: "MongoDB Contact Form Collection",
        src: "/projects/carapp/mongodb-collection.png",
        description:
          "This image shows the MongoDB collection where contact form submissions are stored. Each document in the collection contains fields such as first name, last name, email, phone, message, and the date the form was submitted. The data is saved using the defined Mongoose schema, ensuring that all user submissions are properly structured and easily retrievable for further processing or review.",
      },
      10: {
        title: "React Email Component for Car Viewer App",
        src: "/projects/carapp/react-email.png",
        description:
          "This image displays the React component responsible for generating and sending personalized emails in the Car Viewer App. The component uses the Resend API to dynamically populate the email content with the recipient's first and last name. Styled using Tailwind CSS, the email includes a thank-you message confirming receipt of the user's message and provides details about the expected response time. The component demonstrates the integration of React, Resend API, and Tailwind to create responsive and customized email templates.",
      },
      11: {
        title: "React Contact Form Component",
        src: "/projects/carapp/contact-component.png",
        description:
          "This image shows the React contact form component that captures user input such as first name, last name, email, phone number, and message. It uses useState to manage the form's state and handle input changes. Upon form submission, the component sends the data to a server via an async function and displays feedback to the user. The component is designed to ensure smooth form submission with proper validation and error handling, providing a seamless user experience.",
      },
      12: {
        title: "Sanity Studio Interface",
        src: "/projects/carapp/sanity-studio.png",
        description:
          "This image displays the Sanity Studio interface used for managing and editing content in the Car Viewer App. Sanity Studio provides a user-friendly CMS where car listings can be created, updated, and organized. The interface allows you to input various details about each car, such as make, model, year, price, and more. It also supports uploading images and generating slugs for dynamic routing. This setup makes it easy to manage car data in a structured and visually intuitive environment.",
      },
    },
    skills: {
      "1": "React with TypeScript – Developing and managing components.",
      "2": "State management – Using useState for form inputs and submission control.",
      "3": "Form handling – Submitting and validating forms using async/await.",
      "4": "Next.js – Implementing server-side form submission handling and dynamic routing.",
      "5": "Data fetching – Using fetch API to send and retrieve data.",
      "6": "MongoDB with Mongoose – Designing and implementing database schemas.",
      "7": "Database management – Managing collections and data in MongoDB.",
      "8": "Email automation – Sending automated responses using Resend API.",
      "9": "Error handling – Preventing multiple submissions and managing submission errors.",
      "10": "React Hooks – Utilizing useRef and useEffect for event handling.",
      "11": "TypeScript types – Defining and working with complex data structures like cars.",
      "12": "GROQ queries – Fetching data from a CMS using GROQ in Next.js.",
      "13": "Dynamic routing – Handling dynamic routes based on URL parameters in Next.js.",
      "14": "Data processing – Using find to locate and filter data based on URL parameters.",
      "15": "Server-side logic – Processing and rendering data server-side in Next.js.",
    },
    plans: {
      "1": "Improve validation for input fields in the contact form.",
      "2": "Add more customization options for dynamic and personalized emails.",
      "3": "Implement pagination for better navigation through large car listings.",
      "4": "Introduce search and filtering options for easier car browsing.",
      "5": "Enable users to compare multiple cars side-by-side.",
      "6": "Add more management features to the Sanity Studio admin panel.",
      "7": "Integrate APIs such as car valuation or review services.",
      "8": "Use lazy loading and image optimization to enhance performance.",
      "9": "Use WebSockets or similar technology for real-time car listing updates.",
      "10": "Implement user login to enable features like saving favorites or searches.",
    },
  },
  // Github API Tracker
  {
    name: "Github Api Tracker",
    img: "/images/githubapp.png",
    src: "",
    slug: "githubapp",
    description:
      "Connect your Github and Compete with friends on contributions.",
    goal: "",
    icons: {
      1: "/icons/next.svg",
      2: "/icons/javascript.svg",
      3: "/icons/mongodb.svg",
      4: "/icons/nodejs.svg",
      5: "/icons/express.svg",
    },
    images: {
      1: {
        title: "",
        src: "",
        description: "",
      },
    },
    skills: {},
    plans: {
      1: "Real-Time Updates for Leaderboard: Implement real-time updates on the leaderboard using WebSockets.",
      2: "Contribution Trends: Visualize contribution trends over time by fetching data for a user's contributions over the last year and plotting it as a graph using Chart.js or D3.js.",
      3: "Compare GitHub Users: Add a comparison feature where users can select two or more GitHub users from the leaderboard and compare their stats.",
      4: "Search and Filter: Implement search and filter functionality for the leaderboard, allowing users to search for specific profiles or filter based on various criteria.",
      5: "Badge System: Gamify the leaderboard by adding badges for users based on their achievements, such as top contributor, repository star, or frequent commits.",
      6: "GitHub API Rate Limiting Alerts: Add a feature to track the remaining GitHub API rate limits and alert the user when they're approaching the limit.",
      7: "User Profile Caching: Implement caching to reduce redundant API calls by fetching data from local storage or server-side cache if it hasn't expired.",
      8: "User Statistics Breakdown: Provide a detailed breakdown of user statistics, such as top languages used, most starred repositories, or total lines of code written.",
      9: "Export Data: Allow users to export their leaderboard or profile data as CSV or JSON files for further analysis.",
      10: "Dark Mode: Add a toggle for dark mode to enhance UI and allow user customization.",
    },
  },
  // Crypto Dashboard app
  {
    name: "Crypto Dashboard App",
    img: "/images/cryptoapp5.png",
    src: "https://crypto-dashboard-flax-five.vercel.app/dashboard",
    slug: "cryptoapp",
    description:
      "Stay on top of your crypto investments with our Crypto Dashboard.",
    goal: "",
    icons: {
      1: "/icons/next.svg",
      2: "/icons/clerk.svg",
      3: "/icons/typescript.png",
      4: "/icons/three.svg",
      5: "/icons/web3js.png",
    },
    images: {
      "1": {
        title: "Authentication Middleware",
        src: "/projects/cryptoapp/code/auth-middleware-code.png",
        description:
          "This code defines an authentication middleware that manages access to certain routes. Public routes like `/`, `/signup`, and `/login` are accessible without authentication, while other routes likely require the user to be authenticated.",
      },
      "2": {
        title: "BNB to Fiat Conversion",
        src: "/projects/cryptoapp/code/conversion-code.png",
        description:
          "This code defines an asynchronous function `binanceToFiat`, which converts a given amount of BNB to a specified fiat currency using an exchange rate. It takes `amountInBnb` and `convertTo` (a supported currency) as parameters, fetches the conversion rate, and calculates the equivalent fiat amount.",
      },
      "3": {
        title: "Fetch Balance Using Web3",
        src: "/projects/cryptoapp/code/fetch-balance-code.png",
        description:
          "This code fetches the user's balance from MetaMask using Web3. It retrieves the balance in Wei and converts it to Ether. Additionally, it uses the BNB to fiat conversion function to display the balance in USD as well. Error handling is implemented in case MetaMask is not found or the balance retrieval fails.",
      },
      "4": {
        title: "Fetch Total Transactions",
        src: "/projects/cryptoapp/code/fetch-total-transactions-code.png",
        description:
          "This function fetches the total number of transactions for the user's Ethereum account using Web3. It interacts with MetaMask and retrieves the total transaction count for the user's wallet, handling errors if MetaMask is not found or the fetching process fails.",
      },
      "5": {
        title: "Lightweight Chart Creation",
        src: "/projects/cryptoapp/code/lightweight-charts-code.png",
        description:
          "This code defines the creation of a lightweight chart using the `createChart` function from TradingView. It sets the layout options, grid lines, and visibility of the price scale and time scale for the chart. The chart is rendered inside a container with a responsive width and height.",
      },
      "6": {
        title: "3D Globe with Three.js",
        src: "/projects/cryptoapp/code/three-globe-code.png",
        description:
          "This code creates a 3D globe using Three.js. It loads textures for the globe's surface and specular highlights. The globe is displayed within a Canvas, and the OrbitControls are used to manage user interaction, such as rotating the globe. The ambient light adds illumination to the scene.",
      },
    },
    skills: {
      1: "",
      2: "",
      3: "",
    },
    plans: {
      1: "Current Market Data Integration: Fetch live cryptocurrency prices using an API and display them on the dashboard, with the option to set price alerts.",
      2: "User’s Recent Transactions: Display a list of recent transactions with details like hash, timestamp, gas fees, and status. Add transaction filtering based on criteria.",
      3: "Portfolio Overview: Fetch and display all tokens in the user's wallet and visualize portfolio performance with historical charts.",
      4: "Watchlist Feature: Allow users to create a watchlist of cryptocurrencies or tokens and track metrics like price, market cap, etc.",
      5: "Staking and Earning Features: Show staking options for tokens held by the user and display available yield farming opportunities.",
      6: "Gas Fee Estimation: Display real-time gas prices (low, average, high) and offer a gas fee estimator for optimizing transaction costs.",
      7: "NFT Integration: Display NFTs held by the user and allow them to track the value of NFTs by integrating with platforms like OpenSea.",
      8: "Analytics and Insights: Provide transaction analytics and insights, and integrate a risk assessment tool to flag suspicious transactions.",
    },
  },
  // Portfolio
  // {
  //   name: "Portfolio App",
  //   img: "",
  //   src: "/images/portfolio.png",
  //   slug: "portfolio",
  //   description:
  //     "Beautifully designed portfolio displaying my skills.",
  //   goal: "",
  //   icons: {
  //     1: "/icons/next.svg",
  //     2: "/icons/typescript.png",
  //     3: "/icons/",
  //     4: "/icons/",
  //     5: "/icons/",
  //   },
  //   images: {
  //     1: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     2: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     3: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     4: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     5: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     6: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     7: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     8: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     9: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     10: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     11: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //     12: {
  //       title: "",
  //       src: "",
  //       description: "",
  //     },
  //   },
  //   skills: {
  //     "1": "",
  //     "2": "",
  //     "3": "",
  //     "4": "",
  //     "5": "",
  //     "6": "",
  //     "7": "",
  //     "8": "",
  //     "9": "",
  //     "10": "",
  //     "11": "",
  //     "12": "",
  //     "13": "",
  //     "14": "",
  //     "15": "",
  //   },
  //   plans: {
  //     "1": "",
  //     "2": "",
  //     "3": "",
  //     "4": "",
  //     "5": "",
  //     "6": "",
  //     "7": "",
  //     "8": "",
  //     "9": "",
  //     "10": "",
  //   },
  // },
];

export const navItems: NavItems[] = [
  { name: "About", link: "#about" },
  { name: "Hero", link: "#hero" },
  { name: "Projects", link: "#projects" },
];

export const certifications: Certifications[] = [
  {
    name: "Front-End Engineer",
    company: "Codecademy",
    src: "/certifications/frontend-engineer.png",
    description: "Mastered front-end technologies: HTML, CSS, JavaScript, React; built responsive UIs, applied Git and UI/UX best practices.",
    completed: true,
  },
  {
    name: "Software Engineering Virtual Experience",
    company: "J.P. Morgan",
    src: "/certifications/software-engineering.png",
    description: "Set up dev environment, fixed repository issues, and used JPMorgan's Perspective to create live data visualization for traders.",
    completed: true,
  },
  {
    name: "AWS Cloud Practitioner",
    company: "AWS",
    src: "/icons/placeholder.svg",
    description: "Developing AWS cloud architecture skills: EC2, API Gateway, S3, Lambda.",
    completed: false,
  }
];
