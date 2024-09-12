export const stack = [
  { name: "nextJS", src: "/icons/nextjs.svg" },
  { name: "typescript", src: "/icons/typescript.png" },
  { name: "nodeJS", src: "/icons/nodejs.svg" },
];

export const projects = [
  {
    name: "Car Viewer App",
    img: "/images/carapp1.png",
    src: "https://www.yamotors.ltd",
    slug: "carviewer",
    description: "Experience seamless car browsing with our Car Viewing App.",
    goal:
      "Through a mutual friend, I was introduced to a client who needed a website to showcase their car inventory. I worked closely with them to design and develop a site that not only displays the cars but also provides detailed information, including service history, technical specifications, and other essential details. The project allowed me to combine my technical skills with a user-friendly layout to create an intuitive platform for customers to browse and learn more about the cars on offer.",
    icons: {
      1: "/icons/next.svg",
      2: "/icons/tailwind.svg",
      3: "/icons/typescript.png",
      4: "/icons/sanity.png",
      5: "/icons/mongodb.svg",
    },
    images: {
      1: {
        src: "/carapp/react/fetch-code.png",
        description:
          "This image displays the React code handling form submission using the useState hook to manage form fields and an asynchronous fetch function to send data to the server. The form captures user input such as first name, last name, phone, email, and message, and sends it via a POST request. The form also implements error handling and a loading state to manage submission status.",
      },
      2: {
        src: "/carapp/mongo/mongodb-schema-code.png",
        description:
          "This image shows the Mongoose schema definition for storing contact form data in a MongoDB database. The schema includes fields for first name, last name, email, phone, message, and date. Each field is typed, and the 'date' field is automatically set to the current date by default. This schema is used to define and model the structure of contact form entries in the database.",
      },
      3: {
        src: "/carapp/mongo/mongodb-code.png",
        description:
          "This image displays the server-side code for handling contact form submissions using MongoDB and Resend API in a Next.js application. The code saves user data to the database using the Contact model and sends an automated response email via the Resend API. It also includes a safeguard to prevent multiple form submissions by setting a flag, ensuring that each form is only processed once. If an error occurs during submission, an error response is returned.",
      },
      4: {
        src: "/carapp/react/react-email-code.png",
        description:
          "This image shows the React component used to generate a personalized HTML email template using the Resend API. The component dynamically inserts the user's first and last name into the email body and includes a thank-you message, informing the recipient that their message has been received and they can expect a reply within 24 hours. The email is styled with Tailwind CSS, ensuring a clean and responsive design.",
      },
      5: {
        src: "/carapp/mongodb-collection.png",
        description:
          "This image shows the MongoDB collection where contact form submissions are stored. Each document in the collection contains fields such as first name, last name, email, phone, message, and the date the form was submitted. The data is saved using the defined Mongoose schema, ensuring that all user submissions are properly structured and easily retrievable for further processing or review.",
      },
      6: {
        src: "/carapp/sanity/car-sanity-schema.png",
        description:
          "This code defines a schema for a 'Car' document used to store car listings in a database. The schema includes fields for car attributes such as model, make, type, year, transmission, price, mileage, engine size, number of previous owners, doors, ULEZ rating, fuel type, and images. The make, year, and other fields provide options lists for predefined values. The schema also generates a slug for each car entry based on the make, model, year, and mileage, which can be used as a unique identifier for each car listing in the app. Additionally, it uses a preview configuration to display a preview title of the car in the format 'Make Model Year'.",
      },
      7: {
        src: "/carapp/sanity/history-sanity-schema.png",
        description:
          "This schema defines a 'History' document to track the history of a car, such as past sales or service events. The schema includes a reference to the associated car, using the car field to link to a specific car document. It also includes fields for the date of the event, the dealership involved, a descriptive text field for additional information, and the mileage at the time of the event. The date field is formatted as 'DD-MM-YYYY' for consistency. This schema helps store and retrieve historical data related to each car.",
      },
      8: {
        src: "/carapp/sanity/car-query.png",
        description:
          "This image displays TypeScript type definitions and a data fetching function used to retrieve car information from a content management system (CMS). The Car type defines the structure of each car object, including properties such as model, year, transmission, price, mileage, and associated image URLs. The getData function executes a GROQ query to fetch the first five car documents, retrieving specific fields like make, model, year, and images. The function formats the data for easy rendering in the application, allowing access to both a primary image (imageUrl) and an array of images (imageArr).",
      },
      9: {
        src: "/carapp/sanity/dynamic-route.png",
        description:
          "This image shows the server-side code for handling dynamic routing in a Next.js application. The function retrieves car data by calling the getData function and uses the slug parameter from the URL to find a specific car entry. If the car with the corresponding slug is found, it renders the page; otherwise, it returns a loading component. This approach ensures that each car has a unique route based on its slug, allowing for dynamic content generation and efficient data handling in the application.",
      },
      10: {
        src: "/carapp/react-email.png",
        description:
          "This image displays the React component responsible for generating and sending personalized emails in the Car Viewer App. The component uses the Resend API to dynamically populate the email content with the recipient's first and last name. Styled using Tailwind CSS, the email includes a thank-you message confirming receipt of the user's message and provides details about the expected response time. The component demonstrates the integration of React, Resend API, and Tailwind to create responsive and customized email templates.",
      },
      11: {
        src: "/carapp/contact-component.png",
        description:
          "This image shows the React contact form component that captures user input such as first name, last name, email, phone number, and message. It uses useState to manage the form's state and handle input changes. Upon form submission, the component sends the data to a server via an async function and displays feedback to the user. The component is designed to ensure smooth form submission with proper validation and error handling, providing a seamless user experience.",
      },
      12: {
        src: "/carapp/sanity-studio.png",
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
      1: "",
      2: "",
      3: "",
    },
  },
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
        src: "",
        description: "",
      },
    },
    skills: {
      1: "",
      2: "",
      3: "",
    },
    plans: {
      1: "",
      2: "",
      3: "",
    },
  },
  {
    name: "Crypto Dashboard App",
    img: "/images/cryptoapp1.png",
    src: "https://crypto-dashboard-flax-five.vercel.app/dashboard",
    slug: "cryptoapp",
    description:
      "Stay on top of your crypto investments with our Crypto Dashboard.",
    goal: "",
    icons: {
      1: "/icons/next.svg",
      2: "/icons/tailwind.svg",
      3: "/icons/typescript.png",
      4: "/icons/three.svg",
      5: "/icons/web3js.png",
    },
    images: {
      1: {
        src: "",
        description: "",
      },
    },
    skills: {
      1: "",
      2: "",
      3: "",
    },
    plans: {
      1: "",
      2: "",
      3: "",
    },
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Hero", link: "#hero" },
  { name: "Projects", link: "#projects" },
];
