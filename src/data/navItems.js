export const navItems = [
  {path: "/", name: "Home"},
  {path: null, name: "Projects", children: [
    {path: "/videos", name: "Video"}, 
    {path: "/music", name: "Music"},
    {path: "/paintings", name: "Paintings"},
    {path: "/dj-sets", name: "DJ Sets"}
  ]},
  {path: "/about", name: "About"},
  // {path: "/newsletter", name: "Newsletter"},
  {path: "/events", name: "Events"},
  {path: "/contact", name: "Contact"},
];