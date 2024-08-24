import {
    clang,csharp,powershell,lua,javascript,typescript,python,
    docker,postgresql,nextjs,git,elasticsearch,mongodb,reactjs,tailwind,
    mms, ftp, novaspect, adatafy,
    grad, undergrad,
    cloud,android,car,cobra,fridge,paper,
    presentation,cmms,batch,architecture,debug,
    nand2tetris,selfhost,stealthstartup,website,printing,thiswebsite,
  } from "../assets";

  const profiles = [
    {
      name: "Lua",
      icon: lua,
    },
    {
      name: "C",
      icon: clang,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python3",
      icon: python,
    },
    {
      name: "PowerShell",
      icon: powershell,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "ElasticSearch",
      icon: elasticsearch,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    }

  ];

  const intrests = [
    {
      title: "'Foodie', is what my friends call me. I have cooked with nationally ranked BBQ Pitmasters and served a lot of BBQ. I have also worked as a line cook and chef. The phrase 'Easy to please, hard to impress.' describes my culinary standards well.",
    },
    {
      title: "I played soccer for my undergrad team and totalled just under 20 years of competitive play. Also, come on you Gunners!",
    },
    {
      title: "I speak 2.5 languages - Fluently speak French and some Japanese. My Japanese oral skills are weak, but I have had my phone exclusively in Japanese for around 7 years now.",
    },
    {
      title: "I like Video Games. I played Rocket League on a semi-professional team for ~2 years. In my limited freetime, I still enjoy playing RTS, FPS, and silly games with my friends. I also have a mini-obsession with Pokémon, which may explain why I learned Japanese.",
    },
    {
      title: "I have my FE! I plan of taking my PE (for ECE) Fall 2025.",
    },
  ]

  export const SchoolProject = [
    {
      name: "Cloud applications for Rural Communities",
      description:
        "Engineered a cloud service for rural communities that is focused on fault-tolerance, availability, and limited bandwidth. This research is still on-going.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Micro-services",
          color: "green-text-gradient",
        },
        {
          name: "Data Center Computing",
          color: "pink-text-gradient",
        },
      ],
      image: cloud,
      source_link: "https://github.com/minhsyqt/rural-argriculture",
    },
    {
      name: "Decentralized RC car",
      description:
        "Created a RTOS in C for 2 co-dependent ARM chips. Designed and oursourced a PCB to integrate ARM chips together. Programmed a decentralized system to be able to wirelessly drive a RC car from a cockpit.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Operating Systems",
          color: "green-text-gradient",
        },
        {
          name: "Distibuted Embedded Systems",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      source_link: "https://drive.kiwitactics.com/s/jpfSF85AKXDMw7P",
    },
    {
      name: "Fault-Tolerant Distributed System",
      description:
        "Lead a team of 4 engineers to build a fault-tolerant distributed system. This system spanned ~8 microservices (~20 with replication), and could handle (n-1) crashes at any point within the system without loss of data or service.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Micro-services",
          color: "green-text-gradient",
        },
        {
          name: "Distributed Systems",
          color: "pink-text-gradient",
        },
      ],
      image: cobra,
      source_link: "https://courses.ece.cmu.edu/18749",
    },
    {
      name: "Android RTOS",
      description:
        "Modifed an Android Kernel to become a Real-time Operating System. Created a Task Monitor application to display scheduling. Documentation that I wrote was incorporated for future use for later offerings of the course.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "RTOS",
          color: "green-text-gradient",
        },
        {
          name: "Real-Time Embedded Systems",
          color: "pink-text-gradient",
        },
      ],
      image: android,
      source_link: "https://github.com/sspivey98/18-648-Lab2",
    },
    {
      name: "eBPF Fuzzing",
      description:
        "Research done over 6 months on Linux's eBPF. This is on-going research at CMU.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "eBPF",
          color: "green-text-gradient",
        },
        {
          name: "Internet Services & Operating Systems",
          color: "pink-text-gradient",
        },
      ],
      image: paper,
      source_link: "https://drive.kiwitactics.com/s/M68xNsy9fCneYm7",
    },
    {
      name: "Touchless Automated Fridge",
      description:
        "Developed a prototype for a touchless automated fridge, where one can swipe your foot at the sensor in the bottom to open a door without hands.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "Embedded Systems",
          color: "pink-text-gradient",
        },
      ],
      image: fridge,
      source_link: "https://www.jstor.org/stable/community.37868329",
    }
  ];
  
  export const WorkProject = [
    {
      name: "Air Compressor Skid",
      description:
        "Validation system for air compressor vendor with PLC, SCADA, and software to fully automate the testing process of air compressors. Used Stimulsoft reporting engine to produce data spec sheets.",
      tags: [
        {
          name: "Lua",
          color: "blue-text-gradient",
        },
        {
          name: "Control Block Diagrams",
          color: "blue-text-gradient",
        },
        {
          name: "SCADA",
          color: "green-text-gradient",
        },
        {
          name: "Automation",
          color: "pink-text-gradient",
        },
      ],
      image: presentation,
      source_link: "",
    },
    {
      name: "Agnostic CMMS Connector",
      description:
        "CMMS synchronization system that agnostically synchronizes work orders, locations, and event data between multiple different systems",
      tags: [
        {
          name: "Lua",
          color: "blue-text-gradient",
        },
        {
          name: "Bi-directional replication",
          color: "green-text-gradient",
        },
        {
          name: "Distibuted Systems",
          color: "pink-text-gradient",
        },
      ],
      image: cmms,
      source_link: "https://adatafy.com/case-studie/cmms-connector-enables-bi-directional-interface-between-shiftconnector-and-maximo/",
    },
    {
      name: "Lua GUI Debugger",
      description:
        "Developed a localized GUI Debugger that enables developers to look at call stacks, variables, and breakpoints in real-time distributed Lua code. Supported with Mingw64 and luarocks, Product Shipped with WiX toolset.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Lua",
          color: "blue-text-gradient",
        },
        {
          name: "Debugging",
          color: "green-text-gradient",
        },
        {
          name: "Programming Workflow",
          color: "pink-text-gradient",
        },
      ],
      image: debug,
      source_link: "",
    },
    {
      name: "Systems Architecture",
      description: "Designed a distributed system architecture for a nuclear facility that handles 100's of Petabytes of data on a air-gapped cloud-esque ecosystem",
      tags: [
        {
          name: "Visio",
          color: "blue-text-gradient",
        },
        {
          name: "Load Balancing",
          color: "green-text-gradient",
        },
        {
          name: "Software Architecture",
          color: "pink-text-gradient",
        },
      ],
      image: architecture,
      source_link: "",
    },
    {
      name: "Autonomous Batch",
      description: "Engineered automated batch distributed system for a pharmaceutical company that automates master batch production and generates KPIs and BI data for each batch.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Lua",
          color: "blue-text-gradient",
        },
        {
          name: "Micro-services",
          color: "green-text-gradient",
        },
        {
          name: "Cloud",
          color: "pink-text-gradient",
        },
      ],
      image: batch,
      source_link: "",
    },
    {
      name: "Internal Product Website",
      description: "Developed an internal product website that allows users to quickly search, input, and research products and tools across the Emerson impact-partner network. Deployed with Docker.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "ElasticSearch",
          color: "blue-text-gradient",
        },
        {
          name: "Web Development",
          color: "green-text-gradient",
        },
      ],
      image: website,
      source_link: "",
    }
    
  ];
  
  export const PersonalProject = [
    {
      name: "Self-Hosting",
      description:
        "I Self-Host alternatives for Google Drive (nextcloud), Google Photos (immich), and Streamming (Jellyfin & Plex) for my friends and family. This website you're viewing right now is also self-hosted!",
      tags: [
        {
          name: "Nginx",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "HyperV",
          color: "green-text-gradient",
        },
        {
          name: "Cloudflare",
          color: "pink-text-gradient",
        },
      ],
      image: selfhost,
      source_link: "",
    },
    {
      name: "Stealth Start-up",
      description:
        "Co-founded with a current practicing neurosurgen, We identified a need for a tool in the neuroscience field of research. More information can be provided upon a direct request.",
      tags: [],
      image: stealthstartup,
      source_link: "",
    },
    {
      name: "Nand2Tetris",
      description:
        "Went through the entire Nand2Tetris course, where I first learned about how a computer works from NAND gates to operating systems. I would recommend checking out 'Turing Complete' game on Steam as an alternative.",
      tags: [
        {
          name: "Assembly",
          color: "blue-text-gradient",
        },
        {
          name: "Compilers",
          color: "green-text-gradient",
        },
        {
          name: "Programming Languages",
          color: "green-text-gradient",
        },
      ],
      image: nand2tetris,
      source_link: "https://github.com/sspivey98/nand2tetris",
    },
    {
      name: "3D Printing",
      description:
        "Modeling and printed the game 'sequence' chips and a mock-up Ridge wallet.",
      tags: [
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
      ],
      image: printing,
      source_link: "",
    },
    {
      name: "This website!",
      description:
        "This website's source code is available!",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Web Development",
          color: "pink-text-gradient",
        },
      ],
      image: thiswebsite,
      source_link: "https://github.com/sspivey98/portfolio",
    },
  ];
  
  const experiences = [
    {
      title: "Solutions Arcitect Consultant",
      company_name: "Adatafy",
      icon: adatafy,
      iconBg: "#FFFFFF",
      date: "Sept 2023 - Present",
      points: [`
        I have been working here part-time ~20-30 hours a week while doing full-time graduate school. I work as consultant to lead more complex projects, as one my most valued skills is the ability to be lead technical while effectively communicating with the business side.
        Look for some of my work in the 'Project' section of this website: 'CMMS Connector', 'Lua GUI Debugger', and 'Internal Product Website'.
      `],
    },
    {
      title: "IoT Engineer",
      company_name: "Noavspect Inc.",
      icon: novaspect,
      iconBg: "#FFFFFF",
      date: "June 2021 - Sept 2023",
      points: [`
        The first weeks of starting my first salary job, people asked, "Who did you know to get this job?" (spoiler: nobody) After 2 years, I had received 4 raises and an indirect report for 3 other engineers. 
        This company invested in me to go to graduate school in order to tackle some more "difficult" projects. My department was spun-off into its own trademark, Adatafy. 
        Look for some of my work in the 'Project' section of this website: 'Autonomous Batch', 'Air-Compressor Skid', and 'Systems Architecture'.
      `],
    },
    {
      title: "Software Engineer Intern",
      company_name: "First Trust Portfolios",
      icon: ftp,
      iconBg: "#FFFFFF",
      date: "Summer 2019, Winter 2019, Winter 2021",
      points: [
        "Had 3 internships here under 3 seperate departments. The most interesting was under the research department, where I developed a report alarm dashboard to quickly display infrastructure health using: Delphi, ASP.net, and SQL-like in-house database."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Medical Marketing Services Inc.",
      icon: mms,
      iconBg: "#FFFFFF",
      date: "Summer 2018",
      link: "",
      points: [
        "My first ever software internship. Wrote standards for migrating ~70 legacy interactive advertisement web-brocheurs from VB to VB.net and did the work of migrating them.",
      ],
    },
  ];
  
  const educations = [
    {
      degree: "B.S.E.",
      branch:
        "Software Engineering, Electrical & Computer Engineering",
      marks:
        "GPA : 3.73 / 4",
      name: "Olivet Nazarene University",
      year: "(2017 - 2021)",
      image: undergrad,
    },
    {
      degree:
        "M.S.",
      branch : "Electrical & Computer Engineering",
      marks:
        "GPA : 4.0 / 4",
      name: "Carnige Mellon University",
      year: "(2023 - 2024)",
      image: grad,
    },
  ];
  
  const list = [    
  {
    id: "school",
    title: "School",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "personal",
    title: "Personal",
  },
];
  export { list, profiles, experiences, educations, intrests };
