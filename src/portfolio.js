/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arya Cinematics",
  description:
  "A dedicated team specializing in managing social media accounts, providing top-notch photography and videography services. With extensive experience in the cricket field, we develop sustainable and scalable social and technical solutions to amplify your impact.",
  og: {
    title: "Arya Cinematics Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Arya Cinematics",
  logo_name: "Arya Cinematics",
  nickname: "Digital Marketing",
  subTitle:
    "A dedicated team specializing in managing social media accounts, providing top-notch photography and videography services. With extensive experience in the cricket field, we develop sustainable and scalable social and technical solutions to amplify your impact.",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  /*{
    name: "Github",
    link: "https://github.com/kunalchoudhary14",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kunal-choudhary-632930248/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  */
  {
    name: "YouTube",
    link: "https://youtube.com/@kunaalchoudhary521?si=DboMkc5bJUjJRxxk",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:aryacinematiccreations@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/arya_cinematics?igsh=M3kxdDBkN3F5Z2Fj",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Social Media Management",
      fileName: "socialmedia",
      skills: [
        "⚡ Comprehensive Services: All-inclusive social media management and content creation to keep your brand engaging",
        "⚡ Expertise and Experience: Seasoned photographers, videographers, and social media experts with cricket industry experience",
        "⚡ Proven Results: Data-driven strategies and creative campaigns to boost engagement and grow your audience",
      ],
      softwareSkills: [
        {
          skillName: "Instagram",
          fontAwesomeClassname: "logos-instagram",
          style: {
            color: "#fa7e1e",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Youtube",
          fontAwesomeClassname: "logos-youtube",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Facebook",
          fontAwesomeClassname: "simple-icons:facebook",
          style: {
            backgroundColor: "transparent",
            color: "#1877F2",
          },
        },
       
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    
    {
      title: "Graphic Designing",
      fileName: "graphidesign",
      skills: [
        "⚡Innovative Designs: Transform your brand's vision into visually stunning graphics that captivate and inspire",
        "⚡ Engaging and Impactful: Create stunning graphics that engage your audience and leave a lasting impact across all platforms",
        "⚡ Tailored Solutions: Craft a unique identity that perfectly represents your brand",
        
      ],
      softwareSkills: [
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Adobe",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "darkorange",
          },
        },
        {
          skillName: "Adobe",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "red",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "F24E1E",
          },
        },
       
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#00C4CC",
          },
        },
        
        
      ],
    },
    {
      title: "Web Development",
      fileName: "webdev",
      skills: [
        "⚡ Custom Solutions: We create bespoke web solutions tailored to your business needs and goals",
        "⚡ Latest Technologies: We use cutting-edge coding technologies like React, Node.js, MongoDB for fast, secure, and scalable websites.",
        "⚡ Dedicated Support: We offer dedicated support and maintenance to keep your site up-to-date and running smoothly.",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#511362",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Video Editing",
      fileName: "videoediting",
      skills: [
        "⚡ Professional Video Editing:Elevate your content with professional video editing services that bring your vision to life",
        "⚡ Creative Enhancements: Add creative effects, transitions, and enhancements to make your videos stand out and engage your audience",
        "⚡ Efficient Workflow: Streamline your video production process with efficient editing techniques that save time and deliver exceptional results",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#511362",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#4289F4",
          },
        },
        {
          skillName: " Adobe After Effects ",
          fontAwesomeClassname: "simple-icons:adobeaftereffects",
          style: {
            color: "#CF96FD",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Drone shoots",
      fileName: "drone",
      skills: [
        "⚡ Stunning Aerial Views:Capture breathtaking aerial footage that offers a unique perspective and elevates your content",
        "⚡ High-Quality Production: Deliver professional-grade videos and photos with our cutting-edge drone technology",
        "⚡ Unmatched Creativity: Unlock new creative possibilities and captivate your audience with dynamic and innovative drone shots",
      ],
      softwareSkills: [
        {
          skillName: "Drone",
          fontAwesomeClassname: "simple-icons:drone",
          style: {
            color: "#E34F26",
          },
        },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-sharp fa-solid fa-drone",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        {
          skillName: "DJI",
          fontAwesomeClassname: "simple-icons:dji",
          style: {
            color: "#0971CE",
          },
        },
        {
          skillName: "Sony",
          fontAwesomeClassname: "simple-icons:sony",
          style: {
            backgroundColor: "transparent",
            color: "#000",
          },
        },
        
        {
          skillName: "Nikon",
          fontAwesomeClassname: "simple-icons:nikon",
          style: {
            color: "#616161",
          },
        },
        
        
        
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Leagues and Volunteership",
  description:
    "We have worked with many evolving Cricket Academies as Social Media Manager, Graphic Designer and Photographer. We have also worked with some well known International Leagues. Delivered impactful social media strategies that led to significant growth in brand visibility, engagement, and follower base, showcasing a strong track record of driving digital success.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Social Media Management",
          company: "Ayush Cricket Academy",
          company_url: "https://www.instagram.com/ayush.uttarakhand?igsh=Nmp2MTc1emJwNDUy",
          logo_path: "tiktok_logo.PNG",
          
          duration: "July 2021 - Present",
          location: "Dehradun, Uttarakhand",
          description:
            "Managed social media campaigns for Ayush Cricket Academy, improving engagement and reach through strategic content creation and targeted advertising. Focused on posting engaging reels, creatives, and stories to captivate the audience and boost interaction. Successfully increased followers from 1389 to 139k.",
          color: "#000000",
        },
        {
          title: "Social Media Management",
          company: "Abhimanyu Cricket Academy",
          company_url: "https://www.instagram.com/abhimanyucricketacademy01?igsh=dDkxdXEwb3YxbDB3",
          logo_path: "abhimanyulogo.PNG",
          duration: "July 2023 - Present",
          location: "Dehradun, Uttarakhand",
          description:
            "We run campaigns for Abhimanyu Cricket Academy, improving engagement and reach through content creation and targeted advertising on instagram. Focused on posting engaging reels, creatives of the players of academy to showcase the talent of the academy to captivate the audience and boost interaction. Successfully increased followers from 1249 to 37k.",
          color: "#0879bf",
        },
        {
          title: "Photography and Social Media",
          company: "Maa Anandmayee Memorial School",
          company_url: "https://www.instagram.com/mamssportsacademy?igsh=bXQydzVhMzZndGVm",
          logo_path: "mamslogo.PNG",
          duration: "September 2022 - Present",
          location: "Raiwala, Uttarakhand",
          description:
            "We Shoot session for Mams Cricket Academy, and post them on Instagram, Facebookimproving engagement and reach. Focused on posting engaging reels and coaching videos of the choaches to captivate the audience and boost interaction. Successfully increased followers from 2891 to 71k.",
          color: "#9b1578",
        },
        {
          title: "Social Media Management",
          company: "RS Cricket Academy.",
          company_url: "https://www.instagram.com/rs.cricketacademy?igsh=MTZ0NG02ajRvMmhndg==",
          logo_path: "rslogo.png",
          duration: " November 2023- May 2024",
          location: "Faridabad, Haryana",
          description:
            "Managed social media campaigns for RS Cricket Academy, improving engagement and reach through strategic content creation and targeted advertising. Focused on posting engaging reels, creatives, and stories to captivate the audience and boost interaction.",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Leagues",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Leagues",
      experiences: [
        {
          title: "Legends Cricket Trophy",
          company: "Delhi Devils",
          company_url: "https://www.instagram.com/official_delhi.devils?igsh=MTIwaW5vdjRteWk0cg==",
          logo_path: "lctlogo.png",
          duration: "March 2024",
          location: "Kandy, Sri Lanka",
          description:
            "The Legends Cricket Trophy, a 90-ball tournament, held in Sri Lanka. featured many legends like Yuvraj Singh, Suresh Raina, Chris Gayle and many more. We managed the Social Media of team Delhi Devils. Focused on posting engaging reels, creatives, and stories to captivate the audience and boost interaction. ",
          color: "#4285F4",
        },
        {
          title: "Indian Veteran Premier League",
          company: "100 Sports",
          company_url: "https://www.instagram.com/ivplt20?igsh=MXdubDhuazdudWkwNg==",
          logo_path: "ivpllogo.png",
          duration: "Feb-Mar 2024",
          location: "Greator Noida, UP",
          description:
            "IVPL cricket league, a platform for veterans who are retired to showcase their skills. Legend Players like Suresh Riana, Chris Gayle, Virendra Sehwag and many more participated. Our team worked for the 100 Sports in social media management. Main responsiblities were to provide photographs and videos of the matches and team shoots with anchor.",
          color: "#D83B01",
        },
        {
          title: "Uttarakhand Premier League",
          company: "UPL 2023",
          company_url: "https://www.upltt.com/",
          logo_path: "UPL_LOGO.PNG",
          duration: "June 2023",
          location: "Dehradun, Uttarakhand",
          description:
            "UPL a local cricket league for the local cricketers of Uttarkhand to find the grassroot talent. We worked to promote the UPL in Dehradun and on Social Media. Focused on posting engaging reels, creatives, and stories to captivate the audience and boost interaction.",
          color: "#000000",
        },
        {
          title: "Bhartiya Corporate Premier League",
          company: "Set Sports",
          company_url:
            "https://www.instagram.com/bcpl.t20?igsh=MTk1cnc3M3lmN2hrYQ==",
          logo_path: "bcpllogo.png",
          duration: "Sepetember 2023",
          location: "Dehradun, Uttarakhand",
          description:
            "BCPL a tournament for corporate people working hard in professional lives, giving them a chance to showcase their skills in Cricket. We manges the Social Media like Instagram and Facebook, improving engagement and reach through strategic content creation and targeted advertising.",
            color: "#111",
        },
        {
          title: "Guwahati Premier Football League",
          company: "GEMS",
          company_url: "https://www.instagram.com/gpfl_official?igsh=MWdxamtoa2hwM3Z3",
          logo_path: "gpfllogo.JPEG",
          duration: "December 2023",
          location: "Guwahati",
          description:
            "GFPL a football league in North-east India focused on the grassroot talent in football and encouraging younters of Guwahati. We worked for the Social Media Management of the tournament. Main responsiblity were Photography and drone shoots and prmoting local players through their performances",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "We have worked for several renowned international leagues, implementing effective social media strategies that significantly boosted brand visibility, engagement, and follower count. This highlights our proven ability to drive digital success.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Gallery",
  description: "Some Glimpses of our project work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Us",
    subtitle:
      "+91 7454824487",
    profile_image_path: "kunalanimated.png",
    description:
      "We are available on almost every social media Platform. You can message us, We will reply within 24 hours. We can help you with Photography, Videography, Creatives and Social Media Management.",
  },
  blogSection: {
    title: "Instagram",
    subtitle:
      "For more information, feel free to DM us on Instagram. We’re here to help with any questions you might have. Tap the button below!",
    link: "https://www.instagram.com/arya_cinematics?igsh=M3kxdDBkN3F5Z2Fj",
    avatar_image_path: "insta.png",
  },
  addressSection: {
    title: "Address",
    subtitle: "Engineers Enclave, Dehradun",
    locality: "",
    country: "Uttarakhand, India",
    region: "",
    postalCode: "248001",
    streetAddress: "",
    avatar_image_path: "location.png",
    location_map_link: "https://maps.app.goo.gl/WfaaPJWPvbLn1KKq9",
  },
  phoneSection: {
    title: "Call Us",
    subtitle: "+91 7454824487",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
