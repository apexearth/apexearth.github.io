if (typeof module !== 'undefined') {
    module.exports = cv
}

function cv(long) {
    long = long || null; // if long == true, give the long version of the cv.

    return {
        Header      : {
            Name : "Christopher Jacobs",
            Title: "Full Stack Software Engineer",
        },
        Info        : {
            Location     : "San Jose, CA",
            Email        : "apexearth@gmail.com",
            CV           : "https://apexearth.github.io/resume",
            LinkedIn     : "https://www.linkedin.com/in/apexearth",
            GitHub       : "https://github.com/apexearth",
            StackOverflow: "https://stackoverflow.com/cv/chris.jacobs",
            MCP          : "11821392"
        },
        statement   : [
            "Over 13 years of success in full stack development, enhancement, and implementation of state-of-the-art software and web applications to meet global business demands.",
            "- Proven JavaScript expert with ‘multi-hat’ qualifications and skills in Full Stack Development, Testing, and Automation.",
            "- Successful in partnering with stakeholders, managers, vendors and teams to define and translate business requirements into reliable solutions that yield measurable results in efficiency and productivity.",
            "- Excel at driving on time, within budget delivery of software projects from conception to successful conclusion in fast-paced, deadline-driven environments.",
            "- Respected as an energetic and motivational leader with talent for mentoring and coaching teams to new levels of performance.",
            "- Technologically savvy professional who thrives on challenges, rapidly adapts to new environments, and remains abreast of new and emerging technologies, and best practices.",
        ].filter(x => x).join(" \n"),
        skills      : [
            "Full Stack Web Development",
            "Software Architecture",
            "Relational Database Design",
            "Testing & Integration",
            "Automation",
            "New Product Introduction",
            "Development Lifecycle",
            "Requirements Gathering & Analysis",
            "Cloud Integration",
            "Debugging, Defect Tracking"
        ],
        technologies: [
            "javascript",
            "node.js",
            "react",
            "angular",
            "mocha",
            "electron",
            "webpack",
            "git",
            "sass",
            "html",
            "css",
            "rest",
            "sql", "nosql",
            "windows", "osx", "linux",
        ],
        experience  : [
            {
                companyTitle: "Drobo (StorCentric)",
                positions   : [
                    {
                        title    : "Host / UI Architect",
                        location : "San Jose, CA",
                        date     : {start: "June 2019", end: "present"},
                        tags     : [
                            "javascript", "node.js", "react", "angular", "electron", "webpack", "sass", "css", "html", "c/c++",
                            "rest-api", "git", "bamboo", "jira", "unit testing", "windows", "linux", "osx"
                        ],
                        statement: [
                            "Development and support of new and existing NAS, DAS, and SAN UI applications.",
                        ].filter(x => x).join(" \n"),
                    },
                    {
                        title      : "Senior Software Engineer",
                        location   : "San Jose, CA",
                        date       : {start: "October 2016", end: "June 2019"},
                        tags       : [
                            "javascript", "node.js", "react", "angular", "electron", "webpack", "c/c++", "golang", "tools", "debugging",
                            "rest-api", "micro-services", "aws", "s3", "api-gateway", "lambda", "rds", "memcache",
                            "git", "svn", "bamboo", "jira", "unit testing", "bootstrap", "css", "windows", "linux", "osx"
                        ],
                        statement  : [
                            "Development and support of new and existing NAS and DAS devices, tools, and cloud services.",
                        ].filter(x => x).join(" \n"),
                        description: [
                            "### Notable Projects",
                            "- Designed & developed a diagnostic analysis tool with Node.js, React, and Mocha used by engineers and support technicians to quickly identify product issues.",
                            "- Designed & developed web services for client-app upload of diagnostics into S3 using signed policies.",
                            "- Designed & developed internal tools to bulk analyze diagnostics and identify trends & issues.",
                            "  - Uncovered issues *early on* and quickly pinpointed root causes and devised solutions.",
                            "- Designed & developed a reliable and scalable email service using AWS for product generated alerts and notifications.",
                            "- Triage, debugging, and fix development of product issues for NAS, DAS, and iSCSI device firmware, as well as client dashboard software."
                        ].filter(x => x).join(" \n")
                    }
                ]
            },
            {
                companyTitle: "Toshiba America Electronics Corporation (OCZ)",
                positions   : [
                    {
                        title      : "Software Engineering Manager",
                        location   : "San Jose, CA",
                        date       : {start: "June 2015", end: "July 2016"},
                        tags       : [
                            "javascript", "sql", "c#", "python", "node.js", "mocha", "git", "reactjs", "gruntjs", "gulp", "mongodb",
                            "tdd", "unit testing", "test automation", "asp.net", "entity framework", "web api", "mvc", "rest", "lua", "linux", "bash", "bootstrap"
                        ],
                        statement  : [
                            "Respected as a technical leader who turned a troubled software engineering team into a successful dynamic unit.",
                            "- Architect advanced software, systems, and networking solutions to meet manufacturing test requirements utilizing python, node.js, SQL, C#, and REST web services.",
                            "  Fusing many different technologies together such as Python, Node.js, C#, C++, REST, React.js, SQL Server, utilizing each for their inherent advantages.",
                            "- Communicate directly with product designers to gather enterprise level testing requirements for cutting-edge technologies.",
                            "- A skilled, hands-on leader, responsible for the manufacturing testing of SATA & NVMe SSDs.",
                        ].filter(x => x).join(" \n"),
                        description: [
                            "### Selected Achievements:",
                            "- Spearheaded design and development of enterprise test solutions for next-generation NVMe SSD products.",
                            "    - Praised for improving tester hardware & software reliability from ~70% to 99.8%.",
                            "    - Through hands-on effort, worked closely with team members and technology experts to hunt down and eliminate long-standing issues.",
                            "    - Worked closely other NPI team members to quickly adapt to rapid changes.",
                            "      Ensured the team would stay clear of the critical path through forward-looking design through integration, automation, and high maintainability.",
                            "    - Key contributor to coordinating, data mining, and improving the quality of RDT efforts.",
                            "    - Worked with manufacturers to refine and provide optimal testing solutions.",
                            "- Overhauled the software development & release management processes by adding peer code reviews, documentation, and automating release deployments.",
                            "    - Instituted the usage of GitLab to manage & automate builds, testing, releases and issues.",
                            "    - Oversaw the completion of dozens of releases and hundreds of issues.",
                            "    - Drove initiatives to automate builds and releases wherever appropriate, increase the overall efficiency of the team.",
                            "    - Added unit-testing requirements for software, improving quality and maintainability.",
                            "    - Encouraged and rewarded team-members to research, study, and adopt industry best-practices at all times.",
                        ].filter(x => x).join(" \n")
                    }
                ]
            },
            {
                companyTitle: "OCZ Storage Solutions",
                positions   : [
                    {
                        title      : "Senior Software Engineer",
                        location   : "San Jose, CA",
                        date       : {start: "November 2010", end: "June 2015"},
                        tags       : [
                            "javascript", "c#", "sql", "node.js", "git", "gruntjs", "gulp", "tdd", "unit-testing", "java", "angularjs", "orm", "entity-framework", "mvc", "data-modeling", "rest", "web-api", "asp.net", "html", "css", "bootstrap"
                        ],
                        statement  : [
                            "Lead and execute advanced design, development, programming, and implementation of high performance software and web applications to meet evolving business and data management needs.",
                            "Analyze and document complex requirements and processes, collaborating with executives, department heads, and stakeholders to ensure proper alignment.",
                            "Plan and coordinate all phases of the development life-cycle, directly supervising team members from initial gathering of requirements through deployment and maintenance."
                        ].filter(x => x).join(" \n"),
                        description: [
                            "### Selected Achievements:",
                            "- Credited with successfully completing numerous web/software development projects that triggered immediate and measurable improvements in efficiency, productivity, and cost savings through automation and streamlining of core business processes and data management/reporting/analysis functions.",
                            "- Praised for implementing best practice methodologies to ensure on-time delivery of high performance, value-adding software solutions with a compelling ROI.",
                            "- Maintained high levels of stability/reliability through skillful management of development lifecycle and definition of repeatable process methodologies.",
                            "- Entrusted as a high-impact coach and mentor to junior team members, equipping them with the skills, tools, and strategies to meet ambitious service level deliverables.",
                            "   \n   \n",
                            "### Notable Projects:",
                            "- Designed, developed, and integrated web-based order approval application with Sage ERP system, nearly eliminating use of paper during order approval process. Technologies included JavaScript, C#, MVC, REST APIs, SQL Server, Entity Framework, and Bootstrap.",
                            "    - Slashed touch time by 75% while accelerating cycle time by 35%.",
                            "- Spearheaded and directed collaborative initiative with Product Engineers to build flexible database design that enabled management of test configurations via web application and storage of test results for numerous manufacturers and databases. Technologies included Java, JavaScript, SQL Server, C#, MVC, Entity Framework, AngularJS, and Bootstrap.",
                            "    - Implemented 4 FlexStar systems in Taiwan facility and trained team leads on system usage.",
                            "    - Boosted test capacity by more than 30% while significantly expanding analytical capabilities.",
                            "    - Positioned company for successful entry into the Enterprise SSD market.",
                            "- Elevated manufacturing efficiency through the design and implementation of SSD configuration and logging databases with REST API endpoints and web platform.",
                            "    - Increased accuracy and analytical capabilities while expanding factory capacity for processing next-generation SSD products by 20%.",
                            "- Hand-picked for high profile, large-scale project to automate key functions on-site at company’s Taiwan manufacturing facility.",
                            "- Key contributor to planning and seamless transition of Taiwan factory operations, systems, and processes to new ownership with zero unplanned down-times.",
                            long && "- Championed and won approval to develop and implement Master Data System to increase data quality and improve ETL capabilities. Successfully completed project as part of larger, enterprise-wide initiative to increase awareness of the importance of data best practices across all departments and levels.",
                            long && "- Engineered applications to automate product label printing and streamline packaging process, leading to ~95% reduction in print errors and ~15% increase in efficiency.",
                        ].filter(x => x).join(" \n")
                    }
                ]
            },
            {
                companyTitle: "OCZ Storage Solutions",
                positions   : [
                    {
                        title      : "Software Engineer",
                        location   : "San Jose, CA",
                        date       : {start: "November 2006", end: "November 2010"},
                        tags       : long && [
                            "javascript", "c#", "sql", "mercurial", "unit-testing", "orm", "entity-framework", "model-view-controller", "data-modeling", "rest", "web-api", "asp.net", "html", "css"
                        ],
                        statement  : [
                            "Initially hired as Software Developer; assumed additional responsibilities of System Administrator, effectively fulfilling dual roles for nearly 2 years to accommodate challenging business needs during period of rapid corporate growth and expansion."
                        ].filter(x => x).join(" \n"),
                        description: [
                            "### Notable Projects:",
                            "- Led development, launch, and maintenance of web application for documentation and tracking of product repair actions and results. Teamed with BI Analysts to create SQL queries for repair data analysis.",
                            "    - Produced 15% increase in throughput and provided critical data and business intelligence for decision-makers.",
                            long && "- Designed, developed, and integrated Materials Planning System with Sage ERP; enabled automated management of testing, manufacturing, and logistics processes for memory products. Fueled impressive 75% increase in processing efficiency.",
                            "- Full lifecycle development of web application for administration of RMA transactions.",
                            "    - Led to dramatic increase in transaction accuracy and ~60% decrease in RMA processing time.",
                            long && "- Leveraged deep understanding and earlier hands-on experience in Windows Server maintenance and networking best practices to intuitively tailor software development and deployment plans that consistently produce highest possible levels of performance, compatibility, and functionality.",
                            long && "- Designed and developed customized client-server reporting system generating dozens of reports vital to core business functions company-wide.",
                            long && "- Developed and maintained a suite of many ERP-integrated applications supporting global operations, increasing the efficiency of day-to-day actions in all facets of the company."
                        ].filter(x => x).join(" \n")
                    }
                ]
            },
            {
                visible     : false, // Too old, not worth displaying.
                companyTitle: "American Auto Auction",
                positions   : [
                    {
                        title      : "IT Systems Administrator",
                        location   : "Wallingford, CT",
                        date       : {start: 2004, end: 2006},
                        tags       : long && ["c#", "sql", "windows-server", "networking", "telephony", "dns", "dhcp"],
                        description: [
                            "Started as an intern, was responsible for supporting server systems, live auction systems, and user systems. Built real time reports to display live auction statistics for the CEO.   \n",
                            long && "- Setup & administration of Windows 2003 Servers, DNS, DHCP, SQL Server, Networking and Telephony.",
                            long && "- Wrote web reports to view real-time statistics  using SQL Server and C#.\n",
                            long && "Note: Also ran email marketing where I designed many ads in Photoshop which were reviewed and approved by the CEO."
                        ].filter(x => x).join(" \n")
                    }
                ]
            },
        ],
        projects    : [
            {
                title      : "Particle Sandbox",
                description: [
                    "Grand-scale interactive gravity simulator created using Node.js, Pixi.js, React, Less, and Mocha.",
                    "Designed for desktop and mobile devices."
                ].join('  \n'),
                url        : "http://particlesandbox.com",
                github     : "https://github.com/apexearth/particle-sandbox"
            }
        ],
        education   : [{
            name   : "Tunxis Community College",
            studies: "Computer science studies focusing in software engineering.",
            date   : {start: 2002, end: 2004}
        }]
    }
}
