/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pritam kumar",
  title: "Hi all, I'm Pritam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angularjs / Reactjs / Nodejs / Dot Net Core /Ionic Angular/ React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TmmHAIYpFBvtyuLDOUy1ERmutTpTkIyN/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pritamdotnet",
  linkedin: "https://www.linkedin.com/in/pritam-kumar-dev/",
  gmail: "pritam18@gmail.com",
  gitlab: "https://github.com/pritamdotnet",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@pritam18jan",
  stackoverflow: "https://stackoverflow.com/users/21228145/pritam",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developed a responsive, multi-language web platform using Angular, React , Dot Net Core and Node.js "
    ),
    emoji("⚡ Led database architecture with MSSQL and API integration for scalability"),
    emoji(
      "⚡ Built offline-first APK with local storage and sync to central database"
    ),
    emoji(
      "⚡ Implemented dual login for Admin and Parent roles; Parent side done entirely by me"
    ),
    emoji(
      "⚡ Focused on performance and secure data handling"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "DotNetCore",
      fontAwesomeClassname: "fas fa-cogs"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Annamalai University  , Chennai",
      logo: require("./assets/images/Annamalai_University_logo.jpeg"), // Update the logo path as needed
      subHeader: "Bachelor of Engineering in Mechanical Engineering (ME)",
      // duration: "2017 - 2021",
      desc: "Graduated with a strong foundation in Mechanical Engineering , achieving 74%.",
      descBullets: [
        "Developed a strong foundation in mechanical systems, thermodynamics, and material science.",
        "Gained hands-on experience with CAD software, manufacturing processes, and machine design.",
        "Participated in workshops and projects related to automation, fluid mechanics, and HVAC systems."
      ]
    },
    {
      schoolName: "Purnia College ,  Purnia",
      logo: require("./assets/images/school.jpeg"), // Update the logo path as needed
      subHeader: "Maths",
      // duration: "2016 - 2017",
      desc: "Ranked in the top 10% of the program, achieving 62.2% in the 12th grade.",
      descBullets: [
        "Excelled in core subjects like mathematics, building a strong analytical foundation.",
        "Participated in science fairs and competitive exams, enhancing problem-solving skills."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Database",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: " Full Stack Developer & Mobile App Developer",
      company: "Durvah IT Consulting Pvt Ltd",
      companylogo: require("./assets/images/DurvahLogo.jpg"),
      date: "October 2022 – Present",
      desc: "Motivated Full Stack Developer with  three years of experience, specializing in Angular, React, Node.js, Express.js, Dot Net Core and Ionic Angular. Adept at building scalable web and mobile applications with expertise in debugging, server handling, and delivering high-quality products. Passionate about contributing to organizational success while staying updated with the latest technologies",
      descBullets: [
        "Debugging, reuse, source code, Documentation management strategies and release management.",
        "Building relationships with clients, technical teams and external contractors.",
        "Handling the server and delivering the bug free products."

      ]
    },
    {
      role: "Traninee Software Developer",
      company: "Vaps Technosoft Pvt Ltd",
      companylogo: require("./assets/images/vaps_logo.jpg"),
      date: "January 2022 – September 2022",
      desc: "Motivated Software Developer with nine month of experience, specializing in JavaScript, .NET Core, MSSQL, and AngularJS. Skilled in developing and maintaining ERP-based applications to optimize business processes and improve operational efficiency. Proficient in database design, server-side development, and front-end implementation to deliver scalable, high-performance solutions.",
      descBullets: [
        "Experienced in designing and implementing ERP modules for finance, inventory, and human resource management.",
        "Proficient in database optimization, query performance tuning, and MSSQL server management.",
        "Adept at debugging, maintaining clean, reusable code, and following best practices in software development.",

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS AND COMPANIES THAT I HAVE CONTRIBUTED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/enableenclusion.jpeg"),
      projectName: "Amarseva Web Application",
      projectDesc: "Amar Seva Sangam is an organization for empowering the Person with Disabilities for their rightful place in the society by enabling them through rehabilitation services, promoting their rights and by advocating for policies for an inclusive eco system",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amarseva.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/apkimg.jpeg"),
      projectName: "Enable Inclusion APK",
      projectDesc: "Enabling Inclusion program was started with the bold idea, that community rehabilitation workers can provide early intervention services to children in their own homes or in community centres by connecting these community workers with rehabilitation specialists (physiotherapists, occupational therapists, speech therapists/trainers and special educators) through the use of the Enabling Inclusion (EI) app.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amarseva.org/"
        }
      ]
    },
    {
      image: require("./assets/images/ashirvad.jpeg"),
      projectName: "TraceRight Web Application and Scanner",
      projectDesc: "Ashirvad Pipes has been the benchmark of quality in the Indian water management industry since 1998. We adhere to the highest international standards set for manufacturing products for potable water supply through smart solutions and intelligent technologies that ensure sustainability and convenience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.ashirvad.com/"
        }
      ]
    },
    {
      image: require("./assets/images/bescom-logo.jpeg"),
      projectName: "BookRight web Application",
      projectDesc: "BESCOM is Karnataka Electric Supply company . we provide application for generating invoices and reports including QR code .",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bescom.co.in/bescom/main/home"
        }
      ]
    },
    {
      image: require("./assets/images/IVR-Logo.jpeg"),
      projectName: "I-Vidyalaya Resource Management System",
      projectDesc: "An All-Inclusive platform for Instutions of All Sizes . i-Vidyalaya Resource Management (ivrm) enable institutions to functions effectively, by more productive and resouceful",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vapstech.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, Awards and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Angular - The Complete front end Framework",
      subtitle:
        "I have Participated in FUNDAMENTALS OF PROGRAMMING Framework Angular and completed ",
      image: require("./assets/images/cloudecampus.png"),
      imageAlt: "NIIT-Coimbatore Logo",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1N64pF4vNtpsh6P32OVg90PIAmSSdnQM-/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Masters certification on Full Stack Development ",
      subtitle:
        "Participated in the Programe that will cover Full stack Development AngualarJs, NodeJs, MongoDB , web Development , ReactJs ",
      image: require("./assets/images/Edureka_V_logo.jpeg"),
      imageAlt: "Hindustan College LOGO",
      footerLink: [
        {
          name: "View",
         // url: "https://drive.google.com/file/d/1N64pF4vNtpsh6P32OVg90PIAmSSdnQM-/view?usp=drive_link"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9042424375",
  email_address: "pritam18jan@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable,
  resumeSection
};
