// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  role: string;
  mainDisc: string;

 // Optional common fields
  description?: string;
  innovation?: string;
  video?: string;
  mainVideo?: string;
  tech?: string;
  innovationLink?: string;
  websiteDesc?: string;
  websiteImage?: string;
  client?: string;
  team?: string;
}

const projects: Project[] = [
  {
    slug: 'the-general',
    title: 'The General Sound Studio Live',
    role: 'Lead Designer, Motion Graphics, Video Editing, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/theGeneral.mp4',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/TheGeneral_SoundStudio_Promo_16%20x%209_720.mp4',
    description:
      'Working directly with the creative director, I led design initatives across The General Sound Studio campaign that went live from a car show in Atlanta. I storyboarded and edited the promo video as well as designed all on-screen graphics and static promo material. I also designed and built a landing page that was used to collect 1PD entries for sweepsstakes.',
    tech: 'After Effects, Premier, HTML, CSS, JavaScript, Mailchimp',
    innovation:
      'Developed ad technology that turned a live feed into a VAST compliant ad unit in near real time and distributed across thousands of consumer sites',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/TGSS_16x9.mp4',
    websiteDesc:
      'A landing page was built to facalitate 1PD collection as entries to a sweepstakes. The landing page was built using HTML, CSS, and Javascript with Mainchimp acting as the database.',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/TheGeneralWeb.png',
    mainDisc:
      'This is the main promo used across all parties in the campaign. From concept through production, I storyboarded, created motion graphics, edited, and versioned this piece of content.',
  },
  {
    slug: 'southwest',
    title: 'Southwest Airlines Hawaii Heartbeats',
    role: 'Lead Designer, Motion Graphics, Onsite Graphics, Sweepstakes Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/southwest.mp4',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Hawaii%20Heart%20Beats%20Concert%20with%20_%20Southwest%20Airlines_1.mp4',
    description:
      'Working directly with the creative director, I developed the graphic package used for the Southwest Airlines Hawaii Heartbeats Maui Benefit concert. The package included logo creation, on site prind graphics, and digital promo assets along with a sweepstakes element. The concert was held at the MACC in Maui.',
    tech: 'Illustrator, After Effects, Premier, HTML, CSS, Javascript',
    innovationLink:"https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Southwest_images.mp4",
    mainDisc:
      'Through Hawaii Heart Beats, Southwest Airlines encouraged Hawaii residents to sign up for a Rapid Rewards account and enter a sweepstakes to win concert tickets, airfare, and a hotel stay. The program culminated with a concert hosted at the Maui Arts and Cultural Center (MACC), that brought Multi-Platinum country artist, Russell Dickerson, and Hawaii local, Lily Meola, to Maui for a weekend full of music, love, and uplifting community support.',
  },
  {
    slug: 'abi',
    title: 'Anheuser Busch Reventon de Verano',
    role: 'Lead Designer, Motion Graphics, Interactive Video, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/reventon.mp4',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Reventon_Sizzle_web_720.mp4',
    description:
      'Working directly with the creative director, I led graphic and interactive design initatives across Anheuser Busch Reventon digital summer music festival. I designed interactive lower thirds that were displayed during the live performance. Interactivity methods included, click to shop (in stream shopping), Promo Codes, Digital Photo Booth, and Unique sharable moments generated from live content.',
    tech: 'After Effects, Premier, RTMP, HTML, CSS, Javascript',
    innovation:
      'Used clickable overlays as interactive design method. Users could click the grphic on screen to invoke different engagements.',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Reventon_Interactive_1_720.mp4',
    websiteDesc: 'Streaming technology was developed to allow for user interactivity with the player.',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/reventonWeb.png',
    mainDisc:
      'This is the main sizzle recap video. I led the design and interavtive development efforts across the campaign.',
  },

  {
    slug: 'bacardi',
    title: 'Casa Bacardi',
    role: 'Lead Designer, Motion Graphics, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/bacardi_1.mp4',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/bacardi_external_brand_sizzle%20web.mp4',
    description:
      'Working directly with the creative director, I led graphic and interactive design initatives across the Casa Bacardi Music festival camaign. Livestream graphics, promo creation, landing page build.',
    tech: 'After Effects, Premier, RTMP, HTML, CSS, Javascript',
    innovation:
      'Built in-stream interactivity with a customizable digital photobooth.',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Bacardi_Photobooth.mov',
    websiteDesc: 'Landing page was built to collect 1PD and promote the event.',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Bacardi_web.png',
    mainDisc:
      'This is the main sizzle recap video. I led the design and interavtive development efforts across the campaign including motion and interactive.',
  },

  {
    slug: 'greygoose',
    title: 'Grey Goose Essences - In Bloom ',
    role: 'Lead Designer, Motion Graphics, AR',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/greygoose.mp4',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/GG_SZA_15sec_16x9.mp4',
    description:
      'Working directly with the creative director, I led motion graphics, promo creation, versioning, and static ads for Grey Goose Essences In Bloom 2 years in a row.',
    tech: 'After Effects, Premier, 8th Wall three.js',
    innovation:
      'Built AR enabled engagements utlizing image recognition and QR codes. This is a concept for loyalty engagement on product.',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/GG_AR.mp4',
    websiteDesc: 'Landing page was built to collect 1PD and promote the event.',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/GG_web.jpeg',
    mainDisc:
      'This is the main promo asset used for year one of the campaign. I led the design and interavtive development efforts across the campaign including motion and interactive AR.',
  },

  {
    slug: 'grubhub',
    title: 'Grubhub Soundbites',
    role: 'Lead Designer, Motion Graphics, Video Editing, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/grubhub.mp4',
    tech: 'After Effects, Premier, Wordpress',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/grubhub_case_study_web.mp4',
    description:
      'Working directly with the creative director, I led motion graphics, promo creation, versioning, and landing pages for Grubhub Soundbites. ',
    mainDisc:
      'This was a custom built music program built by FirstTube exclusively for Grubhub.',
    innovation: 'Built in-stream qr codes for loyalty engagament',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/GH_innovation.mp4',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/GH_web.gif',
    websiteDesc: 'Landing page was built to collect 1PD and promote the multiple shows.',
  },

  {
    slug: 'michelob',
    title: 'Michelob Ultra Movement Live Platform',
    role: 'Lead Designer, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/MICHELOB_BRANDED_CONTENT__Inno.mp4',
    tech: 'Figma, NextJS',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/MICHELOB_BRANDED_CONTENT__1280.mp4',
    description:
      'Working directly with the lead developer, I led frontend development and design for the platform.',
    mainDisc:
      'This was a custom built - always on fitness platform for Michelob Ultra',
    innovation:
      'Built platform to act as the hub for Michelob Ultra workouts and foster engagement',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/MICHELOB_BRANDED_CONTENT__Inno.mp4',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/MU_WebImage.png',
    websiteDesc:
      'Landing page was built to collect 1PD as well as promote and foster participation.',
  },

  {
    slug: 'ftlive',
    title: 'FT Live - Ad Analytics Platform',
    role: 'Lead Designer, Frontend',
    video:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/ft_live.mp4',
    tech: 'Figma, NextJS, gitHub, AWS',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/LIVE%20AMP_MARKETING%20VIDEO_GENERIC%20CONCERT_FINAL%20(1).mp4',
    description:
      'Working directly with the lead developer, I led frontend development and design for the platform.',
    mainDisc:
      'This was a platform built to provide near real-time analytics for programatically distributed advertisements, and use AI matching technology to pair brands with content.',
    innovation:
      'Built propritary ad tech incoporating live stream video within VAST ad compliant wrappers.',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/SailGP_Rolex_LiveLookIn_NoWatch.mp4',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/ftLive01.png',
    websiteDesc:
      'Web application was built to manage the front end analytics display and UX.',
  },

  {
    slug: 'saksNYC',
    title: 'Saks 95th Anniversary Carousel',
    role: 'Art Director',
    video:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/saks.mp4',
    tech: 'Adobe CS, Consumer Journey',
    mainVideo:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/saks.mp4',
    description:
      'Working directly with the creative director, I led the art direction and user experience for this activation.',
    mainDisc:
      'The Saks Fifth Ave. Carousel was a dazzling and delightful luxury retail experience that allowed consumers to engage with the Saks brand in an exciting and eye-popping way. Our production team elegantly brought all of Saks’ main verticals to life, reimagining the traditional carousel horses as gigantic fashion pieces ranging from perfume bottles to sneakers and subway cars. In partnership with MasterCard, Saks offered carousel riders discounts on in-store purchases as the cherry on top of the ultimate New York City photo op.',
    innovation:
      'Built custom carousel experience designed to evoke the Saks brand and leave a lasting memory for those who experienced.',
    innovationLink:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/saks__work4-2x1-1.mp4',
    websiteImage:
      'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/saks__work1-2x1-1.jpg',
    websiteDesc:
      '',
  },
  {
    slug: "tapped-beer-festival",
    title: "Tapped Beer Festival",
    role: "Sr. Designer",
    video:"https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Tapped_main.mp4",
    mainDisc:"I worked alongside the team to create a branding package for Tapped Beer Festival with its inaugural event at Barclays Center in Brooklyn. The package included logo design, style guide, and merchandise.",
    mainVideo: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Tapped_pages.mp4',
    innovationLink: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Tapped_irl.mp4'
  },
  {
    slug: "american-photo-magazine",
    title: "American Photo Magazine | Bonnier Corp.",
    role: "Sr. Designer and Photo Editor",
    video:"https://pub-040eb69763f14186b11b39e2584847be.r2.dev/projects-AP.mp4",
    mainDisc:"Working directly with the Editor in Cheif I was responsible for the print layout and production preflight of all editorial content, as well as, creating a digital version that was published to Apple books. The above are prind production covers and the below are editorial layouts.",
    mainVideo: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/AP-Covers_1.mp4',
    innovationLink: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/Ap-layouts-DipBlack%2002_1.mp4'
  },
  {
    slug: "apapa-johns-pizza",
    title: "Papa Johns Pizza",
    role: "Sr. Designer and Social Media Content Creator",
    video:"https://pub-040eb69763f14186b11b39e2584847be.r2.dev/projects-AP_1.mp4",
    mainDisc:"Working directly with the Creative Director, we worked to crate social media telling the stories of Papa Johns franchise owners highlighting the joy and envolvement of their communities. We also followed a seasonal content plan that highlighted non-traditional holidays like National Pizza month and Nation Chicken month.",
    mainVideo: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/papas_social.mp4',
    innovationLink: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/papasSocialExamples.mp4'
  },
  {
    slug: "kane-11-socks",
    title: "Kane 11 Socks",
    role: "Sr. Designer and Social Media Content Creator",
    video:"https://pub-040eb69763f14186b11b39e2584847be.r2.dev/01.mp4",
    mainDisc:"Working directly with the Creative Director, we crated social media for a new sock brand, Kane11.",
    mainVideo: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/k11_social.mp4',
    innovationLink: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/k11_social-bballgif.mp4'
  },
];

export default projects;
