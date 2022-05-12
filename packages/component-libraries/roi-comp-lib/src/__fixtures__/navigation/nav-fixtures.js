const navData = {
  navLinks: [
    {
      id: "homepage",
      name: "home",
      link: "/",
    },
    {
      id: "aboutpage",
      name: "about",
      link: "/about",
    },
    {
      id: "test",
      layout: "2 col",
      menuType: "test",
      name: "testing",
      navItems: [
        {
          id: "1",
          name: "name 1",
          link: "/",
        },
        {
          id: "2",
          name: "name 2",
          link: "/",
        },
      ],
    },
  ],
  footerLinks: [
    {
      id: "foot-1",
      name: "name 1",
      link: "/",
    },
    {
      id: "foot-2",
      name: "name 2",
      link: "/",
    },
  ],
}

export default navData
