import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Міндетті параметр
  images: {
    unoptimized: true, // Next.js Image компоненті статикалық экспортта осылай жұмыс істейді
  },
  // /kk и другие маршруты экспортируются как папки с index.html (а не X.html) —
  // так обычный nginx отдаёт их без доп. конфигурации (стандартный index index.html).
  trailingSlash: true,
};

export default nextConfig;
