export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/docs",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/docs",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	links: {
		github: "https://github.com/akglitch",
		twitter: "https://twitter.com/aninakwageorge1",
	},
};
