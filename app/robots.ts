import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://finity.gg/sitemap.xml', // Placeholder domain, needs user input ideally but standard pattern
    };
}
