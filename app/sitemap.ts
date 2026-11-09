// app/sitemap.ts 
import type { MetadataRoute } from "next"; 
export default function sitemap(): MetadataRoute.Sitemap { 
return [{ url: "https://isigform.vercel.app/", priority: 1 }]; 
}
