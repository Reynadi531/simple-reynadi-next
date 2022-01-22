/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Reynadi Dev",
  titleTemplate: "%s | Reynadi's Personal Website",
  defaultTitle: "Reynadi Dev",
  description: "A Reynadi's Personal Website",
  canonical: "https://reynadi.com",
  openGraph: {
    url: "https://reynadi.com",
    title: "Reynadi Dev",
    description: "Reynadi's Personal Website",
    images: [
      {
        url: "https://cdn.statically.io/og/theme=dark/Reynadi%20Dev.jpg",
        alt: "reynadi.com og-image",
      },
    ],
    site_name: "Reynadi Dev",
  },
  twitter: {
    handle: "@reynadi17",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
