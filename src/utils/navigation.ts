// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Schedule', url: '/contact' },
  { name: 'Community', url: '/#community' },
  { name: 'Login', url: '/login' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Detailing Products', url: '/products' },
      { name: 'Care Plans', url: '/#plans' },
      { name: 'Book Appointment', url: '/contact' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '/#mission' },
      { name: 'Our Mission', url: '/#mission' },
      { name: 'Community Partners', url: '/#community' },
      { name: 'Testimonials', url: '/#testimonials' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/',
  google: 'https://maps.google.com/',
  slack: 'mailto:hello@divinedrivedetail.com',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
