export const navItems = [
  { path: '/', name: 'Home' },
  {
    path: null,
    name: 'Projects',
    children: [
      { path: '/videos', name: 'Video' },
      { path: '/releases', name: 'Releases' },
      { path: '/dj-sets', name: 'DJ' },
    ],
  },
  { path: '/about', name: 'About' },
  // {path: "/newsletter", name: "Newsletter"},
  { path: '/press', name: 'Press' },
  { path: '/events', name: 'Events' },
  { path: '/contact', name: 'Contact' },
];
