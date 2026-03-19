const navBarLinks = [
  { name: 'Accueil', url: '/fr' },
  { name: 'Produits', url: '/fr/products' },
  { name: 'Services', url: '/fr/services' },
  { name: 'Blog', url: '/fr/blog' },
  { name: 'Contact', url: '/fr/contact' },
];

const footerLinks = [
  {
    section: 'Ã‰cosystÃ¨me',
    links: [
      { name: 'Documentation', url: '/fr/welcome-to-docs/' },
      { name: 'Outils et Ã‰quipements', url: '/fr/products' },
      { name: 'Services de Construction', url: '/fr/services' },
    ],
  },
  {
    section: 'SociÃ©tÃ©',
    links: [
      { name: 'Ã€ propos de nous', url: '#' },
      { name: 'Blog', url: '/fr/blog' },
      { name: 'CarriÃ¨res', url: '#' },
      { name: 'Clients', url: '#' },
    ],
  },
];

const socialLinks = {
  facebook: '#',
  x: '#',
  github: 'https://github.com/divinedrivedetail/ddd-demo',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};

