module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Pascal Albisser',
    // Main Site Title
    title: `Pascal Albisser | Data Journalist`,
    // Description that goes under your name in main bio
    description: `Data Journalist at Swiss National Broadcaster & Student MSc Applied Information and Data Science.`,
    // Optional: Twitter account handle
    author: `@pscllbssr`,
    // Optional: Github account URL
    github: `https://github.com/ryanfitzgerald`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'SRF Klimamonitor',
        description:
          'Facts & figures about climate change in switzerland, updated daily.',
        link: 'https://www.srf.ch/klima',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'SRF Data',
        description: 'Data Journalist, Lead Frontend & Storytelling, October 2020 - Present',
        link: 'https://www.srf.ch/data',
      },
      {
        name: 'SRF Online',
        description: 'Frontend Developer, September 2019 - September 2020',
        link: 'https://www.srf.ch/',
      },
      {
        name: 'Freelance, Catatec, Inware AG, Intersim AG',
        description: 'Web Developer & Multimedia Producer, August 2012 - August 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'MSc Applied Information and Data Science',
        description:
          'Lucerne University of Applied Sciences and Arts, September 2022 - Present',
      },
      {
        name: 'BSc Media Engineering',
        description: 'Bern University of Applied Sciences, September 2016 - August 2019',
      },
      {
        name: 'Software Developer EFZ',
        description:
          'State Secretariat for Economic Affairs SECO, August 2008 - July 2012',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
