// Enhanced Sitemap Generator for Masala Tulips
import { getAllRecipes } from '../data/recipes';

// Sitemap configuration
const SITEMAP_CONFIG = {
  baseUrl: 'https://masalatulips.nl',
  changefreq: {
    home: 'daily',
    categories: 'weekly',
    recipes: 'monthly',
    blogs: 'weekly',
    legal: 'monthly'
  },
  priority: {
    home: '1.0',
    categories: '0.9',
    recipes: '0.8',
    blogs: '0.7',
    legal: '0.3'
  }
};

// Generate sitemap with enhanced structure
export const generateSitemap = () => {
  const recipes = getAllRecipes();
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  
  <!-- Main Pages -->
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.home}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.home}</priority>
    <image:image>
      <image:loc>${SITEMAP_CONFIG.baseUrl}/logo192.png</image:loc>
      <image:title>Masala Tulips - Authentic Indian Recipes</image:title>
      <image:caption>Traditional and modern Indian cooking recipes</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/blogs</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.blogs}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.blogs}</priority>
  </url>
  
  <!-- Recipe Category Pages -->
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/breakfast</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/lunch</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/dinner</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/side-dish</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/drinks</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/kids-options</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/vegetarian</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/most-popular</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/all-recipes</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/upto-30-min</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/between-30-60-min</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/more-than-120-min</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
  
  <!-- Individual Recipe Pages with Enhanced Image Data -->
${recipes.map(recipe => `  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe/${recipe.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.recipes}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.recipes}</priority>
    <image:image>
      <image:loc>${recipe.mainImage}</image:loc>
      <image:title>${recipe.title} - ${recipe.subtitle}</image:title>
      <image:caption>${recipe.description}</image:caption>
      <image:license>https://creativecommons.org/licenses/by/4.0/</image:license>
    </image:image>
  </url>`).join('\n')}
  
  <!-- Legal Pages -->
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.legal}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.legal}</priority>
  </url>
  
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/terms-of-service</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.legal}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.legal}</priority>
  </url>
</urlset>`;

  return sitemap;
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/

# Allow important directories
Allow: /recipe-categories/
Allow: /recipe/
Allow: /blogs/

# Sitemap
Sitemap: ${SITEMAP_CONFIG.baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
};

// Generate enhanced sitemap index (for multiple sitemaps)
export const generateSitemapIndex = () => {
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITEMAP_CONFIG.baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
};

// Generate recipe-specific sitemap
export const generateRecipeSitemap = (recipes: any[]) => {
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${recipes.map(recipe => `  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe/${recipe.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.recipes}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.recipes}</priority>
    <image:image>
      <image:loc>${recipe.mainImage}</image:loc>
      <image:title>${recipe.title} - ${recipe.subtitle}</image:title>
      <image:caption>${recipe.description}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;
};

// Generate and save sitemap
export const saveSitemap = () => {
  const sitemap = generateSitemap();
  
  // In a real application, you would save this to a file
  // For now, we'll return it as a string
  return sitemap;
};

// Generate sitemap for specific category
export const generateCategorySitemap = (category: string, recipes: any[]) => {
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe-categories/${category}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.categories}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.categories}</priority>
  </url>
${recipes.map(recipe => `  <url>
    <loc>${SITEMAP_CONFIG.baseUrl}/recipe/${recipe.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${SITEMAP_CONFIG.changefreq.recipes}</changefreq>
    <priority>${SITEMAP_CONFIG.priority.recipes}</priority>
  </url>`).join('\n')}
</urlset>`;
};

// Validate sitemap structure
export const validateSitemap = (sitemap: string): boolean => {
  // Basic validation checks
  const hasXmlDeclaration = sitemap.includes('<?xml version="1.0" encoding="UTF-8"?>');
  const hasUrlset = sitemap.includes('<urlset');
  const hasUrls = sitemap.includes('<url>');
  const hasClosingTags = sitemap.includes('</urlset>');
  
  return hasXmlDeclaration && hasUrlset && hasUrls && hasClosingTags;
}; 