// app/robots.ts 
import type { MetadataRoute } from "next"; 
export default function robots(): MetadataRoute.Robots { 
return { 
rules: { userAgent: "*", allow: "/" }, 
sitemap: "https://tp-seo-nextjs-a55b.vercel.app/sitemap.xml", 
}; 
}
