const siteMetadata = {
  title: 'Thiago',
  author: 'Thiago Cezar Posnske Sartorel',
  headerTitle: 'Thiago Sartorel',
  description: 'Portfolio profissional',
  language: 'pt-BR',
  siteUrl: '',
  siteRepo: 'https://github.com/ThiagoSartorel/Portfolio',
  image: 'https://github.com/thiagosartorel.png',
  socialBanner: 'https://github.com/thiagosartorel.png',
  email: 'thiagosartorel@uniplac.net',
  github: 'https://github.com/thiagosartorel',
  instagram: 'https://www.instagram.com/thiago_sartorel/',
  whatsapp: 'https://wa.me/5549999184629',
  linkedin: 'https://www.linkedin.com/in/thiagosartorel/',
  locale: 'pt-BR',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: false, // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: 'UA-100201704-1', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'emailOctopus',
  },
  comment: {
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: '', // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '', // supported options: pathname, url, title
      reactions: '', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: '',
      // theme when dark mode
      darkTheme: '',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      repo: '', // username/repoName
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: '',
    },
  },
}

module.exports = siteMetadata
