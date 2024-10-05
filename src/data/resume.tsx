import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mani",
  initials: "MG",
  url: "https://chirag.is-a.dev/",
  location: "Jalandhar, India",
  locationLink: "https://maps.app.goo.gl/Zbzok1mCik445h1C6",
  description:
    "Passionate, Caffienated and Sleep-deprived Software Engineer from India",
  summary:
    "I am Mani, a fourth-year Bachelor of Technology student from India, currently studying Computer Science Engineering. As a Fullstack Developer, I enjoy both frontend and backend development equally. Additionally, I have a passion for content writing and conducting research on various topics, particularly in the fields of Artificial Intelligence and Computer Vision.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chandramanigupta2003@gmail.com",
    tel: "+91 9919669660",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devxMani",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mani-7b5058253/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devxMani",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:chandramanigupta2003@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Skillarena",
      href: "https://skillarena.in/",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/skillarena.png",
      start: "July 2024",
      end: "September 2024",
      description:
        "Developed and maintained core backend systems for mobile and web applications using Node.js and Express.js, improving overall application performance by 30% | Designed and implemented a real-time chat application backend utilizing WebSockets and FastAPI (Python), resulting in a 50% increase in user engagement",
    },
    {
      company: "Clearmind AI",
      badges: [],
      href: "https://www.clearmind.plus/",
      location: "Remote",
      title: "Next.js Developer",
      logoUrl: "/clearmind.png",
      start: "October 2023",
      end: "December 2023",
      description:
        "Analyzed and implemented 75% user feedback suggestions, leading to a 15% increase in user satisfaction ratings and a 20% increase in page visits. | Integrated Stripe payment gateway, increasing online transactions by 30% and reducing checkout abandonment by 25%.",
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree:
        "Bachelor's of Technology in Computer Science Engineering",
      logoUrl: "/lpu.jpg",
      start: "2022",
      end: "2025",
    },
    {
      school: "Kendriya Vidyalaya",
      href: "https://no1shahjahanpur.kvs.ac.in/",
      degree: "Senior Secondary (CBSE)",
      logoUrl: "/kv.png",
      start: "2009",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Blog Website",
      href: "https://github.com/devxMani/BLOG",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "A Blog webiste that lets you write blogs and publish them, you can also read others blogs.",
      technologies: ["Next.js", "Typescript", "MongoDB", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/devxMani/BLOG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blogg.png",
    },
    {
      title: "GSAP projects",
      href: "https://github.com/devxMani/GSAP_projects",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "I have created 5 projects using GSAP library for learning animations and hovers animations.",
      technologies: ["GSAP","Framer motion","HTML","CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/devxMani/GSAP_projects",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gsap.png",
    },
    {
      title: "Stock Predictor",
      href: "https://github.com/devxMani/StockMarketPrediction",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "A stock market predictor that analyses the current market and gives you future profitable stocks using ML libraries.",
      technologies: ["Python", "Keras", "LSTMs", "Matplotlib"],
      links: [
        {
          type: "Source",
          href: "https://github.com/devxMani/StockMarketPrediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stock.png",
    },
    {
      title: "Crypto-Tracker",
      href: "https://github.com/devxMani/CryptoTracker",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "A Crypto tracker application which gives you realtime data in line chart format of cryptos using Coin Gecko API.",
      technologies: ["React", "Typescript", "Coin Gecko API"],
      links: [
        {
          type: "Website",
          href: "https://github.com/devxMani/CryptoTracker",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ChiragAgg5k/askit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crypto.png",
    },
  ],
  positions: [
    {
      title: "GSSOC'24 EXT Campus Ambassador",
      dates: "Sep 2024 - Present",
      location: "GirlScript Summer of Code",
      description:
        "I have selected as a Campus Ambassador for GirlScript Summer of Code 2024 and I am responsible for promoting the program and helping students with their submissions and queries.",
      image: "/gssoc.jpg",
      links: [
        {
          title: "Contributions",
          href: "https://gssoc.girlscript.tech/",
        },
      ],
    },
    {
      title: "Hacktoberfest'24 Participant",
      dates: "Oct 2024 - Dec 2024",
      location: "Hacktoberfest",
      description:
        "Participated in 2 Month long open source contribution competition and successfully made 40+ PRs .",
      image:
        "hacktoberfestlogo.png",
      links: [
        {
          title: "Website",
          href: "https://hacktoberfest.com/",
        },
        {
          title: "Photos",
          href: "https://hacktoberfest.com/profile/",
        },
      ],
    },
    {
      title: "GSSOC'24 Extended Contributor",
      dates: "Oct 2024 - Nov 2024",
      location: "Contributor",
      description:
        "I am a contributor in GirlScript Summer of Code 2024 and I have contributed to over 20+ open-source projects till now and made over 50+ PRs till now in this program ",
      image:
        "gssoc.jpg",
      links: [
        { title: "Website", href: "https://gssoc.girlscript.tech/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/girlscriptsoc/",
        },
        {
          title: "Welcome Letter",
          href: "https://www.linkedin.com/posts/chiragagg5k_newrole-bennettuniversity-technology-activity-7097467074863636480-M1q6",
        },
      ],
    },
  ],
} as const;
