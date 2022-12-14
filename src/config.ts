import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://notes.nijmeh.cloud",
  author: "Andrew Nijmeh",
  desc: "my notes, writings and thoughts.",
  title: "Andrew Nijmeh",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/anddddrew",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:andrew@nijmeh.cloud",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/0xnijmeh",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },

];
